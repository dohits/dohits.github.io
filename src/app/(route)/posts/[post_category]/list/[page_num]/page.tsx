import Postspage from "@/app/(route)/posts/_components/PostsPage";
import PaginationBtnComponents from "@/app/(route)/posts/_components/PaginationBtnComponents";
import {getPostList} from "@/app/_utils/_lib/postParser";
import {pageViewConfig} from "@/app/(route)/posts/_config/pageViewConfig";

// 페이지 배열 [minpage ~ maxpage]
async function pageTotalCalc(category?:string){

  let gpl;
  if(category){
    gpl = await getPostList(category);
  }else{
    gpl = await getPostList();
  }

  const totalCnt = gpl.length;
  const pageCnt = Math.ceil(totalCnt / pageViewConfig.page_size);
  const pagesArray = Array.from({ length: pageCnt }, (_, index) => (index + 1).toString());
  return pagesArray;
}

// 페이지 생성 보조
/**
 *  example
 * [
  { post_category: '한글', page_num: '1' },
  { post_category: 'testi', page_num: '1' },
  { post_category: 'Frontend', page_num: '1' },
  { post_category: 'Frontend', page_num: '2' },
  { post_category: 'etc', page_num: '1' },
  { post_category: 'etc', page_num: '2' },
  { post_category: 'dateTest', page_num: '1' },
  { post_category: 'dateTest', page_num: '2' }
]
 * 
 */
async function generateData(){
  const gpl =  await getPostList();
  
  const categoryGroup = gpl.flatMap(gpldata => gpldata.postAbstract.category);
  const uniqueCategories = [...new Set(categoryGroup)];
  
  let data=[];

  for(let i=0;i<uniqueCategories.length;i++){
    const totalCnt = (await getPostList(uniqueCategories[i])).length;
    const pageCnt = Math.ceil(totalCnt / pageViewConfig.page_size);

    for(let x=1; x<pageCnt+1; x++){
      data.push({post_category : uniqueCategories[i] , page_num : x.toString() })
    }
  }
  return data;
}

// 정적 페이지 생성(페이지 숫자 만큼)
export async function generateStaticParams() {
  const data = generateData();
  return data;
}

// view
export default async function allpost({params}:{params:any}) {
  
  const {page_num,post_category} = params;
  const decodeCategory = decodeURI(post_category)
  
  const pagesArray = await pageTotalCalc(decodeCategory);
  
  const page_start = 1 + (pageViewConfig.page_size * (page_num - 1));

  return (
    <>
      <div className="text-white text-4xl italic font-bold">Post</div> 
      <div className="w-full">
        <Postspage 
          page_start={page_start} 
          page_size={pageViewConfig.page_size}
          post_category={post_category}
        >
          <div className="flex justify-end">
            <PaginationBtnComponents 
              pageArray={pagesArray} 
              pagination_size={pageViewConfig.pagination_size}
            />
          </div>
        </Postspage>
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
