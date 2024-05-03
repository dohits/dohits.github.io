import {getPostSlug, selectPost, MarkdownRender} from "@/app/_utils/_lib/postParser";
import {parsePostDetail, parsePost, parsePostAbstract,getPostPaths,getPostList} from "@/app/_utils/_lib/postParser";

export default async function allpost() {
  let gpl = await getPostList();
  console.log("=============================");
  console.log(gpl);
  console.log("=============================");
  return (
    <main className="flex flex-col justify-center w-full">
      <div className="text-white">All Post</div>
      <div className="flex flex-wrap w-full justify-center">
        {gpl.map((gpldata) => (
          <>
            <a href={gpldata.postAbstract.url} className="w-full max-w-[500px] md:max-w-[550px]">
              <div className="relative mt-10 p-1 overflow-hidden flex flex-col w-full text-white min-w-40">
                <img className="object-cover h-full w-full rounded-3xl" src='/posts/공사중.png' alt="postImg"/>
                <div className="text-3xl p-3">{gpldata.postDetail.title}</div>
                <div className="text-sm text-zinc-400 p-2">{gpldata.postDetail.desc}</div>
                <div className="absolute bg-zinc-900 z-10 w-full h-full opacity-0 rounded-3xl hover:opacity-75">
                  <div className="m-4">텍스트 설명설명입니다</div>
                </div>
              </div>
            </a>
          </>
        ))}
      </div>
    </main>
  );
}

/*

interface post {
  postAbstract : {
    url?: string;
    category?: string;
    slug?: string;
  };
  postDetail : {
    title?: string;
    date?: string;
    desc?: string;
    thumbnail? : string;
    content? : string;
  };
}

*/