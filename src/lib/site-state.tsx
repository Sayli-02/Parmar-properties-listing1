import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type SiteState = { saved:string[]; compared:string[]; viewed:string[]; toggleSaved:(s:string)=>void; toggleCompared:(s:string)=>void; markViewed:(s:string)=>void };
const Context=createContext<SiteState | undefined>(undefined);
export function SiteStateProvider({children}:{children:ReactNode}){
 const [saved,setSaved]=useState<string[]>(["casa-verde-bandra"]); const [compared,setCompared]=useState<string[]>([]); const [viewed,setViewed]=useState<string[]>([]);
 const value=useMemo(()=>({saved,compared,viewed,toggleSaved:(s:string)=>setSaved(v=>v.includes(s)?v.filter(x=>x!==s):[...v,s]),toggleCompared:(s:string)=>setCompared(v=>v.includes(s)?v.filter(x=>x!==s):v.length<3?[...v,s]:v),markViewed:(s:string)=>setViewed(v=>[s,...v.filter(x=>x!==s)].slice(0,4))}),[saved,compared,viewed]);
 return <Context.Provider value={value}>{children}</Context.Provider>;
}
export function useSiteState(){const v=useContext(Context); if(!v) throw new Error("Site state unavailable"); return v;}
