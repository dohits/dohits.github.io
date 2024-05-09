"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function PaginationBtnComponents({
  pageArray, 
}:{
  pageArray?:string[], 
}){
  const pathName = usePathname();
  const parts = pathName.split("/"); 
  const pageNumber = parts[parts.length - 1]; // split 된 배열의 마지막 요소 추출
  const nonPageNumPath = parts.slice(0, -1).join("/"); // 페이지넘버를 제외한 패스

  console.log(nonPageNumPath);
  let totalPage;
  if(!pageArray){ totalPage = 1; }else{ totalPage = pageArray[pageArray.length-1]; }

  
  return(
    <>
      <ul className="flex space-x-3 text-lg text-white justify-center items-end">
        {pageArray && pageArray.length > 0 && ( // null 체크
          <>
            {pageArray.map((num:string) => ( // 페이지 배열 추출
              <>
                {num === pageNumber ? // 페이지 체크
                <> {/** 현재 페이지 */}
                  <li className="text-4xl text-emerald-400">{num}</li>
                </> 
                :<> {/** 나머지 페이지 */}
                  <Link href={`${nonPageNumPath}/${num}`}>
                    <li>{num}</li>
                  </Link>
                </>}
              </>
            ))}
          </>
        )}
      </ul>
    </>
  )
}

/*
    현재 페이지: {pageNumber}
    총 페이지: {totalPage}
*/