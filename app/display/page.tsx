// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client"
import { getRandomInt } from '@/utils/utils.js'
import { socket } from "@/lib/socketClient"
import { useState, useEffect, Suspense } from "react"
import ContentScroller from '@/components/ContentScroller'
import ContentScrollerSideLoaded from '@/components/ContentScrollerSideLoaded'

  /// we'll use the content routes look up key here to tell us how to handle
  /// each unique piece of screen content 
import data from '@/public/data.json'

export default function Home() {
  //const doScreen = searchParams.get('screen')
  const routeRules = data
  //console.log(`displaying screen: ${doScreen}`)
/*
  const[currentScreen, setCurrentScreen] = useState("screen1")

  
  useEffect(() => {
    if (doScreen != null) {
      // do a search param to change the screen
      // ?screen=123456789....
      console.log(`displaying screen: ${doScreen}`)

      setCurrentScreen("screen"+doScreen)
    }
  }, [doScreen])
  */
   //can't pass the query param to the child component properly?

///////display: "none" or "block"
  //div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
/*
 initial={{opacity: 0}}
        animate={{opacity:1}}
initial={{y: -250}}
        animate={{y: -10}}
        transition={{ delay:0.25, duration:3}}
        
initial={{y: -250}}
animate={{y: 0}}
transition={{ delay:0.25}}

style={{top:`-${vidAh}px`}}
        style={{ display: vidAvisible ? 'block' : 'none'}}
key="my-animated-div" // Important: Direct children of AnimatePresence must have a unique key
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }} // Define the exit animation here
          transition={{ duration: 0.5 }}        
          
*/       
  const [doHideSideLoader, setDoHideSideLoader] = useState(0)
  function hideSideLoader(data) {
    //console.log(data)
    setDoHideSideLoader(getRandomInt(1,9999))
  }

  const [sideloadZindex, setSideloadZindex] = useState(0)

  useEffect(() => {
    const sideloadShow = setTimeout(() => {
      setSideloadZindex(800)
    }, 1000)
    return () => {
      clearTimeout(sideloadShow)
    }
  }, [])
  return (
    <div className="
      absolute left-0 top-0
    "
    style={{width:'1920px', height:'1080px',
      cursor:'none'
        }}
    >
      <div className="
        z-500
        w-full h-full
        absolute
      ">
      <Suspense>
        <ContentScroller 
          image={"scrollo"}
          tellParentHideSideLoader={hideSideLoader}
          routeRules={routeRules}
          />
      </Suspense>
      </div>
    
    </div>
  );
}
/*
<div className="
        absolute
        w-full h-full
        top-0
        left-200
      "
      style={{zIndex:`${sideloadZindex}`}}
      >
        <ContentScrollerSideLoaded
          image={"rollback"}
          routeRules={routeRules}
          hideSideLoader={doHideSideLoader}
          />
      </div>
    
*/
/*
    <div className="
        absolute
        w-full h-full
        top-0
        left-200
      "
      style={{zIndex:`${sideloadZindex}`}}
      >
        <ContentScrollerSideLoaded
          image={"rollback"}
          routeRules={routeRules}
          hideSideLoader={doHideSideLoader}
          />
      </div>
    </div>
*/