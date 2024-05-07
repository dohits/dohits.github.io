"use client"
import {getPostSlug, selectPost, MarkdownRender} from "@/app/_utils/_lib/postParser";
import {parsePostDetail, parsePost, parsePostAbstract,getPostPaths,getPostList} from "@/app/_utils/_lib/postParser";

export default async function CategoryComponents({getPostList}:{getPostList:any}){

  console.log(getPostList);
  
  // 카테고리 추출 로직-----------------
  const categories: { [key: string]: string[] } = {};

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
  //----------------------------- 카테고리 추출 로직
  console.log(categories);

  const HandleCategory = () => {
    console.log("d");
  };

  return (
    <>
      <div> {/* TODO ::: 카테고리 버튼*/}
        <select className="text-zinc-950 w-full" name="categoryLinker" onChange={HandleCategory}>
        {Object.keys(categories).map((majorCategory) => (
          <option key={majorCategory}>{majorCategory}</option>
        ))}
        </select>
      </div>
    </>
  );
}