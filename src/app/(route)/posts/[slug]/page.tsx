export default function Posts() {

  return (
    <>
      <div className="text-white">
        asdf
      </div>
    </>
  );
}

export async function getProducts (){
  return ['goodpage','123','ttdas'];
} 

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map(product => ({
    slug: product,
  }));
}  