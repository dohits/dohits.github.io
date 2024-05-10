"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Image from "next/image";

export default function PaginationBtnComponents({
  pageArray, 
  pagination_size,
}:{
  pageArray?:string[], 
  pagination_size?:number,
}){

  const pathName = usePathname();
  console.log("pathName ::: " + pathName);
  const decodePath = decodeURI(pathName);
  console.log("decodePath ::: " + decodePath);
  const parts = decodePath.split("/"); 
  const pageNumber = parts[parts.length - 1]; // split 된 배열의 마지막 요소 추출
  const nonPageNumPath = parts.slice(0, -1).join("/"); // 페이지넘버를 제외한 패스

  // pagination Btn 그룹화
  let pageBtnGroup;
  if(pageArray && pagination_size){
    pageBtnGroup = [];
    for (let i = 0; i < pageArray.length; i += pagination_size) {
      pageBtnGroup.push(pageArray.slice(i, i + pagination_size));
    }
  }

  // 현재 페이지가 속한 그룹의 인덱스 찾기
  let currentPageGroupIndex = 0;
  if (pageBtnGroup && pageBtnGroup.length > 0) {
    for (let i = 0; i < pageBtnGroup.length; i++) {
      if (pageBtnGroup[i].includes(pageNumber)) {
        currentPageGroupIndex = i;
        break;
      }
    }
  }

  // 이전 그룹의 마지막 페이지
  let prevGroupLastPage;
  if(pageBtnGroup){
    prevGroupLastPage = currentPageGroupIndex > 0 ? pageBtnGroup[currentPageGroupIndex - 1][pageBtnGroup[currentPageGroupIndex - 1].length - 1] : null;
  }else{ prevGroupLastPage = 1 }

  // 다음 그룹의 첫 페이지
  let nextGroupFirstPage;
  if(pageBtnGroup){
    nextGroupFirstPage = currentPageGroupIndex < pageBtnGroup.length - 1 ? pageBtnGroup[currentPageGroupIndex + 1][0] : null;
  }else{nextGroupFirstPage = 1 }


  return(
    <>
      <ul className="flex space-x-3 text-lg text-white justify-center items-end">
        
        <div>
          {/* 이전 그룹 버튼 */}
          {prevGroupLastPage && (
            <Link href={`${nonPageNumPath}/${prevGroupLastPage}`}>
              <Image className="mr-3 min-w-4 w-4 h-full content-center rotate-180 z-[100]" src='/icons/paginationLRBtn.svg' alt="paginationLRBtn"
                width={100} height={100} />
            </Link>
          )}
        </div>
        
        {pageBtnGroup && pageBtnGroup.length > 0 && ( // null 체크
          <>
            {pageBtnGroup.map((group:string[], index) => ( // 그룹 단위로 매핑
              <React.Fragment key={index}>
                {group.includes(pageNumber) && // 해당 그룹에 현재 페이지가 포함되어 있는지 확인
                  group.map((num:string) => ( num === pageNumber ? // 페이지 체크
                    <li key={num} className="text-4xl text-emerald-400">{num}</li> 
                    :
                    <li key={num}>
                      <Link href={`${nonPageNumPath}/${num}`}>
                        {num}
                      </Link>
                    </li>
                  ))
                }
              </React.Fragment>
            ))}
          </>
        )}

        <div>
          {/* 다음 그룹 버튼 */}
          {nextGroupFirstPage && (
            <Link href={`${nonPageNumPath}/${nextGroupFirstPage}`}>
              <Image className="ml-3 min-w-4 w-4 h-full content-center z-[100]" src='/icons/paginationLRBtn.svg' alt="paginationLRBtn"
                width={100} height={100} />
            </Link>
          )}
        </div>

      </ul>
    </>
  )
}

/*
    현재 페이지: {pageNumber}
    총 페이지: {totalPage}
*/