import { NextResponse } from "next/server";
import satori from 'satori'
import twemoji from 'twemoji';
import fs from 'fs';
import path from 'path';
import { convert } from 'convert-svg-to-jpeg'
import TweetMockup from '../../components/TweetMockup'
import puppeteer from "puppeteer-core";
import { Blob } from "buffer";
import { createCanvas, loadImage } from "canvas";

const svgToPngURL = (svg) =>
  new Promise((resolve, reject) => {
    const img = new (require('canvas').Image)();
    img.onload = () => {
      const canvas = createCanvas(img.width, img.height);
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      resolve(canvas.toDataURL("image/png"));
    };
    img.onerror = (e) => {
      reject(e);
    };
    const blob = new Blob([svg], { type: "image/svg+xml" });
    img.src = URL.createObjectURL(blob);
 });


function readFileAsArrayBuffer(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (error, data) => {
      if (error) {
        reject(error);
      } else {
        const arrayBuffer = Buffer.from(data).buffer;
        resolve(arrayBuffer);
      }
    });
  });
}

const font = (style) => {
  if (style.bold && style.italic == false){
    return "/Nunito-Bold.ttf"
  } else if (style.bold == false && style.italic){
    return "/Nunito-Italic.ttf"
  } else if (style.bold && style.italic){
    return "Nunito-BoldItalic.ttf"
  } else {
    return "/Nunito-Regular.ttf"
  }
}

export async function POST ( request ) {
  
  const res = await request.json();
  const fontType = font(res.forJson.theme.fontStyle)
  console.log(res)
  const filePath = path.join(process.cwd(), 'public', 'fonts', fontType);
  const arrayBuffer = await readFileAsArrayBuffer(filePath);

  const svg = await satori(
    <TweetMockup props={res.forJson}/>,
    {
      width: res.forJson.theme.tweetWidth,
      fonts: [
        {
          name: 'Roboto',
          data: arrayBuffer,
          weight: 400,
          style: 'normal',
        },
      ],
      loadAdditionalAsset: async (code, segment) => {
        if (code === "emoji") {
          const emoji = twemoji.parse(segment, { folder: 'svg', ext: '.svg', base: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/' });
          const regex = /src="([^"]+)"/
          const match = emoji.match(regex);

          return match[1]
        }
        return null;
      }
    },
  )
  const pngURL = await svgToPngURL(svg)
  if (pngURL) {
    return NextResponse.json({
      pngURL
    }, { status: 200 })
  }

  return NextResponse.json({"Error": "svg is not defined for satory"}, { status: 500 })


  /*const browser = await puppeteer.connect({
    browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.BLESS_TOKEN}`
  })
  const jpeg = await convert(svg, [ browser ]);
  const response = new NextResponse(jpeg, {
    status: 200,
    headers: {
      'Content-Type': 'image/jpeg',
      'Content-Length': jpeg.length,
      'Content-Disposition': `attachment; filename="tweet-${res.forJson.tweet.id}-frameit.jpg"`,
    },
  });

  return response*/
}

