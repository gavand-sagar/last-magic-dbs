import React, { useEffect, useRef, useState } from 'react'

export default function Stopwatch() {
  
  let[time,setTime] = useState(0);
  const timer = useRef();
  let getState=()=>time
  useEffect(()=>{
    
    timer.current= setInterval(() => {
        console.log(new Date())
        setTime(t=>t+1)
      }, 1000);


    return ()=>{
        // on destroy
        clearInterval(timer.current)
    }
  },[])

  
    
  return (
    <div>Stopwatch
        <br/>
        {time}
    </div>
  )
}
