import {getPostSlug, selectPost, MarkdownRender} from "@/app/_utils/_lib/postParser";
import {parsePostDetail, parsePost, parsePostAbstract,getPostPaths,getPostList} from "@/app/_utils/_lib/postParser";
import CategoryBadge from "@/app/_common/CategoryBadge";

export default async function allpost() {
  let gpl = await getPostList();
  // 카테고리 추출 로직-----------------
  const categories: { [key: string]: string[] } = {};

  gpl.forEach(post => {
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

  return (
    <main className="flex flex-col justify-center w-full">
      <div className="text-white">All Post</div>


      <ul> {/* TODO ::: 카테고리 버튼*/}
        {Object.keys(categories).map((key) => (
          <li key={key} className="text-white">
            {/* 대분류 */}
            {key}
            {/* 소분류 */}
            <ul>
              {categories[key].map((subcategory, index) => (
                <li key={index} className="text-red-200">{subcategory}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>




      <div className="flex flex-wrap w-full justify-center">
        {gpl.map((gpldata) => (
          <>
            <div key={gpldata.postDetail.id}>
              <a href={gpldata.postAbstract.url} className="w-full max-w-[500px] md:max-w-[550px]">
                <div className="relative mt-10 p-1 overflow-hidden flex flex-col w-full text-white min-w-40">
                  <img className="object-cover h-full w-full rounded-3xl" src='/posts/공사중.png' alt="postImg"/>
                  <div className="text-3xl p-3">{gpldata.postDetail.title}</div>
                  <div className="text-sm text-zinc-400 p-2">{gpldata.postDetail.desc}</div>
                  <div className="absolute bg-zinc-900 z-10 w-full h-full opacity-0 rounded-3xl hover:opacity-75">
                    <div className="m-4">텍스트 설명설명입니다</div>
                  </div>
                  <CategoryBadge value={gpldata.postAbstract.category}></CategoryBadge>
                  <CategoryBadge sub={true} value={gpldata.postDetail.category}></CategoryBadge>
                </div>
              </a>
            </div>
          </>
        ))}
      </div>
    </main>
  );
}

/*

interface post {
  postAbstract : {
    url?: string;
    category?: string;
    slug?: string;
  };
  postDetail : {
    title?: string;
    date?: string;
    desc?: string;
    thumbnail? : string;
    content? : string;
  };
}

*/