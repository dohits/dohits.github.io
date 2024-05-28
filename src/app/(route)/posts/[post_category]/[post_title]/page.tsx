
import {selectPost, MarkdownRender} from "@/app/_utils/_lib/postParser";
import {getPostList} from "@/app/_utils/_lib/postParser";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "상세페이지 테스트",
  description: "상세상세",
};

export default async function Posts({params}:{params:any}) {
  const {post_category,post_title} = params;
  const postData = await selectPost(
                            decodeURI(post_title)
                            ,decodeURI(post_category));
                            
  if (postData){
    return (
      <>
        <MarkdownRender content={postData}/>
      </>
    );
  }
}

export async function generateStaticParams() {
  const gpl =  await getPostList();

  const result = gpl.map((gpldata) => ({
    post_category: gpldata.postAbstract.category ,
    post_title : gpldata.postAbstract.slug ,
    // 로컬환경에서 테스트시 아래 주석 해제, github pages 는 url 자동인코딩되므로 위의 코드 사용
    //post_category: encodeURI(gpldata.postAbstract.category || 'error') ,
    //post_title : encodeURI(gpldata.postAbstract.slug || 'error') ,
  }));
  return result;
}  

/* 
    경로 생성 후 없는 경로로 진입시 
    개발환경에서 error 뜨더라도 
    배포시에는 정상적으로 not-found 페이지 진입됨.
*/