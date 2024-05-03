export default async function Posts({params}:{params:any}) {
  const {post_category,post_title} = params;
  return (
    <>
      <div className="text-white">
        {post_category} 카테고리의 {post_title} 게시글
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const categories = ['all','one','two'];
  const products = ['goodpage','123','ttdas'];
  const result: { post_category: string; post_title: string; }[] = [];
  
  categories.forEach(category => {
    products.forEach(product => {
      result.push({
        post_category: category,
        post_title: product,
      });
    });
  });
  
  return result;
}


/* 
    경로 생성 후 없는 경로로 진입시 
    개발환경에서 error 뜨더라도 
    배포시에는 정상적으로 not-found 페이지 진입되는것을 확인.
    자체 버그인듯 함.
*/



