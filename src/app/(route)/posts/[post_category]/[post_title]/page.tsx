
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
  const gpl =  await getPostList();

  const result = gpl.map((gpldata) => ({
    post_category: encodeURI(gpldata.postAbstract.category || '') ,
    post_title : encodeURI(gpldata.postAbstract.slug || '') ,
  }));
  return result;
}  
