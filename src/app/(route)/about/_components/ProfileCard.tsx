export default function ProfileCard(){
  return (
    <>
      <div className="dark:bg-neutral-800
                      bg-zinc-100 w-full relative block overflow-hidden rounded-lg border border-gray-100 flex flex-col justify-between">
        <ul className="p-4 flex space-x-4">
          <li><img className="w-20 h-20 bg-white rounded-lg" src="/images/profileImg.jpg"></img></li>
          <li>
            <div className="dark:text-white text-sm italic">강도희</div>
            <div className="dark:text-zinc-400 text-zinc-500 text-xs italic">Web FullStack Developer</div>
          </li>
        </ul>
        <ul>
          <li className=""></li>
        </ul>
        <div className="h-2 w-full bg-gradient-to-r from-emerald-200 from-10% via-teal-500 via-30% to-emerald-700 to-90%"/>
      </div>
    </>
  );
}