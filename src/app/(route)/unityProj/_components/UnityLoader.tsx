"use client"
import { Unity, useUnityContext } from "react-unity-webgl";

export default function UnityLoader() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/_unityBuildData/Build/build.loader.js",
    dataUrl: "/_unityBuildData/Build/build.data",
    frameworkUrl: "/_unityBuildData/Build/build.framework.js",
    codeUrl: "/_unityBuildData/Build/build.wasm",
  });

  return (
    <>
      <Unity unityProvider={unityProvider}/>
    </>
  );
}


/* rules


dice(3 times)
/ at / df / it / 
select result pt -> category board
enem <-> pla (trn === hrtone)

ㅁㅁㅁㅁ
ㅁ   ㅁ
ㅁ  ㅁ
ㅁㅁ

*/
