export default function ProfileCard(){
  return (
    <>
      <div className="dark:bg-neutral-800 dark:shadow-none anime-lr-view
                      shadow-md w-full relative block overflow-hidden rounded-lg border border-gray-100 flex flex-col justify-between">
        <ul className="p-4 flex justify-between">
          <div className="flex space-x-4">
            <li><img className="w-20 h-20 min-w-20 bg-white rounded-lg" src="/images/profileImg.jpg"></img></li>
            <li>
              <div className="dark:text-white text-zinc-950 text-sm italic">강도희 <span className="ml-2 italic text-xs text-zinc-700 dark:text-zinc-300 font-thin whitespace-nowrap">TechTree 재직중</span></div>
              <div className="dark:text-zinc-400 text-zinc-500 text-xs italic">Web FullStack Developer</div>
              <div className="mt-2 dark:text-zinc-400 text-zinc-500 text-xs italic font-light">- 한 우물 보단 여러 우물을 많이 파는것을 좋아해요.</div>
            </li>
          </div>
          <li><div className="hidden sm:flex dark:text-zinc-400 text-zinc-500 text-xs italic">1995.07.19</div></li>
        </ul>
        <ul className="pt-0 p-4">
          <li>
            <div className="dark:text-zinc-300 text-zinc-900 font-light text-xs italic">- 현재 소개 글을 준비중이에요.</div>
          </li>
        </ul>
        <ul>
          <li className=""></li>
        </ul>
        <div className="h-2 w-full bg-gradient-to-r from-emerald-200 from-10% via-teal-500 via-30% to-emerald-700 to-90%"/>
      </div>
    </>
  );
}