function LivereComponent() {
  return (
    <>
      {/* <!-- 라이브리 시티 설치 코드 --> */}
      <div suppressHydrationWarning={true}
        className="dark:bg-white p-4 rounded-3xl mt-20"
        id="lv-container"
        data-id="city"
        data-uid="MTAyMC81OTgzOS8zNjMwMQ=="
        dangerouslySetInnerHTML={{
          __html: `
          <script type="text/javascript">
            (function(d, s) {
              var j, e = d.getElementsByTagName(s)[0];
              if (typeof LivereTower === 'function') { return; }
              j = d.createElement(s);
              j.src = 'https://cdn-city.livere.com/js/embed.dist.js';
              j.async = true;
              e.parentNode.insertBefore(j, e);
            })(document, 'script');
          </script>
          <noscript> 라이브리 댓글 작성을 위해 JavaScript를 활성화 해주세요</noscript>
          `,
        }}
      />
      {/* <!-- 시티 설치 코드 끝 --> */}
    </>
  );
}

export default LivereComponent;
