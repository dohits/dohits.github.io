export default function Posts() {

  return (
    <>
      <div className="text-white">
        전체글
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const categories = ['한글','one','two'];
  return categories.map((category) => ({
    post_category: category,
  }));
}


/* 
    경로 생성 후 없는 경로로 진입시 
    개발환경에서 error 뜨더라도 
    배포시에는 정상적으로 not-found 페이지 진입되는것을 확인.
    자체 버그인듯 함.
*/



