import React from 'react'
import { useParams } from 'react-router-dom'

export default function Orders() {
 
  const {type} = useParams();

  
  return (
    <div>{
        type
    }</div>
  )
}
