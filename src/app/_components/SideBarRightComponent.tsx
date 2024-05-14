'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useLayoutEffect, useEffect } from "react";


// 페이지 첫진입시 지저분하게 렌더링되는 현상 개선 필요 (우선순위 낮음)
// 

function SidebarRightComponent(){
  // 사이드바 오픈상태
  const [openState, setOpenState] = useState(true);
  
  const handleOpen = () => {
    setOpenState(!openState);
  }

  // TOC 요소 셋팅
  const [headings, setHeadings] = useState<HTMLElement[]>([]);
  const [title,setTitle] = useState("");
  const [activeHeadingId, setActiveHeadingId] = useState<string>('');
  
  // cleanup 핸들 함수
  const cleanup = () => {
    setHeadings([]);
    setTitle("");
  }
  // -------- 페이지 이동시 cleanup
  const pathname = usePathname()
  useLayoutEffect(() => {
    cleanup();
  }, [pathname])

  // --------- 페이지 진입시 TOC 구성
  useLayoutEffect(() => {

    // 제목
    const postTitle = document.querySelectorAll<HTMLElement>('#postTitle'); 
    if (postTitle.length > 0 && postTitle[0]) {
      setTitle(postTitle[0].innerText);
    }

    // 부제
    const tocArray = Array.from(
      document.querySelectorAll<HTMLElement>('#markdownPost > :is(h1, h2, h3)'),
    );
    setHeadings(tocArray);

    // 감시자 로직
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveHeadingId(entry.target.id);
        }
      });
    }, {
      root: document.querySelector('.bodyContents'),
      rootMargin: '-250px 0px',
      threshold: 1
    });

    tocArray.forEach(heading => {
      observer.observe(heading);
    });

    return () => {
      cleanup();
      observer.disconnect();
    };

  }, []);
  


return (
  <>
  { openState ?
    <div className="z-10 sticky hidden lg:block h-full w-full max-w-[300px] font-spoqa overflow-y-scroll customScroll overflow-x-hidden">
      <div className="mt-8 px-4 py-4 /*bg-zinc-800*/ rounded-3xl">
        <ul className="text-white">
          { title ? 
          <>
              { title && <li className="text-lg italic border-b-2 border-white border-solid mb-4 pb-1">{title}</li>}
              {headings.map((heading, index) => (
                <li key={index} className="pb-1">
                  <Link href={`#${heading.id}`}>
                    <div className={heading.id === activeHeadingId ? 
                            /* 포커스 요소*/  'anime-toc-select p-2 text-black' 
                            /* 논 포커스*/   : 'anime-toc-nonselect'}>
                      {heading.tagName === 'H1' &&
                        <span className="text-md italic">{heading.innerText}</span>
                      }
                      {heading.tagName === 'H2' &&
                        <span className="text-sm ml-4">{heading.innerText}</span>
                      }
                      {heading.tagName === 'H3' &&
                        <span className="text-xs ml-8">{heading.innerText}</span>
                      }
                    </div>
                  </Link>
                </li>
              ))}
          </>
          :
          <>
            <li className="text-white w-full text-center"> 
              <div>Google ads & POST Toc 영역</div>
              <div className="mt-6 h-[260px] bg-zinc-800 w-full rounded-3xl"></div>
              <div className="mt-6 h-[260px] bg-zinc-700 w-full rounded-3xl"></div>
              <div className="mt-6 h-[260px] bg-zinc-600 w-full rounded-3xl"></div>
            </li>
          </>
          }
        </ul>
      </div>
    </div>
  :<></>}
  </>
);
}

export default SidebarRightComponent;
