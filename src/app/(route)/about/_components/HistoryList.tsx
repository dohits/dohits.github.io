
export default function HistoryList({
  title,
  contents,
  date
}:{
  title:string,
  contents:string,
  date:string,
}){
  return(
    <>
      <div className="bg-zinc-950 w-full rounded-xl flex">
        <div className="text-white flex w-40 text-white pt-8 justify-center text-sm bg-zinc-800 pb-8 italic">
          {date}
        </div>
        <div className="text-white flex w-full text-white
        border-l-8 border-emerald-400 border-solid pl-8 pt-6
        ">
          <div className="bg-zinc-950 min-w-10 w-10 h-10 relative -left-[55px] rounded-full 
          border-emerald-400 border-solid border-4
          ">
          </div>
          <ul>
            <li className="text-xl zinc-100 text-wrap italic font-thin">{title}</li>
            <li className="text-xs text-zinc-400 text-wrap font-thin">{contents}</li>
          </ul>
        </div>
      </div>
    </>
  )
}