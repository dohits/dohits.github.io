
import Postspage from "@/app/(route)/posts/_components/PostsPage";
import {getPostList} from "@/app/_utils/_lib/postParser";

export default async function allpost({params}:{params:any}) {

  const {page_num} = params;

  const page_size = 3;
  const page_start = 1 + (page_num * page_size);

  return (
    <>
      <div className="text-white text-4xl">Post</div>
      <div className="w-full">
        <Postspage page_start={page_start} page_size={page_size}/>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  // 페이지 네이션 설정 
  const config = {
    page_size: 3,
  }
  // 뷰 사이즈 기준 페이지 계산
  const gpl =  await getPostList();
  const totalCnt = gpl.length;
  const pageCnt = Math.ceil(totalCnt / config.page_size);
  const pagesArray = Array.from({ length: pageCnt }, (_, index) => (index + 1).toString());
  const result = pagesArray.map((page_num) => ({
    page_num: page_num,
  }));
  return result;
}  
