"use client"
import SkillList from "@/app/(route)/about/_components/SkillList"

import { useState } from "react";
import HistoryList from "./_components/HistoryList";
export default function About() {

  const [skillListOpen,setSkillListOpen] = useState(false);
  const [HistoryListOpen,setHistoryListOpen] = useState(true);

  const handleSkillOpen = () => {
    setSkillListOpen(!skillListOpen);
  }
  const handleHistoryOpen = () => {
    setHistoryListOpen(!HistoryListOpen);
  }
 

  return (
    <main className="flex">
      <div className="w-full h-full">
        <ul>
          <li className="text-white text-6xl font-bold italic">About</li>
        </ul>

        <ul onClick={handleHistoryOpen} className="mt-8 mb-8">
          <li className="text-white text-4xl font-bold mb-8">- History 
            <span className="text-sm font-thin text-white ml-3">{HistoryListOpen ? <>Close</> : <>Open</>}</span>
          </li>
          {HistoryListOpen ? 
          <>
            <HistoryList date="" title="헌법과 법률" contents="대통령은 헌법과 법률이 정하는 바에 의하여 국군을 통수한다. 모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며, 법률이 정하는 바에 의하여 최저임금제를 시행하여야 한다."/>
            <HistoryList unCircle={true} date="" title="국회와 국무총리" contents="국회는 국무총리 또는 국무위원의 해임을 대통령에게 건의할 수 있다. 비상계엄하의 군사재판은 군인·군무원의 범죄나 군사에 관한 간첩죄의 경우와 초병·초소·유독음식물공급·포로에 관한 죄중 법률이 정한 경우에 한하여 단심으로 할 수 있다. 다만, 사형을 선고한 경우에는 그러하지 아니하다."/>          
            <HistoryList date="" title="재판 권리" contents="모든 국민은 신속한 재판을 받을 권리를 가진다. 형사피고인은 상당한 이유가 없는 한 지체없이 공개재판을 받을 권리를 가진다. 모든 국민은 주거의 자유를 침해받지 아니한다. 주거에 대한 압수나 수색을 할 때에는 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다."/>
            <HistoryList unCircle={true} date="" title="" contents="국회는 국무총리 또는 국무위원의 해임을 대통령에게 건의할 수 있다. 비상계엄하의 군사재판은 군인·군무원의 범죄나 군사에 관한 간첩죄의 경우와 초병·초소·유독음식물공급·포로에 관한 죄중 법률이 정한 경우에 한하여 단심으로 할 수 있다. 다만, 사형을 선고한 경우에는 그러하지 아니하다."/>          
            <HistoryList contourLine="~ Now ( 5 Month ) "/>
            <HistoryList date="2024.01" title="TechTree" contents="FullStack"/>
            <HistoryList contourLine="3 Month"/>
            <HistoryList date="2023.11" title="EastWave" contents="FullStack"/>
          </>
          : <></>}
        </ul>

        <ul onClick={handleSkillOpen} className="mt-3">
          <li className="text-white text-4xl font-bold">- Skill
            <span className="text-sm font-thin text-white ml-3">{skillListOpen ? <>Close</> : <>Open</>}</span>
          </li>
          <SkillList visible={skillListOpen}/>
        </ul>
      </div>
    </main>
  );
}
