
import {getPostSlug, selectPost, MarkdownRender} from "@/app/_utils/_lib/postParser";
import {parsePostDetail, parsePost, parsePostAbstract,getPostPaths,getPostList} from "@/app/_utils/_lib/postParser";

export default async function Posts({params}:{params:any}) {
  const {post_category,post_title} = params;
  const postData = await selectPost(post_title,post_category);
  if (postData){
    return (
      <>
        <MarkdownRender content={postData}/>
      </>
    );
  }
}

export async function generateStaticParams() {
  
  const products =  getPostSlug();
  console.log(products);
  const gpl =  await getPostList();
  const categories: string[] = [];
  const categorySet = new Set<string>();

  Object.values(gpl).forEach(item => {
      const category = item.postAbstract.category;
      if (category !== undefined && !categorySet.has(category)) {
          categorySet.add(category);
          categories.push(category);
      }
  });
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