import {getPostList} from "@/app/_utils/_lib/postParser";
import CategoryBadge from "@/app/_common/CategoryBadge";
import CategoryComponents from "@/app/(route)/posts/_components/CategoryComponents";

export default async function Posts({params,searchParams}:{params:any,searchParams:any}) {
  const {post_category} = params;
  const decode_category = decodeURI(post_category);
  let gpl_post = await getPostList(decode_category);
  let gpl_category = await getPostList();
  
  
  return (
    <main className="flex flex-col justify-center w-full">
      <div className="text-white text-4xl">Post</div>
      <ul className="text-white flex mt-4 space-x-4">
        <li className="p-2 border-b-2 border-emerald-400 border-solid">최신순</li>
        <li className="p-2">조회순</li>
      </ul>
      <CategoryComponents getPostList={gpl_category} category={decode_category}/>
      <div className="flex flex-wrap w-full justify-center">
        {gpl_post.map((gpldata) => (
          <div key={gpldata.postDetail.id} className="w-full max-w-[600px]">
            <a href={gpldata.postAbstract.url} className="w-full">
              <div className="relative mt-4 p-1 overflow-hidden flex flex-col w-full text-white">
                <img className="object-cover h-full w-full rounded-3xl" src='/posts/공사중.png' alt="postImg"/>
                <div className="text-2xl pl-3 pt-3">{gpldata.postDetail.title}</div>
                <div className="text-sm text-zinc-400 pl-3 pt-1">{gpldata.postDetail.desc}</div>
                <div className="text-right text-zinc-400">
                  {gpldata.postDetail.date &&
                  <>
                    <span className="text-sm">{gpldata.postDetail.date.toISOString().split('T')[0]}</span>
                    <span className="ml-2 text-xs font-thin">{gpldata.postDetail.date.toISOString().split('T')[1].split('.')[0]}</span>
                  </>
                  }
                </div>
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
    post_category: gpldata.postAbstract.category ,
    // 로컬환경에서 테스트시 아래 주석 해제, github pages 는 url 자동인코딩되므로 위의 코드 사용
    //post_category: encodeURI(gpldata.postAbstract.category||'error') ,
  }));
  return result;
}  

/* 
    경로 생성 후 없는 경로로 진입시 
    개발환경에서 error 뜨더라도 
    배포시에는 정상적으로 not-found 페이지 진입됨.
*/



