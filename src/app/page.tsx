import MainGridComponent from "@/app/_components/MainGridComponent"
import {sortPostList} from "@/app/_utils/_lib/postParser";
import CategoryBadge from "@/app/_common/CategoryBadge";

export default async function Home({params}:{params:string}) {

  let spl = await sortPostList(1,1);
  return (
    <main className="flex flex-col justify-center w-full">
      <ul className="flex flex-col text-center w-full">
        <li className="opacity-95 h-0 flex place-content-center z-1">
          <img className="anime-lr-view dark:invert-0 top-4 invert relative w-96 h-96 rounded-full" src="/images/mainpageBg.gif"></img>
        </li>
        <li className="glitch-wrapper flex flex-col mt-12">
          <div className="anime-hideview">
            <div className="dark:text-white
                            text-zinc-950 glitch italic font-bigShouldersStencil !text-xl sm:!text-4xl" data-text="github.io">
              github.io
            </div>
          </div>
          <div className="anime-hideview">
            <div className="dark:text-white
                            text-zinc-950 glitch italic font-bigShouldersStencil !text-6xl sm:!text-8xl" data-text="dohits">
              dohits
            </div>
          </div>
        </li>
        <li className="mt-4 text-white w-full flex justify-center">
          <a href="https://hits.sh/dohits.github.io/">
            <img className="dark:invert-0
                            invert max-w-60 w-full rounded-3xl" alt="Hits" src="https://hits.sh/dohits.github.io.svg?view=today-total&style=for-the-badge&label=visitors&color=000000&labelColor=000000&logo=github"/>
          </a>
        </li>
        <li className="mt-4 text-white w-full flex justify-center space-x-3">
          <a href="https://github.com/dohits" className="flex">
            <img className="dark:invert-0 
                            invert h-8" alt="githubBtn" src={process.env.NEXT_PUBLIC_URL + '/icons/githubBtn.svg'} />
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute -left-[8px] -bottom-[20px] inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
              <span className="relative -left-[8px] -bottom-[20px] inline-flex rounded-full h-3 w-3 bg-emerald-300"></span>
            </span>
          </a>
          <a href="/" className="flex">
            <img className="dark:invert-0
                            invert h-8" alt="instagramBtn" src={process.env.NEXT_PUBLIC_URL + '/icons/instagramBtn.svg'} />
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute -left-[8px] -bottom-[20px] inline-flex h-full w-full rounded-full bg-zinc-500 opacity-75"></span>
              <span className="relative -left-[8px] -bottom-[20px] inline-flex rounded-full h-3 w-3 bg-zinc-400"></span>
            </span>
          </a>
          <a href="/" className="flex">
            <img className="dark:invert-0
                            invert h-8" alt="youtubeBtn" src={process.env.NEXT_PUBLIC_URL + '/icons/youtubeBtn.svg'} />
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute -left-[8px] -bottom-[20px] inline-flex h-full w-full rounded-full bg-zinc-500 opacity-75"></span>
              <span className="relative -left-[8px] -bottom-[20px] inline-flex rounded-full h-3 w-3 bg-zinc-400"></span>
            </span>
          </a>
        </li>
      </ul>
      <ul className="z-10">
        <li className="dark:text-white
                      text-zinc-950 mt-10 w-full h-full">
          <div className="text-center">
            <span className="pb-1 w-full text-2xl italic font-light">최근 포스트</span>
          </div>
          <div className="flex flex-wrap w-full justify-center">
            {spl.map((gpldata) => (
              <div key={gpldata.postDetail.id} className="w-full max-w-[600px] anime-lr-view">
                <a href={gpldata.postAbstract.url} className="w-full">
                  <div className="relative mt-4 p-1 overflow-hidden flex flex-col w-full text-white">
                    <img className="object-cover h-full w-full rounded-3xl border-2 border-white border-solid" src={gpldata.postDetail.thumbnail} alt="postImg"/>
                    <div className="dark:text-white
                                    text-zinc-950 text-lg pl-3 pt-3">{gpldata.postDetail.title}</div>
                    <div className="text-sm text-zinc-400 pl-3 pt-1">{gpldata.postDetail.desc}</div>
                    <div className="text-right text-zinc-400">
                      {gpldata.postDetail.date &&
                      <>
                        <span className="text-sm">{gpldata.postDetail.date.toISOString().split('T')[0]}</span>
                        <span className="ml-2 text-xs font-thin">{gpldata.postDetail.date.toISOString().split('T')[1].split('.')[0]}</span>
                      </>
                      }
                    </div>
                    <div className="absolute bg-zinc-900 z-10 w-full h-full opacity-0 rounded-3xl hover:opacity-75"></div>
                    <CategoryBadge value={gpldata.postAbstract.category}></CategoryBadge>
                    <CategoryBadge sub={true} value={gpldata.postDetail.category}></CategoryBadge>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </li>
        {/**
        <li className="mt-10 w-full h-full">
          <MainGridComponent/>
        </li>
         */}
      </ul>
    </main>
  );
}