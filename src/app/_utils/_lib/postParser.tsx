import fs from 'fs';
import path,{basename} from 'path';
import matter from 'gray-matter';
import { sync } from 'glob';
import { MDXRemote } from 'next-mdx-remote/rsc';
import "github-markdown-css";

const BASE_PATH = "/_data/_posts";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

// MDX Detail 포스트 읽어내기 --------------------------------------------------
export const parsePost = async (postPath: string) => {
  const postDetail = await parsePostDetail(postPath);
  const postAbstract = parsePostAbstract(postPath);

  return { postDetail, postAbstract };
};

export const parsePostDetail = async (postPath: string) => {
  const file = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(file);
  const grayMatter = data /*as PostMatter*/;
  
  return { ...grayMatter, content };
};
 
export const parsePostAbstract = (postPath: string) => {
  const filePath = postPath
    .slice(postPath.indexOf(BASE_PATH) + BASE_PATH.length + 1)
    .replace(`${BASE_PATH}/`, '')
    .replace('.mdx', '');

  const [category, slug] = filePath.split(/[\\/]/);
 

  let url = `/posts/${category}/${slug}`;
  
  if(slug==="" || slug===undefined){
    url = `/posts/${category}`;
  }

  return { url, category, slug };
};

//MDX LIST 포스트 리스트 --------------------------------------------

export const getPostPaths = (category?: string) => {
  const folder = category || '**';
  const paths: string[] = sync(`${POSTS_PATH}/${folder}/**/*.mdx`);
  return paths;
};

// 모든 글 가져오기
export const getPostList = async (category?: string): Promise<post[]> => {
  const paths: string[] = getPostPaths(category);
  const posts = await Promise.all(paths.map((postPath) => parsePost(postPath)));

  return posts;
};

/** (x번째부터, x개, 카테고리) 시간순 정렬 */
export const sortPostList = async (start: number, end: number, category?: string): Promise<post[]> => {
  let paths: string[] = getPostPaths(category);
  let posts: post[] = await Promise.all(paths.map((postPath) => parsePost(postPath)));

  // postDetail.date를 기준으로 정렬하기 위해 날짜를 Date 객체로 변환하고 정렬
  posts.sort((a: any, b: any) => {
    const dateA = new Date(a.postDetail.date);
    const dateB = new Date(b.postDetail.date);
    return dateB.getTime() - dateA.getTime();
  });

  // x번째부터 y개의 글만 반환
  return posts.slice(start -1 , start - 1 + end);
};



export const getPostSlug = (category?: string) => {
  const folder = category || '**';
  const paths: string[] = sync(`${POSTS_PATH}/${folder}/**/*.mdx`);
  
  // 파일명만 추출하고 확장자를 제거하여 반환
  const fileNames = paths.map(path => {
    const fileNameWithExtension = basename(path); // 파일   명과 확장자를 포함한 부분
    const fileName = fileNameWithExtension.split('.').slice(0, -1).join('.'); // 확장자를 제외한 파일명만 추출
    return fileName;
  });

  return fileNames;
};

//MDX 단일 호출  ----------------------------------------------------
// 포스트 읽어오기
export async function selectPost (slug:string, category?:string) {
  
  slug = decodeURI(slug); // 한글 처리
  if(category){category = decodeURI(category);}

  if (!category){
    const pp:post = await parsePost(`_data/_posts/${slug}.mdx`);  
    return pp;
  }
  const pp:post = await parsePost(`_data/_posts/${category}/${slug}.mdx`);
  return pp;
}
// 렌더링
export async function MarkdownRender ({content} : {content:any}){
  if (!content){return;}

  let date = content.postDetail.date;
  let dateString = date.toISOString().split('T')[0]; // "2024-02-23" 형식
  let timeString = date.toISOString().split('T')[1].replace(".000Z", ""); // "13:53:22" 형식

  return (
    <>
      <div className='MARKDOWN_CONTAINER markdown-body !bg-zinc-950'>
        <div className='border-solid border-b-2 border-emerald-400 m-[5px] sm:m-[50px]'>
          <div className='text-zinc-400 text-left text-xs italic'>{content.postAbstract.category} - {content.postDetail.category}</div>
          <div className='text-white text-center text-xl sm:text-4xl font-bold italic'>{content.postDetail.title}</div>
          <div className='text-zinc-400 text-center text-md italic'>{content.postDetail.desc}</div>
          <div className='text-white flex justify-end'>
            <span className='text-sm'>{dateString}</span>
            <span className='text-xs ml-2 content-center font-thin'>{timeString}</span>
          </div>
        </div>
        <div className="text-white">
          <MDXRemote source={content.postDetail.content}/>
        </div>
      </div>
    </>
  )
}

/*
const abc = await parsePostDetail("_data/_posts/hello-world.mdx");
const ppa = parsePostAbstract("_data/_posts/hello-world.mdx");
const gpp = getPostPaths();
const gpl = await getPostList();
const gps = getPostSlug();*/


/*
  // 쿼리스트링 디코딩
  console.log("======================= 1::: " + postPath)
  const decodedSlug = decodeURIComponent(postPath);
  console.log("======================= 2::: " + decodedSlug)
*/