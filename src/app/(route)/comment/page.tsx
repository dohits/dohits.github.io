import DisqusComponent from "@/app/_components/DisqusComponent"

export default function Comment() {
  return (
    <main className="w-full flex flex-col bg-zinc-950 rounded-3xl mb-2">
      <li className="glitch-wrapper flex flex-col mt-12">
        <div className="anime-hideview">
          <div className="glitch text-white italic font-bigShouldersStencil !text-6xl sm:!text-8xl" data-text="댓글">
            댓글
          </div>
        </div>
      </li>
      <div className="w-full whitespace-nowrap scale-[0.80]">
        <DisqusComponent identifier="tester" title="테스트"/>
      </div>
    </main>
  );
}
