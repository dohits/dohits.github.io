"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation';

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
    { id: '3', menu_code: 'project', menu_up_code: 'root', name: 'Projext', path: '/project' },
    { id: '4', menu_code: 'about', menu_up_code: 'root', name: 'About', path: '/about' },
    { id: '5', menu_code: 'contact', menu_up_code: 'root', name: 'Contact', path: '/contact' },
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
      <div className="z-10 sticky hidden md:block h-full w-full max-w-[250px] font-spoqa ml-10">
        <div className="mt-8 px-4 py-4 bg-white rounded-3xl">
          <ul className="grid h-16 w-full place-content-center rounded-lg text-2xl text-purple-600 font-bold">
            This is Leftmenu
          </ul>

          {/* 최상위 메뉴 ---------------------------------- */}
          {Object.values(menuTree).map((menu) => (
            <ul key={menu.id} className="mt-1 space-y-1">
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className={menu.path === pathname ? "flex bg-purple-400 text-white cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500" 
                : "flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700" }>

                {menu.children.length > 0 ?  /* 하위 메뉴 존재시 드롭 다운 */
                  <>
                    <span className="text-sm font-medium"> {menu.name} </span>
                    <img className="w-5 h-5 shrink-0 transition duration-300 group-open:-rotate-180" src={process.env.NEXT_PUBLIC_URL + '/dropdownBtn.svg'} alt="dropdownBtn" />
                  </>
                  :
                  <>
                    <Link href={menu.path} className="w-full">
                      <span className="text-sm font-medium"> {menu.name} </span>
                    </Link>
                  </>
                }
                </summary>
                {/* 하위 메뉴 -------------------------------------- */}
                {menu.children.length > 0 && (
                  <ul className="ml-4">
                    {menu.children.map((child) => (
                      <li key={child.id}>
                        <Link
                          className={child.path === pathname ? "block rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-gray-700 text-white" : "flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"}
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