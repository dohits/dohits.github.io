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
        <li className="mt-10 text-white">홈 화면입니다. 아직 아무것도 없어요.</li>
      </ul>
    </main>
  );
}