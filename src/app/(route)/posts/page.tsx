import {getPostList, sortPostList} from "@/app/_utils/_lib/postParser";
import CategoryBadge from "@/app/_common/CategoryBadge";

import CategoryComponents from "@/app/(route)/posts/_components/CategoryComponents";
export default async function allpost() {
  let gpl = await getPostList();
  let spl = await sortPostList(1,10);
  
  return (
    <main className="flex flex-col justify-center w-full">
      <div className="text-white text-4xl">Post</div>
      <CategoryComponents getPostList={gpl}/>
{/**
 * 
 * 
 * 
            // 소분류
            <li className="flex flex-col">
              {categories[majorCategory].map((minorCategory, index) => (
                <span key={index} className="text-red-200">{minorCategory}</span>
              ))}
            </li>
 * 
 * 
 * 
 * 
 */}
      <div className="flex flex-wrap w-full justify-center">
        {spl.map((gpldata) => (
          <div key={gpldata.postDetail.id}>
            <a href={gpldata.postAbstract.url} className="w-full max-w-[500px] md:max-w-[550px]">
              <div className="relative mt-10 p-1 overflow-hidden flex flex-col w-full text-white min-w-40">
                <img className="object-cover h-full w-full rounded-3xl" src='/posts/공사중.png' alt="postImg"/>
                <div className="text-3xl pl-3 pt-3">{gpldata.postDetail.title}</div>
                <div className="text-sm text-zinc-400 pl-3 pt-1">{gpldata.postDetail.desc}</div>
                <div className="text-right text-zinc-400">
                  {gpldata.postDetail.date &&
                  <>
                    <span className="text-sm">{gpldata.postDetail.date.toISOString().split('T')[0]}</span>
                    <span className="ml-2 text-xs font-thin">{gpldata.postDetail.date.toISOString().split('T')[1].split('.')[0]}</span>
                  </>
                  }
                </div>
                <div className="absolute bg-zinc-900 z-10 w-full h-full opacity-0 rounded-3xl hover:opacity-75">
                  <div className="m-4">텍스트 설명설명입니다</div>
                </div>
                <CategoryBadge value={gpldata.postAbstract.category}></CategoryBadge>
                <CategoryBadge sub={true} value={gpldata.postDetail.category}></CategoryBadge>
              </div>
            </a>
          </div>
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