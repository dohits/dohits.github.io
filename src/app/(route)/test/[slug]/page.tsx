import {getPostSlug, selectPost, MarkdownRender} from "@/app/_utils/_lib/postParser";
import {parsePostDetail, parsePost, parsePostAbstract,getPostPaths,getPostList} from "@/app/_utils/_lib/postParser";
import "@/interface/post";

export async function generateStaticParams() {
  const products =  getPostSlug();
  return products.map(product => ({
    slug: product,
  }));
}  


export default async function Posts({params}:{params:any}) {
  const {slug} = params;
  const postData = await selectPost(slug);


  const ppd = await parsePostDetail("_data/_posts/categorytest.mdx");
  const pp:post = await parsePost("_data/_posts/categorytest.mdx");
  const ppa = parsePostAbstract("_data/_posts/categorytest.mdx");
  const gpp = getPostPaths();
  const gpl = await getPostList();
  const gps = getPostSlug();

  //console.log(ppd);
  //console.log(pp);
  //console.log(ppa); // url + slug
  //console.log(gpp); // 경로
  
  //console.log(gpl);
  //console.log(gps);
  //console.log("slug ::: " + slug);


  if (postData){
    return (
      <>
        <MarkdownRender content={postData}/>
      </>
    );
  }
}



/*

  const abc = await parsePostDetail("_data/_posts/hello-world.mdx");
  const pp:post = await parsePost("_data/_posts/hello-world.mdx");
  const ppa = parsePostAbstract("_data/_posts/hello-world.mdx");
  const gpp = getPostPaths();
  const gpl = await getPostList();
  const gps = getPostSlug();

  //console.log(abc);
  //console.log(pp);
  //console.log(gpp);
  //console.log(ppa);
  //console.log(gpl);
  //console.log(gps);
  /*console.log("slug ::: " + slug);*/
