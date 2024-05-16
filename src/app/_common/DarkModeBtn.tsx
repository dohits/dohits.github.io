'use client'

import React,{ useLayoutEffect, useState } from 'react';

interface TThemeButtonProps {}

const LOCAL_STORAGE_KEY = {
    THEME: 'theme',
  } as const;
  
  const THEME = {
    LIGHT: 'light',
    DARK: 'dark',
  } as const;

const DarkModeBtn = ({}: TThemeButtonProps) => {

    useLayoutEffect(() => {
        const theme = localStorage.getItem(LOCAL_STORAGE_KEY.THEME) || THEME.DARK;
        if (theme === THEME.DARK) {
            document.querySelector('html')?.classList.add(THEME.DARK);
        }
    }, []);

    const [themeState,setThemeState] = useState("dark");

    const toggleTheme = () => {
        // html 태그를 가지고 옴
        const htmlEl = document.querySelector('html');
        if (!htmlEl) return;

        const enabledDarkMode = htmlEl.classList.contains(THEME.DARK);
        if (enabledDarkMode) {
          htmlEl.classList.remove(THEME.DARK);
          localStorage.removeItem(LOCAL_STORAGE_KEY.THEME);
          setThemeState("dark");
        } else {
          htmlEl.classList.add(THEME.DARK);
          localStorage.setItem(LOCAL_STORAGE_KEY.THEME, THEME.DARK);
          console.log(localStorage.getItem(LOCAL_STORAGE_KEY.THEME));
          setThemeState("light");
        }
    };

    return (
        <>
          <button onClick={toggleTheme} className='w-20 h-full'>
            <ul className='flex space-x-3'>
              <li>
                <img className="dark:invert
                                invert-0 min-w-5 w-5 h-full content-center" 
                                src={themeState === "dark" ?
                                '/icons/darkModeBtn.svg' : '/icons/lightModeBtn.svg'}
                                alt="darkModeBtn" />
              </li>
              <li className='content-center'>
                {themeState === "dark" ? "Dark" : "Light"}
              </li>
            </ul>
          </button>
        </>
    );
};

export default DarkModeBtn;