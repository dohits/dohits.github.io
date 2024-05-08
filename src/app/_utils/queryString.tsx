/*"use client"*/
import { useSearchParams } from "next/navigation";

export default function queryString(){
  const params = useSearchParams();
  const pnParams = params.get('pn');
  return pnParams;
}