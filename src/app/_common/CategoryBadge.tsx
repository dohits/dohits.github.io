//{style}:{style:string}


export default function CategoryBadge(props: { style?: string, category?: string, value?:string, sub?:boolean}) {

  let { style, category, value, sub } = props;

  if(style===null || style===undefined){
    style="bg-zinc-950";
  }

  
  let badgeClass = `absolute top-4 left-4 z-[2] rounded-3xl ${style} `;
  if(sub){
    badgeClass = `absolute top-12 left-4 z-[2] rounded-3xl ${style} `
  }
  // TODO ::: 카테고리 추가시 스타일 템플릿 작성
  if(category===null || category===undefined){
  }

  if(value===null || value===undefined){
    return;
  }
  return(
    <>
      <div className={badgeClass}>
        <div className="m-1 pl-2 pr-2 text-xs">{value}</div>
      </div>
    </>
  )
}