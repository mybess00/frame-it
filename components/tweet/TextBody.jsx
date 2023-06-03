import { highlightTweet, formatTextBody } from '../options/tweet-options'

export default function TextBody({ text }){
 
  const parsedText = highlightTweet(text);
 // const textParts = parsedText.split(/(<a.*?<\/a>|<br>|<img.*?\/>)/g);
  const textParts = parsedText.split(/(<a.*?<\/a>|<br>)/g);
  const elementos = formatTextBody(textParts);
  return (
    <div>
      <p className="text-justify text-[#000]">{elementos}</p> 
    </div>
  );
}