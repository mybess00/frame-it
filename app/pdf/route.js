import { NextResponse } from "next/server";
import puppeteer from "puppeteer-core";

export async function POST (request) {
  /*const res = await request.json()

  if (!res) {
    return new NextResponse( 'Error', {
      status: 400
    })
  }*/

  //

  const browser = await puppeteer.connect({
    browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.BLESS_TOKEN}`,
  })

  const page = await browser.newPage()
  await page.setViewport({ width: 1920, height: 1080 })
  await page.goto('https://www.estrategiasdeinversion.com/herramientas/diccionario/criptomonedas/bitcoin-t-1817')

  return NextResponse.status(200).send(await page.pdf())
}