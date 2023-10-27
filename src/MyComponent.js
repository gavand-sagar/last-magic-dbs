import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import { useSelector } from 'react-redux';
export default function MyComponent() {
    const currentUsername = useSelector(state=>state.global.currentUsername) 
    const[fact,setFact] = useState('');
    const[loading,setLoading] = useState(true)
  
  useEffect(()=>{
    setLoading(true)
    axios.get("https://catfact.ninja/fact")
    .then(response=>{
        setLoading(false)
        setFact(response.data.fact)
    })
  },[])

  return (
    <div>
       
        <h1>Fact about cats by {currentUsername}</h1>
        <p>{loading ?  <Spinner/> : fact}</p>
    </div>
  )
}
