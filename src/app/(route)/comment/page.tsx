import DisqusComponent from "@/app/_components/DisqusComponent"
import LivereComponent from "@/app/_components/LivereComponent";

export default function Comment() {
  return (
    <main className="dark:bg-zinc-950
                      w-full flex flex-col rounded-3xl mb-2">
      <li className="glitch-wrapper flex flex-col mt-12">
        <div className="anime-hideview">
          <div className="dark:text-white
                          glitch text-zinc-950 italic font-bigShouldersStencil !text-6xl sm:!text-8xl" data-text="댓글">
            댓글
          </div>
        </div>
      </li>
      {/* Disqus 댓글서비스
      <div className="w-full whitespace-nowrap scale-[0.80]">
        <DisqusComponent identifier="tester" title="테스트"/>
      </div>
       */}
      <LivereComponent></LivereComponent>
    </main>
  );
}
