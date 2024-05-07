import DisqusComponent from "@/app/_components/DisqusComponent"

export default function Comment() {
  return (
    <main className="w-full flex flex-col bg-zinc-950 rounded-3xl mb-2">
      <div className="w-full whitespace-nowrap scale-[0.80]">
        <DisqusComponent identifier="tester" title="테스트"/>
      </div>
    </main>
  );
}
