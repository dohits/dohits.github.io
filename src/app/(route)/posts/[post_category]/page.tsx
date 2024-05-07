import {getPostSlug, selectPost, MarkdownRender} from "@/app/_utils/_lib/postParser";
import {parsePostDetail, parsePost, parsePostAbstract,getPostPaths,getPostList} from "@/app/_utils/_lib/postParser";

export default function Posts() {

  return (
    <>
      <div className="text-white">
        전체글
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const gpl =  await getPostList();

  const result = gpl.map((gpldata) => ({
    post_category: gpldata.postAbstract.category ,
    /*post_title : gpldata.postAbstract.slug ,*/
  }));
  console.log(result);
  return result;
}  

/* 
    경로 생성 후 없는 경로로 진입시 
    개발환경에서 error 뜨더라도 
    배포시에는 정상적으로 not-found 페이지 진입되는것을 확인.
    자체 버그인듯 함.
*/



