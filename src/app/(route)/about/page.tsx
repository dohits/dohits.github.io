"use client"
import SkillList from "@/app/(route)/about/_components/SkillList"

import { useState } from "react";
import HistoryList from "./_components/HistoryList";
export default function About() {

  const [skillListOpen,setSkillListOpen] = useState(false);

  const handleSkillOpen = () => {
    setSkillListOpen(!skillListOpen);
  }
  
  return (
    <main className="flex">
      <div>
        <ul>
          <HistoryList/>
        </ul>
        <ul>
          <li className="text-white text-6xl font-bold italic">About</li>
        </ul>
        <ul onClick={handleSkillOpen} className="mt-3">
          <li className="text-white text-4xl font-bold">- Skill
            <span className="text-sm font-thin text-white ml-3">{skillListOpen ? <>Close</> : <>Open</>}</span>
          </li>
          {skillListOpen ? <SkillList/> : <></>}
        </ul>
      </div>
    </main>
  );
}
