import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
export default function MyComponent() {
  
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
       
        <h1>Fact about cats</h1>
        <p>{loading ?  <Spinner/> : fact}</p>
    </div>
  )
}
