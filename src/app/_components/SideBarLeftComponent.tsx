"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import DropdownBtnIcon from "@/app/_icons/DropdownBtnIcon";

function SidebarLeftComponent(){

  type MenuDataType = {
    id: string;
    menu_code: string;
    menu_up_code: string;
    name: string;
    path: string;
    children?: MenuDataType[];
  };

  const menuData:MenuDataType[] = [
    { id: '1', menu_code: 'home', menu_up_code: 'root', name: '홈', path: '/' },
    { id: '2', menu_code: 'post', menu_up_code: 'root', name: 'Post', path: '/post' },
    { id: '201', menu_code: 'postall', menu_up_code: 'post', name: '전체글보기', path: '/post' },
    { id: '202', menu_code: 'postfront', menu_up_code: 'post', name: 'Frontend', path: '/post/prontend' },
    { id: '3', menu_code: 'project', menu_up_code: 'root', name: 'Projext', path: '/project' },
    { id: '4', menu_code: 'about', menu_up_code: 'root', name: 'About', path: '/about' },
    { id: '5', menu_code: 'contact', menu_up_code: 'root', name: 'Contact', path: '/contact' },
    { id: '6', menu_code: 'test', menu_up_code: 'root', name: '마크다운테스트(작동됨)', path: '/test' },
    { id: '601', menu_code: 'test_example', menu_up_code: 'test', name: 'example 게시글', path: '/test/example' },
    { id: '602', menu_code: 'test_hello-world', menu_up_code: 'test', name: 'hello-world 게시글', path: '/test/hello-world' },
  ];

  const buildMenuTree = (menuData: MenuDataType[]) => {
    const menuTree: { [key: string]: MenuDataType & { children: MenuDataType[] } } = {};
    menuData.forEach((menu) => {
      if (menu.menu_up_code === 'root') {
        menuTree[menu.menu_code] = { ...menu, children: [] };
      } else {
        if (menuTree[menu.menu_up_code]) {
          menuTree[menu.menu_up_code].children.push({ ...menu, children: [] });
        }
      }
    });
  
    return menuTree;
  };
  
  const menuTree = buildMenuTree(menuData);

  const pathname = usePathname();

  return (
    <>
      <div className="z-10 sticky top-12 hidden md:block h-full w-full max-w-[250px] font-spoqa ml-10 overflow-y-scroll customScroll">
        <div className="mt-8 px-4 py-4 /*bg-zinc-800*/ rounded-3xl">
          <ul className="flex justify-center h-10 w-full place-content-center rounded-lg">
            <li className="content-center w-full">
              <p className="text-[12px] text-white font-thin">profile open</p>
              <p className="text-2xl text-emerald-200 font-bold">this is profile</p>
              <div className="bg-emerald-200 h-[1px] w-full"></div>
            </li>
          </ul>
          {/* 최상위 메뉴 ---------------------------------- */}
          {Object.values(menuTree).map((menu) => (
            <ul key={menu.id} className="mt-1 space-y-1">                             {/* path 일치시 해당 아코디언만 열리도록 */}
              <details className="group [&_summary::-webkit-details-marker]:hidden" open={menu.children.some(child => child.path === pathname)}>
                <summary className={menu.path === pathname || menu.children.some(child => child.path === pathname) ? 
                "flex bg-emerald-300 cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-black font-bold" 
                : "flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-zinc-400 hover:bg-gray-100 hover:text-gray-700" }>

                {menu.children.length > 0 ?  /* 하위 메뉴 존재시 드롭 다운 */
                  <>
                    <span className="text-[13px]"> {menu.name} </span>
                    <div className="w-5 h-5 shrink-0 transition duration-300 group-open:-rotate-180">
                      {menu.path === pathname || menu.children.some(child => child.path === pathname) ? <DropdownBtnIcon color="#000000"/>:<DropdownBtnIcon color="#A1A1AA"/>}
                    </div>
                  </>
                  :
                  <>
                    <Link href={menu.path} className="w-full">
                      <span className="text-[13px]"> {menu.name} </span>
                    </Link>
                  </>
                }
                </summary>
                {/* 하위 메뉴 -------------------------------------- */}
                {menu.children.length > 0 && (
                  <ul className="ml-4">
                    {menu.children.map((child) => (
                      <li key={child.id} className="text-[12px]">
                        <Link
                          className={child.path === pathname ? "block rounded-lg bg-emerald-200 mt-2 px-4 py-2 text-gray-700 text-emerald-600" : "flex cursor-pointer items-center justify-between rounded-lg mt-2 px-4 py-2 text-zinc-400 hover:bg-gray-100 hover:text-gray-700"}
                          href={child.path}
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </details>
            </ul>
          ))}
        </div>
      </div>
      
    </>
  );
}export default SidebarLeftComponent;


/* 스크롤 테스트용

        <div className="bg-black h-96">asdf</div>
        <div className="bg-black h-96">asdf</div>
        <div className="bg-black h-96">asdf</div>
*/