"use client"
import { useRouter } from 'next/navigation';

// category 인자 -> option selected 용도로 사용
export default function CategoryComponents({getPostList,category}:{getPostList:any,category?:any}){
  const router = useRouter();
  let selectCategory:string;

  if(category){
    selectCategory = category.post_category;
  }
  
  const categories: { [key: string]: { count: number, subcategories: string[] } } = {};

  // 카테고리 추출 및 게시물 수 카운트
  getPostList.forEach((post: post) => {
    const majorCategory = post.postAbstract.category;
    const minorCategory = post.postDetail.category;

    if (majorCategory !== undefined) {
      if (!categories[majorCategory]) {
        categories[majorCategory] = { count: 0, subcategories: [] };
      }
      categories[majorCategory].count += 1;

      if (minorCategory !== undefined && !categories[majorCategory].subcategories.includes(minorCategory)) {
        categories[majorCategory].subcategories.push(minorCategory);
      }
    }
  });

  const allpostCnt = getPostList.length;
           // 카테고리 핸들이벤트
  const HandleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const pathUrl = "/posts"
    const category = e.target.value;
    router.push(`${pathUrl}/${category}`);
  };

  return (
    <>
      <div>
        <select className="text-zinc-950 w-full" name="categoryLinker" onChange={HandleCategory}>
          <option key="all" value="">전체 글 &#40;{allpostCnt}&#41;</option>
          {Object.keys(categories).map((majorCategory) => (
            selectCategory === majorCategory ? (
              <option key={majorCategory} value={majorCategory} selected>
                {majorCategory} &#40;{categories[majorCategory].count}&#41;
              </option>
            ) : 
              <option key={majorCategory} value={majorCategory}>
                {majorCategory} &#40;{categories[majorCategory].count}&#41;
              </option>
          ))}
        </select>
      </div>
    </>
  );
}