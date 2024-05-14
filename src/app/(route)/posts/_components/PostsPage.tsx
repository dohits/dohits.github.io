import {getPostList, sortPostList} from "@/app/_utils/_lib/postParser";
import CategoryBadge from "@/app/_common/CategoryBadge";
import CategoryComponents from "@/app/(route)/posts/_components/CategoryComponents";

export default async function allpost({
  page_start,
  page_size,
  post_category,
  children,
}:{
  page_start?:number,
  page_size?:number,
  post_category?:string,
  children?: React.ReactElement
}){

  let gpl = await getPostList();
  let spl;
  let decode_category;

  if(!post_category){post_category="";}
  if(post_category){decode_category = decodeURI(post_category);}
  
  if(!page_start || !page_size){ 
    spl = await sortPostList(1, 3, decode_category);
  }else{ 
    spl = await sortPostList(page_start, page_size, decode_category); 
  }
  
  return (
    <>
      <div className="flex /*justify-end*/">
        <CategoryComponents getPostList={gpl} category={decode_category}/>
      </div>
      <ul className="text-white flex mt-4 space-x-4">
        <li className="p-2 border-b-2 border-emerald-400 border-solid">최신순</li>
        <li className="p-2">오래된순</li>
      </ul>
      {children}
      {/**
          // 소분류
          <li className="flex flex-col">
            {categories[majorCategory].map((minorCategory, index) => (
              <span key={index} className="text-red-200">{minorCategory}</span>
            ))}
          </li>
      */}
      <div className="flex flex-wrap w-full justify-center">
        {spl.map((gpldata) => (
          <div key={gpldata.postDetail.id} className="w-full max-w-[600px]">
            <a href={gpldata.postAbstract.url} className="w-full">
              <div className="relative mt-4 p-1 overflow-hidden flex flex-col w-full text-white">
                <img className="object-cover h-full w-full rounded-3xl border-2 border-white border-solid" src={gpldata.postDetail.thumbnail} alt="postImg"/>
                <div className="text-lg pl-3 pt-3">{gpldata.postDetail.title}</div>
                <div className="text-sm text-zinc-400 pl-3 pt-1">{gpldata.postDetail.desc}</div>
                <div className="text-right text-zinc-400 mt-3">
                  {gpldata.postDetail.date &&
                  <>
                    <span className="text-sm">{gpldata.postDetail.date.toISOString().split('T')[0]}</span>
                    <span className="ml-2 text-xs font-thin">{gpldata.postDetail.date.toISOString().split('T')[1].split('.')[0]}</span>
                  </>
                  }
                </div>
                <div className="absolute bg-zinc-900 z-10 w-full h-full opacity-0 rounded-3xl hover:opacity-75">
                </div>
                <CategoryBadge value={gpldata.postAbstract.category}></CategoryBadge>
                <CategoryBadge sub={true} value={gpldata.postDetail.category}></CategoryBadge>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
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