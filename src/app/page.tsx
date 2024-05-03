import MainGridComponent from "@/app/_components/MainGridComponent"
export default function Home() {
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
          recent / popular
          <div className="relative mt-10 p-1 rounded-3xl overflow-hidden flex flex-col max-w-96">
            <img className="object-cover h-full w-full" src='/posts/공사중.png' alt="postImg"/>
            <div className="text-sm p-3">This is Title 이것은 제목입니다</div>
            <div className="text-xs p-2">Detail 내용 내용 내용 입니다.</div>
            <div className="absolute bg-zinc-900 z-30 w-full h-full opacity-0 hover:opacity-75">
              <div className="m-4">텍스트 설명설명입니다</div>
            </div>
          </div>
        </li>
        <li className="mt-10 w-full h-full">
          <MainGridComponent/>
        </li>
      </ul>
    </main>
  );
}