export default function YearGauge({
}:{
}){
  // TODO :: 재활용 필요시 startDay 및 타입 Props 로 받는 로직으로 수정

  const startDay = new Date("2023-10-10");
  const endDay = new Date();
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const resultInDays = Math.floor((endDay.getTime() - startDay.getTime()) / millisecondsPerDay);

  const Year = 365;

  const totalPercent = Math.floor(resultInDays/Year * 100); // 총 퍼센트
  const fullPercentYear = Math.floor(totalPercent/100); // 1년 단위 카운트
  const remainPercent = totalPercent % 100; // 나머지 퍼센트

  const gaugeCSS = `flex flex-col justify-center rounded-full overflow-hidden bg-teal-400 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-teal-600`;
  const gaugeStyle = { width: `${remainPercent}%` };
  const gaugeTagCSS = `mt-1 inline-block mb-2 py-0.5 px-1.5 bg-teal-50 border border-teal-200 text-xs font-medium text-teal-600 rounded-lg dark:bg-teal-800/30 dark:border-teal-800 dark:text-teal-500`;
  const gaugeTagStyle = {marginInlineStart: `calc(${remainPercent}% - 1.25rem)`}

  return(
    <>
      <div className="w-full mt-6 anime-lr-view">
        <div className="dark:text-teal-400 text-teal-700 font-medium italic text-xs">{startDay.toLocaleDateString()} ~ Now</div>
        <ul className="mt-2 flex items-center gap-x-1 mb-2">
          <li className="whitespace-nowrap mr-2 italic dark:text-teal-400 font-medium text-teal-700 bg-teal-200 dark:bg-teal-900 rounded-md text-xs pl-2 pr-2 pt-1 pb-1">{fullPercentYear} 년차</li>
          {Array.from({ length: fullPercentYear }).map((_, index) => (
            <li key={index} className="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-teal-500 text-xs text-white text-center whitespace-nowrap transition duration-500 rounded-lg"></li>
          ))}
          {Array.from({ length: 20-fullPercentYear }).map((_, index) => (
            <li key={index} className="dark:bg-neutral-700 w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-200 text-xs text-white text-center whitespace-nowrap transition duration-500 rounded-lg"></li>
          ))}
        </ul>

        <ul>
          <div className="flex justify-between">
            <li className="mt-1 inline-block mb-2 py-0.5 px-1.5 text-xs font-light italic text-teal-600 rounded-lg dark:text-teal-500">
              D-0
            </li>
            <li className="mt-1 inline-block mb-2 py-0.5 px-1.5 text-xs font-light italic text-teal-600 rounded-lg dark:text-teal-500">
              D-365
            </li>
          </div>
          <li className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700 transition duration-500">
            <div className="anime-lr-move flex w-full">
              <div className={gaugeCSS} style={gaugeStyle}></div>
            </div>
          </li>
          <li className={gaugeTagCSS} style={gaugeTagStyle}>{remainPercent}%</li>
        </ul>
      </div>
    </>
  )
}