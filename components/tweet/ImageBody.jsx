export default function ImageBody({ img, options }){
  if (!img) {
    return <div></div>
  }
  return(
    <div className={`${options.visibility ? 'flex' : 'hidden'} flex-wrap flex-row justify-between gap-y-4 mt-3 `}>
      {img.map((e, index, arr) => {
        return  <div style={{height: options.height}} className={`flex overflow-hidden rounded-xl ${options.width === 'auto' ? arr.length == 1 || (arr.length == 3 && index == 2) ? 'w-full' : 'w-[49%]' : 'w-full'}`}>
                  <img src={e} className='rounded-xl w-full object-cover'/>
                </div>
      })}
    </div>
  )
}