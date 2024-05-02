export default async function Posts({params}:{params:any}) {
  const {slug,slug2} = params;
  return (
    <>
      <div className="text-white">
        {slug} 카테고리의 {slug2} 게시글
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const products = ['goodpage','123','ttdas'];
  const categories = ['all','one','two'];
  const result: { slug: string; slug2: string; }[] = [];
  
  categories.forEach(category => {
    products.forEach(product => {
      result.push({
        slug: category,
        slug2: product,
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



