"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import DarkModeBtn from "../_common/DarkModeBtn";
/*function HeaderComponent({hamburgerOpen}:{hamburgerOpen:string}){*/

function HeaderComponent(){
  const pathname = usePathname();

  type MenuDataType = {
    id: string;
    menu_code: string;
    menu_up_code: string;
    name: string;
    path: string;
    children?: MenuDataType[];
  };

  const menuData:MenuDataType[] = [
    { id: '1', menu_code: 'posts', menu_up_code: 'root', name: 'Posts', path: '/posts/list/1' },
    { id: '2', menu_code: 'about', menu_up_code: 'root', name: 'About', path: '/about' },
    { id: '3', menu_code: 'comment', menu_up_code: 'root', name: 'Comment', path: '/comment' },
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

  return (
    <>
      <div className="dark:bg-zinc-950 dark:text-zinc-100
                       bg-white text-zinc-900 z-10 sticky top-0 flex items-center justify-between h-12 px-4 lg:px-6 space-x-7 font-spoqa">
        {/* Left Section ------------------------------------------------------------------------------------------------------------*/}
        <ul className="h-full w-full">
          <div className="h-full w-full">
            <a className="flex items-center space-x-3 h-full" href="/">
              <li className="h-full content-center">
                <img className="min-w-8 w-8 h-8 min-h-8 rounded-full" src={'/images/profileImg.jpg'} alt="profileImg" />
              </li>
              <li>
                <p className="text-md font-bold">{process.env.NEXT_PUBLIC_COMPANY_NAME}</p>
                <p className="text-xs">github.io</p>
              </li>
            </a>
          </div>
        </ul>
        {/* Right Section ------------------------------------------------------------------------------------------------------------*/}
        <ul className="flex items-center w-full h-full justify-end">
          <li className="hidden md:flex items-center space-x-7 h-full">
          {Object.values(menuTree).map((menu) => (
                <Link key={menu.id} href={menu.path} className={menu.path === pathname ?
                  "h-full min-w-10 border-b-2 border-solid border-emerald-400 pl-3 pr-3"
                  : "h-full min-w-10 anime-header-menu-hover pl-3 pr-3"}
                >
                  <div className="w-full h-full flex items-center justify-center whitespace-nowrap font-medium">{menu.name}</div>
                </Link>
          ))}
          </li>
          <li className="hidden md:hidden items-center space-x-3 h-full">
            <img className="min-w-5 w-5 h-full content-center" src={process.env.NEXT_PUBLIC_URL + '/icons/hamburgerBtn.svg'} alt="hambergerBtn" />
            <span className="text-sm font-bold h-full content-center">Menu</span>
          </li>
          <li className="h-full items-center flex ml-4">
            <DarkModeBtn/>
          </li>
        </ul>
      </div>
    </>
  );
}export default HeaderComponent;