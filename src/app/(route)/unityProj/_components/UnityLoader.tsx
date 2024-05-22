"use client"
import { Unity, useUnityContext } from "react-unity-webgl";

export default function UnityLoader() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "./_buildData/Build/build.loader.js",
    dataUrl: "./_buildData/Build/build.data",
    frameworkUrl: "./_buildData/Build/build.framework.js",
    codeUrl: "./_buildData/Build/build.wasm",
  });

  return (
    <>
      <Unity unityProvider={unityProvider} style={{width:500, height:500}}/>
    </>
  );
}
