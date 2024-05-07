import {getPostSlug, selectPost, MarkdownRender} from "@/app/_utils/_lib/postParser";
import {parsePostDetail, parsePost, parsePostAbstract,getPostPaths,getPostList} from "@/app/_utils/_lib/postParser";

import CategoryBadge from "@/app/_common/CategoryBadge";
import CategoryComponents from "@/app/(route)/posts/_components/CategoryComponents";

export default async function Posts({params}:{params:any}) {
  const category = params;
  let gpl_post = await getPostList(category.post_category);
  let gpl_category = await getPostList();

  return (
    <main className="flex flex-col justify-center w-full">
      <div className="text-white text-4xl">Post</div>
      <ul className="text-white flex mt-4 space-x-4">
        <li className="p-2 border-b-2 border-emerald-400 border-solid">최신순</li>
        <li className="p-2">조회순</li>
      </ul>
      <CategoryComponents getPostList={gpl_category} category={category}/>
      <div className="flex flex-wrap w-full justify-center">
        {gpl_post.map((gpldata) => (
          <div key={gpldata.postDetail.id}>
            <a href={gpldata.postAbstract.url} className="w-full max-w-[500px] md:max-w-[550px]">
              <div className="relative mt-10 p-1 overflow-hidden flex flex-col w-full text-white min-w-40">
                <img className="object-cover h-full w-full rounded-3xl" src='/posts/공사중.png' alt="postImg"/>
                <div className="text-3xl p-3">{gpldata.postDetail.title}</div>
                <div className="text-sm text-zinc-400 p-2">{gpldata.postDetail.desc}</div>
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
    </main>
  );
}

export async function generateStaticParams() {
  const gpl =  await getPostList();

  const result = gpl.map((gpldata) => ({
    post_category: encodeURI(gpldata.postAbstract.category||'') ,
    /*post_title : gpldata.postAbstract.slug ,*/
  }));
  return result;
}  

/* 
    경로 생성 후 없는 경로로 진입시 
    개발환경에서 error 뜨더라도 
    배포시에는 정상적으로 not-found 페이지 진입되는것을 확인.
    자체 버그인듯 함.
*/



