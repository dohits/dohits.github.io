'use client'
import {getPostList, sortPostList} from "@/app/_utils/_lib/postParser";
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export default function QueryStringLib({paramName, onParamChange}:{paramName:string, onParamChange?:Function}) {

  const paramHook = useSearchParams()
  const paramData = paramHook.get(paramName)
  /*console.log(paramData);*/
  return <></>
}