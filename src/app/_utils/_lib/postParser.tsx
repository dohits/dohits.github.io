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

  const [slug] = filePath.split('/');
 
  const url = `/test/${slug}`;
 
  return { url, slug };
};

//MDX LIST 포스트 리스트 --------------------------------------------

export const getPostPaths = (category?: string) => {
  const folder = category || '**';
  const paths: string[] = sync(`${POSTS_PATH}/${folder}/**/*.mdx`);
  return paths;
};

export const getPostList = async (category?: string): Promise<post[]> => {
  const paths: string[] = getPostPaths(category);
  const posts = await Promise.all(paths.map((postPath) => parsePost(postPath)));
  return posts;
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
export async function selectPost (slug:string) {
  if (!slug){return;}
  const pp:post = await parsePost("_data/_posts/"+ slug +".mdx");
  return pp;
}
// 렌더링
export async function MarkdownRender ({content} : {content:any}){
  if (!content){return;}
  return (
    <>
      <div className='MARKDOWN_CONTAINER markdown-body !bg-zinc-950'>
        <div className='border-solid border-b-2 border-emerald-400 m-[5px] sm:m-[50px]'>
          <div className='text-zinc-400 text-left text-xs italic'>카테고리 - 카테고리</div>
          <div className='text-white text-center text-xl sm:text-4xl font-bold italic'>{content.postDetail.title}</div>
          <div className='text-zinc-400 text-center text-md italic'>{content.postDetail.desc}</div>
          <div className='text-white flex justify-end'><MDXRemote source={content.postDetail.date}/></div>
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