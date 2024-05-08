"use client"
import { useRouter } from 'next/navigation';

// category 인자 -> option selected 용도로 사용
export default function CategoryComponents({getPostList,category}:{getPostList:any,category?:string}){
  const router = useRouter();

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
    <> {/** ul li 로 변경하여 재디자인 할것 */}
      <div className='mt-4 /*text-center*/'>
        <select className="p-2 rounded-3xl font-spoqa text-xs" name="categoryLinker" onChange={HandleCategory} value={category}>
          <option key="all" value="" className='h-10'>전체 글 &#40;{allpostCnt}&#41;</option>
          {Object.keys(categories).map((majorCategory) => (
              <option key={majorCategory} value={majorCategory}>
                {majorCategory} &#40;{categories[majorCategory].count}&#41;
              </option>
          ))}
        </select>
      </div>
    </>
  );
}