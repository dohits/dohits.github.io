'use client'
import { useEffect, useState } from "react"

export default function YearGauge(){

  const [startDay,setStartDay] = useState(new Date('2023-11-10'));
  const [endDay,setEndDay] = useState(new Date());
  const [resultDay,setResultDay] = useState(0);
  const [gauge,setGauge] = useState(0);
  const [gaugeCSS,setGaugeCSS] = useState("block h-12 rounded-full bg-indigo-600 text-center w-[0px]");
  
  useEffect(() => {
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const resultInDays = Math.floor((endDay.getTime() - startDay.getTime()) / millisecondsPerDay);
    setResultDay(resultInDays);
  }, []);
  
  useEffect(() => {
    const Year = 365;
    const result = Math.floor(resultDay/Year * 100);
    setGauge(result);
  }, [resultDay]);
  
  useEffect(() => {
    setGaugeCSS(`block h-12 rounded-full bg-indigo-600 text-center w-[${gauge}]`)
    //document.getElementById("gauge")?.style;
  }, [gauge]);

  return(
    <>
      <div>
        <span id="ProgressLabel" className="text-zinc-950"> + {resultDay} 일</span>
        <span
          role="progressbar"
          aria-labelledby="ProgressLabel"
          className="relative block rounded-full bg-gray-200"
        >
          <span className="absolute inset-0 flex items-center justify-center text-[10px]/4">
            <span className="font-bold text-white"> {gauge} % </span>
          </span>

          <span id="gauge" className={gaugeCSS}>{gauge}</span>
        </span>
      </div>
    </>
  )
}