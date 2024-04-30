import {parsePostDetail,parsePost,parsePostAbstract} from "@/lib/postParser";
import "@/interface/post";
export async function generateStaticParams() {
  const products = ['hello-world','123','ttdas'];
  return products.map(product => ({
    slug: product,
  }));
}  


export default async function Posts() {

  const abc = await parsePostDetail("_data/_posts/hello-world.mdx");
  const pp:post = await parsePost("_data/_posts/hello-world.mdx");
  const ppa = parsePostAbstract("_data/_posts/zz/hello-world.mdx");

  /*console.log(abc);*/
  //console.log(pp);
  console.log(ppa);
  return (
    <>
      <div className="text-white">
        asdf
      </div>
      <div className="text-white">
        {pp.postDetail.desc}
      </div>
    </>
  );
}
