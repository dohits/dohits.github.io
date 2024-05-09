import MainGridComponent from "@/app/_components/MainGridComponent"
import {sortPostList} from "@/app/_utils/_lib/postParser";
import CategoryBadge from "@/app/_common/CategoryBadge";

export default async function Home({params}:{params:string}) {

  let spl = await sortPostList(1,1);

  return (
    <main className="flex flex-col justify-center w-full">
      <ul className="flex flex-col text-center w-full">
        <li className="glitch-wrapper flex flex-col mt-12">
          <div className="anime-hideview">
            <div className="glitch text-white italic font-bigShouldersStencil !text-xl sm:!text-4xl" data-text="github.io">
              github.io
            </div>
          </div>
          <div className="anime-hideview">
            <div className="glitch text-white italic font-bigShouldersStencil !text-6xl sm:!text-8xl" data-text="dohits">
              dohits
            </div>
          </div>
        </li>
        <li className="mt-4 text-white w-full flex justify-center">
          <a href="https://hits.sh/dohits.github.io/">
            <img className="max-w-60 w-full" alt="Hits" src="https://hits.sh/dohits.github.io.svg?view=today-total&style=for-the-badge&label=visitors&color=09090B&labelColor=09090B&logo=github"/>
          </a>
        </li>
        <li className="mt-4 text-white w-full flex justify-center space-x-3">
          <a href="/" className="flex">
            <img className="h-8" alt="githubBtn" src={process.env.NEXT_PUBLIC_URL + '/icons/githubBtn.svg'} />
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute -left-[8px] -bottom-[20px] inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
              <span className="relative -left-[8px] -bottom-[20px] inline-flex rounded-full h-3 w-3 bg-emerald-300"></span>
            </span>
          </a>
          <a href="/" className="flex">
            <img className="h-8" alt="instagramBtn" src={process.env.NEXT_PUBLIC_URL + '/icons/instagramBtn.svg'} />
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute -left-[8px] -bottom-[20px] inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
              <span className="relative -left-[8px] -bottom-[20px] inline-flex rounded-full h-3 w-3 bg-emerald-300"></span>
            </span>
          </a>
          <a href="/" className="flex">
            <img className="h-8" alt="youtubeBtn" src={process.env.NEXT_PUBLIC_URL + '/icons/youtubeBtn.svg'} />
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute -left-[8px] -bottom-[20px] inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
              <span className="relative -left-[8px] -bottom-[20px] inline-flex rounded-full h-3 w-3 bg-emerald-300"></span>
            </span>
          </a>
        </li>
      </ul>
      <ul>
        <li className="mt-10 w-full h-full text-white">
          <div className="text-center">
            <span className="pb-1 w-full text-2xl italic font-thin">최근 포스트</span>
          </div>
          <div className="flex flex-wrap w-full justify-center">
            {spl.map((gpldata) => (
              <div key={gpldata.postDetail.id} className="w-full max-w-[600px]">
                <a href={gpldata.postAbstract.url} className="w-full">
                  <div className="relative mt-4 p-1 overflow-hidden flex flex-col w-full text-white">
                    <img className="object-cover h-full w-full rounded-3xl" src='/posts/공사중.png' alt="postImg"/>
                    <div className="text-2xl pl-3 pt-3">{gpldata.postDetail.title}</div>
                    <div className="text-sm text-zinc-400 pl-3 pt-1">{gpldata.postDetail.desc}</div>
                    <div className="text-right text-zinc-400">
                      {gpldata.postDetail.date &&
                      <>
                        <span className="text-sm">{gpldata.postDetail.date.toISOString().split('T')[0]}</span>
                        <span className="ml-2 text-xs font-thin">{gpldata.postDetail.date.toISOString().split('T')[1].split('.')[0]}</span>
                      </>
                      }
                    </div>
                    <div className="absolute bg-zinc-900 z-10 w-full h-full opacity-0 rounded-3xl hover:opacity-75">
                      <div className="m-4">텍스트 설명설명입니다</div>
                    </div>
                    <CategoryBadge value={gpldata.postAbstract.category}></CategoryBadge>
                    <CategoryBadge sub={true} value={gpldata.postDetail.category}></CategoryBadge>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </li>
        <li className="mt-10 w-full h-full">
          <MainGridComponent/>
        </li>
      </ul>
    </main>
  );
}