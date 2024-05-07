"use client"
import { useRouter } from 'next/navigation';
export default function CategoryComponents({getPostList,category}:{getPostList:any,category?:any}){
  const router = useRouter();
  let selectCategory:string;

  if(category){
    selectCategory = category.post_category;
  }
  
  const categories: { [key: string]: string[] } = {};

            // 카테고리 추출
  getPostList.forEach((post:post) => {
    const majorCategory = post.postAbstract.category;
    const minorCategory = post.postDetail.category;
    
    if (majorCategory !== undefined) {
      if (!categories[majorCategory]) {
        categories[majorCategory] = [];
      }
      if (minorCategory !== undefined && !categories[majorCategory].includes(minorCategory)) {
        categories[majorCategory].push(minorCategory);
      }
    }
  });
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
          <option key="all" value="">전체글보기</option>
          {Object.keys(categories).map((majorCategory) => (
            selectCategory === majorCategory ? (
              <option key={majorCategory} value={majorCategory} selected>{majorCategory}</option>
            ) : <option key={majorCategory} value={majorCategory}>{majorCategory}</option>
          ))}
        </select>
      </div>
    </>
  );
}