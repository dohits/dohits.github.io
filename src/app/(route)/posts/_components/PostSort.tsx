'use client'
import Link from "next/link";

export default function PostSort({children}:{children?: React.ReactElement}){

  const handleGongSaJung = () => {
    alert("기능 추가중입니다.");
  }
  return(
    <>
    <ul className="text-white flex mt-4 space-x-4">
      <Link href="1#@sortNew" onClick={handleGongSaJung}>
        <li className="p-2 border-b-2 border-emerald-400 border-solid">최신순</li>
      </Link>
      <Link href="1#@sortOld" onClick={handleGongSaJung}>
        <li className="p-2">오래된순</li>
      </Link>
    </ul>
    {children}
    </>
  )
}