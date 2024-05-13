'use client'
import Link from "next/link";
import { useState, useLayoutEffect } from "react";

function SidebarRightComponent(){

  // 사이드바 오픈상태
  const [openState, setOpenState] = useState(true);
  
  const handleOpen = () => {
    setOpenState(!openState);
  }

  // TOC 요소 셋팅
  const [headings, setHeadings] = useState<HTMLElement[]>([]);
  const [activeHeadingId, setActiveHeadingId] = useState<string>('');

  useLayoutEffect(() => {
    // html 요소 감지하여 배열에 저장
    const headingElements = Array.from(
      document.querySelectorAll<HTMLElement>('#markdownPost > :is(h1, h2, h3)'),
    );
    setHeadings(headingElements);


    // IntersectionObserver 생성
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveHeadingId(entry.target.id);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 1
    });

    // 각 헤딩 요소를 감시
    headingElements.forEach(heading => {
      observer.observe(heading);
    });
    // cleanup 함수
    return () => {
      observer.disconnect();
    };

  }, []);

//


return (
  <>
  { openState ?
    <div className="z-10 sticky hidden lg:block h-full w-full max-w-[300px] font-spoqa">
      <div className="mt-8 px-4 py-4 /*bg-zinc-800*/ rounded-3xl">

        <ul className="text-white">
          {headings.map((heading, index) => (
            <li key={index}>
              <Link href={`#${heading.id}`}>
                <div className={heading.id === activeHeadingId ? 'anime-toc-select p-2 text-black' : 'anime-toc-nonselect'}>
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
        </ul>
      </div>
    </div>
  :<></>}
  </>
);
}

export default SidebarRightComponent;
