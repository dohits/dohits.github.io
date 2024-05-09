
import Postspage from "@/app/(route)/posts/_components/PostsPage";
import PaginationBtnComponents from "@/app/(route)/posts/_components/PaginationBtnComponents";
import {getPostList} from "@/app/_utils/_lib/postParser";

// 페이지 뷰 설정
const config = {
  page_size: 3,
}

// 페이지 배열 [minpage ~ maxpage]
async function pageTotalCalc(){
  const gpl = await getPostList();
  const totalCnt = gpl.length;
  const pageCnt = Math.ceil(totalCnt / config.page_size);
  const pagesArray = Array.from({ length: pageCnt }, (_, index) => (index + 1).toString());
  
  return pagesArray;
}

// 정적 페이지 생성(페이지 숫자 만큼)
export async function generateStaticParams() {
  const pagesArray = await pageTotalCalc();
  const result = pagesArray.map((page_num) => ({
    page_num: page_num,
  }));
  return result;
}  

export default async function allpost({params}:{params:any}) {

  const pagesArray = await pageTotalCalc();
  const {page_num} = params;
  const page_start = 1 + (config.page_size * (page_num - 1));

  return (
    <>
      <div className="text-white text-4xl">Post</div> 
      <div className="w-full">
        <PaginationBtnComponents pageArray={pagesArray}/>
        <Postspage page_start={page_start} page_size={config.page_size}/>
      </div>
      <PaginationBtnComponents pageArray={pagesArray}/>
    </>
  );
}
