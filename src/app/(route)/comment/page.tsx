import DisqusComponent from "@/app/_components/DisqusComponent"

export default function Comment() {
  return (
    <main className="w-full flex flex-col bg-zinc-600 rounded-3xl mb-4 p-0">
      <div className="w-full whitespace-nowrap scale-[0.80]">
        <DisqusComponent identifier="tester" title="테스트"/>
      </div>
    </main>
  );
}
