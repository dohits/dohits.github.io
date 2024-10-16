import {getPostList} from "@/app/_utils/_lib/postParser";
import { redirect } from 'next/navigation';
 
export default async function Posts({params}:{params:any}) {
  const {post_category} = params;
  redirect(`/posts/${post_category}/list/1`);
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



