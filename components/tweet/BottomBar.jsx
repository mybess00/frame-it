import { FaRegComment } from 'react-icons/fa'
import { AiOutlineRetweet } from 'react-icons/ai'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { formatNumber, formatDate } from '../options/tweet-options'


export default function BottomBar({ favCount, rtCount, commentCount, date, statsVisibility, fontColor, fontStyle }){

  return (
    <div className="flex flex-col">
      <div className="mt-3">
        <p style={{
          color: fontColor,
          fontStyle: fontStyle.italic ? 'italic' : '',
          fontWeight: fontStyle.bold ? 'bold' : '400'
        }}>
          {formatDate(date)}
        </p>
      </div>
      <div className={`flex flex-row flex-nowrap gap-5 mt-4 justify-evenly ${statsVisibility}`}>
        <div className="flex flex-rox flex-nowrap gap-1 items-center">
          < MdOutlineFavoriteBorder fontSize='32px' color={fontColor}/>
          <p style={{
            color: fontColor,
            fontStyle: fontStyle.italic ? 'italic' : '',
            fontWeight: fontStyle.bold ? 'bold' : '400'
          }}>
            {formatNumber(favCount)}
          </p>
        </div>
        <div className="flex flex-rox flex-nowrap gap-1 items-center">
          < AiOutlineRetweet fontSize='32px' color={fontColor}/>
          <p style={{
            color: fontColor,
            fontStyle: fontStyle.italic ? 'italic' : '',
            fontWeight: fontStyle.bold ? 'bold' : '400'
          }}>
            {formatNumber(rtCount)}
          </p>
        </div>
        <div className="flex flex-rox flex-nowrap gap-1 items-center">
          < FaRegComment fontSize='32px' color={fontColor}/>
          <p style={{
            color: fontColor,
            fontStyle: fontStyle.italic ? 'italic' : '',
            fontWeight: fontStyle.bold ? 'bold' : '400'
          }}>
            {formatNumber(commentCount)}
          </p>
        </div>
      </div>
    </div>
  );
}