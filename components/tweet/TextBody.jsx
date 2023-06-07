import { highlightTweet, formatTextBody } from '../options/tweet-options'

export default function TextBody({ text, fontColor, fontStyle }){

  const parsedText = highlightTweet(text);
 // const textParts = parsedText.split(/(<a.*?<\/a>|<br>|<img.*?\/>)/g);
  const textParts = parsedText.split(/(<a.*?<\/a>|<br>)/g);
  const elementos = formatTextBody(textParts);
  return (
    <div>
      <p className="text-justify" 
         style={{
          color: fontColor,
          fontStyle: fontStyle.italic ? 'italic' : '',
          fontWeight: fontStyle.bold ? 'bold' : '400'
          }}> 
            {elementos}
      </p> 
    </div>
  );
}