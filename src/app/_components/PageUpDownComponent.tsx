"use client"
import Image from "next/image";
export default function PageUpDownComponent(){

  const handleScrollToTop = () => {
    window.scrollTo(0,0);
  };

  return(
    <>
      <div className="absolute bottom-6 right-6 w-10 z-20 opacity-80" onClick={handleScrollToTop}>
        <Image className="z-20 mb-1 bg-emerald-300 pl-2 pr-2 rounded-t-xl" src='/icons/updownBtn.svg' alt="sidebarBtn"
          width={100} height={100}/>
        <Image className="z-20 rotate-180 pl-2 pr-2 bg-emerald-300 rounded-t-xl" src='/icons/updownBtn.svg' alt="sidebarBtn"
          width={100} height={100}/>
      </div>
    </>
  );
}