import React, { useEffect, useState } from 'react'
import abt_1 from '../assets/abt_1.jpg';
import abt_2 from '../assets/abt_2.jpg';
import abt_3 from '../assets/abt_3.jpg';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Memberships() {

  const navigate = useNavigate();
  const handleClick=()=>{
    navigate('/exercises');
  }

  useEffect(()=>{
    AOS.init({
      duration:1000,
      
    });
  },[])
  return (
    <> 
   
    <section  id="membership"></section>
       
       < div name="membership" className="container-2" data-aos="fade-up" data-aos-delay="200">
       <div><h1  className="heading_1">Memberships</h1></div>
       < div className="container2">
        <div className="box"id="box-1">
             <div className="img">
                <img src={abt_1} className="abt_img"/>
                <h3 className="h3">"Kickstart your fitness journey with our 1-month membership plan. Perfect for those who want to test the waters and experience our facilities."</h3>
                <button className='btn-mem' onClick={handleClick}><h4>Buy MemberShip</h4></button>
            </div>
            
           
        </div>
        <div className="box"id="box-2"><div className="img">
            <img src={abt_2} className="abt_img"/>
            <h3 className="h3">"Stay committed to your goals with our 6-month renewal plan. Enjoy exclusive benefits and make fitness a part of your lifestyle."

            </h3>
            <button className='btn-mem'><h4>Buy MemberShip</h4></button>
            
        </div></div>
        <div className="box"id="box-3"><div className="img">
            <img src={abt_3} className="abt_img"/>
            <h3 className="h3">"Achieve long-term results with our 12-month renewal plan. A complete package for those who are serious about their fitness journey."</h3>
            <button className='btn-mem'><h4>Buy MemberShip</h4></button>
        </div></div>
        </div>
        </div>

    </>
  )
}
