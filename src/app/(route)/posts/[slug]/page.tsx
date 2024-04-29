export default function Posts() {

  return (
    <>
      <div className="text-white">
        asdf
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const products = ['goodpage','123','ttdas'];
  return products.map(product => ({
    slug: product,
  }));
}  