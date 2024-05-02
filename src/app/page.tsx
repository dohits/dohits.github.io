
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center">
      <ul className="flex flex-col text-center">
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
        <li className="mt-10 w-full h-full text-white">
          recent / popular
          <div className="mt-10 p-1 rounded-3xl overflow-hidden flex flex-col">
            <img className="object-cover h-full w-full" src='/posts/공사중.png' alt="postImg"/>
            <div className="text-sm p-3">This is Title 이것은 제목입니다</div>
            <div className="text-xs p-2">Detail 내용 내용 내용 입니다.</div>
            <div className="absolute bg-zinc-600 z-[10]">카테고리 영역</div>
          </div>
        </li>
      </ul>
    </main>
  );
}