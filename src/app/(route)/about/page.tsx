"use client"
import SkillList from "@/app/(route)/about/_components/SkillList"

import { useState } from "react";
import HistoryList from "./_components/HistoryList";
import YearGauge from "./_components/YearGauge";
import ProfileCard from "./_components/ProfileCard";
export default function About() {

  const [skillListOpen,setSkillListOpen] = useState(false);
  const [historyListOpen,setHistoryListOpen] = useState(false);
  const [careerOpen,setCareerOpen] = useState(false);

  const handleSkillOpen = () => {
    setSkillListOpen(!skillListOpen);
  }
  const handleHistoryOpen = () => {
    setHistoryListOpen(!historyListOpen);
  }
  const handleCareerOpen = () => {
    setCareerOpen(!careerOpen);
  }

  return (
    <main className="flex">
      <div className="w-full h-full">
        <ul>
          <li className="dark:text-white
                         text-zinc-950 text-6xl font-bold italic">About</li>
        </ul>
        <ul onClick={handleCareerOpen} className="mt-8 mb-8 max-w-[800px]">
          <li className="dark:text-white
                          text-zinc-950 text-xl font-bold mb-8">- Career Info
            <span className="dark:text-white
                        text-zinc-950 text-xs font-thin ml-3">{careerOpen ? <>Close</> : <>Open</>}
            </span>
          </li>
          {careerOpen && 
            <>
              <ProfileCard/>
              <YearGauge />
              <li className="text-xs text-zinc-700 dark:text-zinc-400 space-y-2 border-l-4 border-solid pl-6 border-teal-600 anime-lr-view">
                <div>
                  <span className=" italic dark:text-zinc-400 text-zinc-950">- 2014.03 ~ 2020.08</span>
                  <br/><span className="font-thin dark:text-zinc-400 text-zinc-950">중원대 컴퓨터공학과 (졸)</span>
                </div>
                <div>
                  <span className=" italic dark:text-zinc-400 text-zinc-950">- 2016.07 ~ 2018.04</span>
                  <br/><span className="font-thin dark:text-zinc-400 text-zinc-950">육군 병장 만기전역 (9사단 29연대 전산병)</span>
                </div>
                <div>
                  <span className=" italic dark:text-zinc-400 text-zinc-950">- 2023.02 ~ 2023.08 </span>
                  <br/><span className="font-thin dark:text-zinc-400 text-zinc-950">한국소프트웨어인재개발원 (수료) </span>
                </div>
                <div>
                  <span className=" italic dark:text-zinc-400 text-zinc-950">- 2023.10 ~ 2023.12 </span>
                  <br/><span className="font-thin dark:text-zinc-400 text-zinc-950">이스트웨이브 근무 (FullStack 개발 사원) </span>
                </div>
                <div>
                  <span className=" italic dark:text-zinc-400 text-zinc-950">- 2024.01 ~ Now </span>
                  <br/><span className="font-thin dark:text-zinc-400 text-zinc-950">테크트리 재직중 (FullStack 개발) </span>
                </div>
              </li>
            </>
          }
        </ul>

        <ul onClick={handleSkillOpen} className="mt-3">
         <li className="dark:text-white
                          text-zinc-950 text-xl font-bold mb-8">- Skill Info
            <span className="dark:text-white
                        text-zinc-950 text-xs font-thin ml-3">{skillListOpen ? <>Close</> : <>Open</>}
            </span>
          </li>
          <SkillList visible={skillListOpen}/>
        </ul>
      </div>
    </main>
  );
}
