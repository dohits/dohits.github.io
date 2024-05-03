import MainGridComponent from "@/app/_components/MainGridComponent"
export default function Home() {
  return (
    <main className="flex flex-col justify-center w-full">
      <ul className="flex flex-col text-center w-full">
        <li className="glitch-wrapper flex flex-col">
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
        <li className="mt-10 text-white">
          <a href="https://hits.sh/dohits.github.io/">
            <img alt="Hits" src="https://hits.sh/dohits.github.io.svg?view=today-total&style=for-the-badge&label=visitors&color=09090B&labelColor=09090B&logo=github"/>
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
              <span>텍스트 설명설명입니다</span>
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