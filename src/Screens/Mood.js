import React, { useState } from 'react'
import Navbar from '../Layout/Navbar/Navbar'
function Mood() {
  const [vid, setVid]=useState(null);
  const handleChange=(event)=>{
    console.log(event)
  }
  return (
    <>
    <Navbar></Navbar>
    <input type="file" onchange={handleChange}></input>
    </>
  )
}

export default Mood