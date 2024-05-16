
import Postspage from "@/app/(route)/posts/_components/PostsPage";
import PaginationBtnComponents from "@/app/(route)/posts/_components/PaginationBtnComponents";
import {getPostList} from "@/app/_utils/_lib/postParser";
import {pageViewConfig} from "@/app/(route)/posts/_config/pageViewConfig";
import PostSort from "../../_components/PostSort";

// 페이지 배열 [minpage ~ maxpage]
async function pageTotalCalc(){
  const gpl = await getPostList();
  const totalCnt = gpl.length;
  const pageCnt = Math.ceil(totalCnt / pageViewConfig.page_size);
  const pagesArray = Array.from({ length: pageCnt }, (_, index) => (index + 1).toString());
  return pagesArray;
}

// 정적 페이지 생성(페이지 숫자 만큼)
export async function generateStaticParams() {
  
  const pagesArray = await pageTotalCalc();
  const result = pagesArray.map((page_num) => ({
    slug: [page_num],
  }));
  
  // 쿼리파라미터 생성 (SSG환경에서 서버컴포넌트 <-> 클라이언트간 통신 불가로 대체)
  /*
  pagesArray.forEach((page_num) => {
    result.push({ slug: [page_num + "@sortOld"] });
    result.push({ slug: [page_num + "@sortNew"] });
  });
  */
  return result;
}  

export default async function allpost({
  params,
}:{
  params:any
}) {
  
  const pagesArray = await pageTotalCalc();
  const {slug} = params;
  const page_start = 1 + (pageViewConfig.page_size * (slug.page_num - 1));
  
  // 쿼리스트링 대체사용 정렬 로직
  /*
  let separated = slug[0].split('%40');
  let removedPercent = separated.map((str: string) => str.replace(/%/g, ''));
  let sortType;
  if (removedPercent[1]==="sortOld"){
    sortType=true;
  }else{
    sortType=false;
  }
  */
  return (
    <>
      <div className="dark:text-white 
                      text-zinc-950 text-4xl italic font-bold">Post</div> 
      <div className="w-full">
      <PostSort>
        <Postspage 
          page_start={page_start} 
          page_size={pageViewConfig.page_size}
          /*old_sort={sortType}*/
        >
          <>
            <div className="flex justify-end">
              <PaginationBtnComponents 
                pageArray={pagesArray} 
                pagination_size={pageViewConfig.pagination_size}
              />
            </div>
          </>
        </Postspage>
      </PostSort>
      </div>
      <div className="mt-4">
        <PaginationBtnComponents 
          pageArray={pagesArray} 
          pagination_size={pageViewConfig.pagination_size}
        />
      </div>
    </>
  );
}
