'use client'
import { useEffect } from "react";

function LivereComponent() {
  
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://cdn-city.livere.com/js/embed.dist.js";

    const noscript = document.createElement("noscript");
    noscript.textContent = "라이브리 댓글 작성을 위해 JavaScript를 활성화 해주세요";

    const lvContainer = document.getElementById("lv-container");
    if (lvContainer) {
      lvContainer.appendChild(script);
      lvContainer.appendChild(noscript);
    }

    return () => {
      // Clean up function
      if (lvContainer) {
        lvContainer.removeChild(script);
        lvContainer.removeChild(noscript);
      }
    };
  }, []);

  return (
    <>
      {/* <!-- 라이브리 시티 설치 코드 --> */}
      <div suppressHydrationWarning={true}
        className="dark:bg-white p-4 rounded-3xl mt-20 anime-lr-view"
        id="lv-container"
        data-id="city"
        data-uid="MTAyMC81OTgzOS8zNjMwMQ=="
      />
      {/* <!-- 시티 설치 코드 끝 --> */}
    </>
  );
}

export default LivereComponent;
