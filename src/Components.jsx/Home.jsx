import React from 'react'
import '../styles.css';
import g_back3 from '../assets/g_back3.jpg';
export default function Home() {
  return (
    <>
      <div className="mid-container">
        <img src={g_back3}  alt="gym"/>
        <div className="first"><h1>If It Doesn't</h1></div>
        <div className="sec"><h1>Challenge You</h1></div>
        <div className="thrd"><h1>It Won't Change You</h1></div>
        
       </div>
    </>
  )
}
