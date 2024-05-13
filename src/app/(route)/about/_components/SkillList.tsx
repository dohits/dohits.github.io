export default function About({visible}:{visible:boolean}) {

  const hideData = "hidden";
  const visibleData = "";

  return (
      <div className={visible ? visibleData : hideData }>
        <ul>
          <li>
            {/*<div className="text-white text-4xl font-bold">abcdefgasdf</div>*/}
          </li>
          {/* badge */}
          <li className="mt-4">
            <div className="text-white text-xl font-bold">- Languages</div>
            <div className="flex space-x-2 space-y-2 mt-2 pt-2 p-4 bg-zinc-700 rounded-xl flex-wrap">
              <img className="h-full rounded-md mt-2 ml-2" src={'/badges/css3Badge.svg'} alt="css3Badge" />
              <img className="h-full rounded-md" src={'/badges/html5Badge.svg'} alt="html5Badge" />
              <img className="h-full rounded-md" src={'/badges/javaBadge.svg'} alt="javaBadge" />
              <img className="h-full rounded-md" src={ '/badges/jsBadge.svg'} alt="jsBadge" />
              <img className="h-full rounded-md" src={ '/badges/tsBadge.svg'} alt="tsBadge" />
              <img className="h-full rounded-md" src={ '/badges/pythonBadge.svg'} alt="pythonBadge" />
            </div>
          </li>

          <li className="mt-4">
            <div className="text-white text-xl font-bold">- Frameworks, Platforms and Libraries </div>
            <div className="flex space-x-2 space-y-2 mt-2 pt-2 p-4 bg-zinc-700 rounded-xl flex-wrap">
              <img className="h-full rounded-md mt-2 ml-2" src={ '/badges/springBadge.svg'} alt="springBadge" />
              <img className="h-full rounded-md" src={ '/badges/egovBadge.svg'} alt="egovBadge" />
              <img className="h-full rounded-md" src={ '/badges/thymeleafBadge.svg'} alt="thymeleafBadge" />
              <img className="h-full rounded-md" src={ '/badges/reactBadge.svg'} alt="reactBadge" />
              <img className="h-full rounded-md" src={ '/badges/nextjsBadge.svg'} alt="nextjsBadge" />
              <img className="h-full rounded-md" src={ '/badges/nodejsBadge.svg'} alt="nodejsBadge" />
              <img className="h-full rounded-md" src={ '/badges/expressjsBadge.svg'} alt="expressjsBadge" />
              <img className="h-full rounded-md" src={ '/badges/flaskBadge.svg'} alt="flaskBadge" />
              <img className="h-full rounded-md" src={ '/badges/jqueryBadge.svg'} alt="jqueryBadge" />
              <img className="h-full rounded-md" src={ '/badges/tailwindBadge.svg'} alt="tailwindBadge" />
              <img className="h-full rounded-md" src={ '/badges/bootstrapBadge.svg'} alt="bootstrapBadge" />
              <img className="h-full rounded-md" src={ '/badges/muiBadge.svg'} alt="muiBadge" />
            </div>
          </li>

          <li className="mt-4">
            <div className="text-white text-xl font-bold">- DB / DBTools</div>
            <div className="flex space-x-2 space-y-2 mt-2 pt-2 p-4 bg-zinc-700 rounded-xl flex-wrap">
              <img className="h-full rounded-md mt-2 ml-2" src={ '/badges/mysqlBadge.svg'} alt="mysqlBadge" />
              <img className="h-full rounded-md" src={ '/badges/oracledbBadge.svg'} alt="oracledbBadge" />
              <img className="h-full rounded-md" src={ '/badges/dbeaverBadge.svg'} alt="dbeaverBadge" />
              <img className="h-full rounded-md" src={ '/badges/sqlgateBadge.svg'} alt="sqlgateBadge" />
            </div>
          </li>

          <li className="mt-4">
            <div className="text-white text-xl font-bold">- IDEs / Editors</div>
            <div className="flex space-x-2 space-y-2 mt-2 pt-2 p-4 bg-zinc-700 rounded-xl flex-wrap">
              <img className="h-full rounded-md mt-2 ml-2" src={ '/badges/eclipseBadge.svg'} alt="eclipseBadge" />
              <img className="h-full rounded-md" src={ '/badges/intelijBadge.svg'} alt="intelijBadge" />
              <img className="h-full rounded-md" src={ '/badges/androidstudioBadge.svg'} alt="androidstudioBadge" />
              <img className="h-full rounded-md" src={ '/badges/vscodeBadge.svg'} alt="vscodeBadge" />
            </div>
          </li>

          <li className="mt-4">
            <div className="text-white text-xl font-bold">- Version Control </div>
            <div className="flex space-x-2 space-y-2 mt-2 pt-2 p-4 bg-zinc-700 rounded-xl flex-wrap">
              <img className="h-full rounded-md mt-2 ml-2" src={ '/badges/svnBadge.svg'} alt="svnBadge" />
              <img className="h-full rounded-md" src={ '/badges/gitBadge.svg'} alt="gitBadge" />
              <img className="h-full rounded-md" src={ '/badges/giteaBadge.svg'} alt="giteaBadge" />
              <img className="h-full rounded-md" src={ '/badges/githubBadge.svg'} alt="githubBadge" />
            </div>
          </li>

          <li className="mt-4">
            <div className="text-white text-xl font-bold">- Collaboration tool </div>
            <div className="flex space-x-2 space-y-2 mt-2 pt-2 p-4 bg-zinc-700 rounded-xl flex-wrap">
              <img className="h-full rounded-md mt-2 ml-2" src={ '/badges/figmaBadge.svg'} alt="figmaBadge" />
              <img className="h-full rounded-md" src={ '/badges/jiraBadge.svg'} alt="jiraBadge" />
            </div>
          </li>

          <li className="mt-4">
            <div className="text-white text-xl font-bold">- Api </div> 
            <div className="flex flex-col space-x-2 space-y-2 mt-2 pt-2 p-4 bg-zinc-700 rounded-xl">

              <img className="w-28 rounded-md mt-2 ml-2" src={ '/badges/chatgptBadge.svg'} alt="chatgptBadge" />
              <div className="text-zinc-200 text-xs font-thin">- Chat Bot</div>

              <img className="w-28 rounded-md" src={ '/badges/firebaseBadge.svg'} alt="firebaseBadge" />
              <div className="text-zinc-200 text-xs font-thin">- FCM Mobile Push Message</div>

              <img className="w-28 rounded-md" src={ '/badges/kakaoBadge.svg'} alt="kakaoBadge" />
              <div className="text-zinc-200 text-xs font-thin">- Kakao Map</div>
              <div className="text-zinc-200 text-xs font-thin">- Kakao login</div>

              <img className="w-16 rounded-md" src={ '/badges/tossBadge.svg'} alt="tossBadge" />
              <div className="text-zinc-200 text-xs font-thin">- Toss Payments Core Api + SDK </div>
            </div>
          </li>

          <li className="mt-4 mb-4">
            <div className="text-white text-xl font-bold">- Other </div>
            <div className="flex flex-col space-x-2 space-y-2 mt-2 pt-2 p-4 bg-zinc-700 rounded-xl">

              <img className="w-28 rounded-md mt-2 ml-2" src={ '/badges/elasticsearchBadge.svg'} alt="elasticsearchBadge" />
              <span className="text-zinc-200">ELK Stack</span>
              <div className="text-zinc-300 text-xs font-thin">- Elastic Search / Kibana / LogStash 스택 구축 및 백엔드 연동</div>
              <div className="text-zinc-300 text-xs font-thin">- 형태소 분석기를 활용한 자동 완성 / 오타 교정 / 초성 검색 구현</div>
              <div className="text-zinc-300 text-xs font-thin">- 유저 검색량에 따른 유사도 가중치 부여</div>
            </div>
          </li>
        </ul>
      </div>
  );
}
