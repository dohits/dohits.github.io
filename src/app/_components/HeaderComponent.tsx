"use client"

function HeaderComponent(){

  return (
    <>
      <div className="z-10 sticky top-0 bg-white flex items-center justify-between h-12 text-black px-4 lg:px-6 space-x-7 font-spoqa">
        {/* Left Section ------------------------------------------------------------------------------------------------------------*/}
        <ul className="h-full w-full">
          <div className="h-full w-full">
            <a className="flex items-center space-x-3 h-full" href="/">
              <li className="h-full content-center">
                <img className="min-w-10 w-10 rounded-full" src={process.env.NEXT_PUBLIC_URL + '/images/headerLogo.jpg'} alt="headerLogo" />
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
          <li className="hidden md:flex items-center space-x-7 font-light">
            <div>Post</div>
            <div>Project</div>
            <div>About</div>
            <div>Contact</div>
          </li>
          <li className="flex md:hidden items-center space-x-3 h-full">
            <img className="min-w-5 w-5 h-full content-center" src={process.env.NEXT_PUBLIC_URL + '/icons/hamburgerBtn.svg'} alt="hambergerBtn" />
            <span className="font-light text-sm font-bold h-full content-center">Menu</span>
          </li>
        </ul>
      </div>
    </>
  );
}export default HeaderComponent;