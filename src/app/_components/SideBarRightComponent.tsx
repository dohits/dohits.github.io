"use client"
function SidebarRightComponent(){

  return (
    <>
      <div className="z-10 sticky hidden lg:block h-full w-full max-w-[250px] font-spoqa mr-10">
        <div className="mt-8 px-4 py-4 bg-zinc-800 rounded-3xl">
          <ul className="grid h-16 w-full place-content-center rounded-lg text-2xl text-emerald-400 font-bold">
            submenu
          </ul>
          <ul>
            <li>메뉴1</li>
            <li>메뉴2</li>
            <li>메뉴3</li>
            <li>메뉴4</li>
            <li>메뉴5</li>
            <li>메뉴6</li>
          </ul>
          <ul>
            <li>메뉴1</li>
            <li>메뉴2</li>
            <li>메뉴3</li>
            <li>메뉴4</li>
            <li>메뉴5</li>
            <li>메뉴6</li>
          </ul>
        </div>
      </div>
    </>
  );
}export default SidebarRightComponent;