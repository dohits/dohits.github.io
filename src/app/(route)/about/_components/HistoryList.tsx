
export default function HistoryList({
  title,
  contents,
  date,
  unCircle,
  contourLine,
}:{
  title?:string,
  contents?:string,
  date?:string,
  unCircle?:boolean,
  contourLine?:string,
}){
  return(
    <>
      {contourLine ? 
        // contourLine == 값 있을경우
        <div className="bg-zinc-800 rounded-r-full">
          <div className="bg-zinc-950 min-w-10 w-full relative rounded-full 
          border-emerald-400 border-solid border-2
          ">
            <div className="text-white flex w-full h-full justify-center items-center mt-4 mb-4 text-2xl italic">{contourLine}</div>
          </div> 
        </div>
        :
        // contourLine == "" || contourLine == undefined
        <div className="bg-zinc-950 w-full rounded-xl flex">
          <div className="text-white flex w-40 text-white pt-8 justify-center text-sm bg-zinc-800 pb-8 italic">
            {date}
          </div>
          <div className="text-white flex w-full text-white
          border-l-4 border-emerald-400 border-solid pl-8 pt-6
          ">
            
            {unCircle ? 
            // unCircle == true
            <div className="ml-10">
            </div>
            :
            // unCircle == false || unCircle == undefined
              <div className="bg-zinc-950 min-w-10 w-10 h-10 relative -left-[55px] rounded-full 
              border-emerald-400 border-solid border-4
              ">
              </div>
            }
            <ul>
              <li className="text-xl zinc-100 text-wrap italic font-thin">{title}</li>
              <li className="text-xs text-zinc-400 text-wrap font-thin mb-4">{contents}</li>
            </ul>
          </div>
        </div>
      }
    </>
  )
}