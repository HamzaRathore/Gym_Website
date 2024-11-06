import React, { useEffect, useState } from 'react';
import '../styles.css';
import bic from '../assets/biceps/1_b.avif';
import bic1 from '../assets/biceps/2_b.avif';
import bic3 from '../assets/biceps/3_b.avif';
import bic4 from '../assets/biceps/4_b.avif';
import bic5 from '../assets/biceps/5_b.avif';
import bic6 from '../assets/biceps/6_b.avif';
import bic7 from '../assets/biceps/7_b.avif';
import bic8 from '../assets/biceps/b_8.avif';
import tri_1 from '../assets/triceps/t_1.avif';
import tri_2 from '../assets/triceps/t_2.avif';
import tri_3 from '../assets/triceps/t_3.avif';
import tric_0 from '../assets/triceps/t_5.jpeg';
import tri_5 from '../assets/triceps/t_7.webp';
import tri_6 from '../assets/triceps/t_8.webp';
import tri_7 from '../assets/triceps/t_9.jpg';
import tri_8 from '../assets/triceps/t_10.webp';
import tri_9 from '../assets/triceps/t_11.jpg';
import tri_10 from '../assets/triceps/t_12.jpg';


import chest_1 from '../assets/chest/c_1.avif';
import chest_2 from '../assets/chest/c_2.avif';
import chest_3 from '../assets/chest/c_3.avif';
import chest_4 from '../assets/chest/c_4.avif';
import chest_5 from '../assets/chest/c_6.avif';
import chest_6 from '../assets/chest/c_7.avif';
import chest_7 from '../assets/chest/c_8.avif';
import chest_8 from '../assets/chest/c_9.avif';
import chest_9 from '../assets/chest/c_10.avif';
import chest_10 from '../assets/chest/c_11.avif';
import chest_11 from '../assets/chest/c_12.jpg';

import shoulder_1 from '../assets/shoulders/s_1.avif';
import shoulder_2 from '../assets/shoulders/s_2.avif';
import shoulder_3 from '../assets/shoulders/s_3.avif';
import shoulder_4 from '../assets/shoulders/s_4.avif';
import shoulder_5 from '../assets/shoulders/s_5.webp';
import shoulder_6 from '../assets/shoulders/s_6.webp';
import shoulder_7 from '../assets/shoulders/s_7.jpg';
import shoulder_8 from '../assets/shoulders/s_8.png';

import leg_1 from '../assets/leg_1.avif';
import leg_2 from '../assets/leg_2.avif';
import leg_3 from '../assets/leg_3.avif';
import leg_4 from '../assets/leg_4.avif';

import AOS from "aos";
import "aos/dist/aos.css";



export default function Exercises() {
    useEffect(()=>{
        AOS.init({
          duration:1000,
          
        });
      },[])

   
    const[level,setLevel]=useState('Beginner');

    const handleLevelChange=(event)=>{
          setLevel(event.target.value);
    }


  return (
    <>
    <h1 className='exer_heading'>Let's Do Some Exercise</h1>
    <div className="level-selector">
        <label><b>Select Level:</b></label>
        <select value={level} onChange={handleLevelChange}>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>
      {level==='Beginner' && (
        <div >
    <h1 className='exer_head' >Biceps</h1>
      <div className="exer_con "data-aos="fade-left" data-aos-delay="200">
            <div className="box-exer">
            <img src={bic} className="bic_img"/>
            <h3>Standing Barbell Curl</h3>
            <br/>
            <ul className='exer_list' >
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 9-8</li>
                <li><b>Rest:</b> 60 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={bic1} className="bic_img"/>
            <h3>Dumbbell Curl</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Dumbbell</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 10-12</li>
                <li><b>Rest:</b> 60 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={bic3} className="bic_img"/>
            <h3>Dumbbell Hammer Curl</h3>
            <br/>
            <ul className='exer_list'>
            <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Dumbbell</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 8-12</li>
                <li><b>Rest:</b> 60 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={bic4} className="bic_img"/>
            <h3>Preacher Curl</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Preacher Bench</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 8-10</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            
        </div>

        <h1 className='exer_head'>Triceps</h1>
      <div className="exer_con"  data-aos="fade-right" data-aos-delay="200">
            <div className="box-exer">
            <img src={tri_1} className="bic_img"/>
            <h3>Cable Rope Pushdown</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Triceps</li>
                <li><b>Equipment needed:</b> Cable machine</li>
                <li><b>Sets:</b> 3-4</li>
                <li><b>Reps:</b> 8-10</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={tri_2} className="bic_img"/>
            <h3>Close Grip Push-Up</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Triceps</li>
                <li><b>Equipment needed:</b> None</li>
                <li><b>Sets:</b> 3-4</li>
                <li><b>Reps:</b> 8-10</li>
                <li><b>Rest:</b> 60 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={tri_3} className="bic_img"/>
            <h3>Straight Arm Pull-Down</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Triceps</li>
                <li><b>Equipment needed:</b> Cable machine</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 10-12</li>
                <li><b>Rest:</b> 60 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={tric_0} className="bic_img"/>
            <h3>Overhead  Extensions</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Triceps</li>
                <li><b>Equipment needed:</b> Dumbbell</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 10-12</li>
                <li><b>Rest:</b> 60 seconds</li>
            </ul>
            </div>
            
        </div>
        

        <h1 className='exer_head' >Chest</h1>
      <div className="exer_con" data-aos="fade-left" data-aos-delay="200">
            <div className="box-exer">
            <img src={chest_1} className="bic_img"/>
            <h3>Weighted Svend Press</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Chest</li>
                <li><b>Equipment needed:</b> Steel Plates</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 12-14</li>
                <li><b>Rest:</b> 30 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={chest_2} className="bic_img"/>
            <h3>Push Up</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Chest</li>
                <li><b>Equipment needed:</b> None</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 10-12</li>
                <li><b>Rest:</b> 30 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={chest_3} className="bic_img"/>
            <h3>Pec Deck Fly</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Chest</li>
                <li><b>Equipment needed:</b> Pec deck machine</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 7-10</li>
                <li><b>Rest:</b> 50 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={chest_4} className="bic_img"/>
            <h3>Chest Dip</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Chest,teres,triceps</li>
                <li><b>Equipment needed:</b> Dip machine</li>
                <li><b>Sets:</b> 3-4</li>
                <li><b>Reps:</b> 8-12</li>
                <li><b>Rest:</b> 30 seconds</li>
            </ul>
            </div>
            
        </div>


        <h1 className='exer_head' >Shoulders</h1>
      <div className="exer_con" data-aos="fade-right" data-aos-delay="200">
            <div className="box-exer">
            <img src={shoulder_1} className="bic_img"/>
            <h3>Cable Lateral Fly</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Delts</li>
                <li><b>Equipment needed:</b> Cable machine</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 10-15</li>
                <li><b>Rest:</b> 60 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={shoulder_2} className="bic_img"/>
            <h3>Single Dumbbell Front Raise</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Delts</li>
                <li><b>Equipment needed:</b> Dumbbell</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 8-12</li>
                <li><b>Rest:</b> 30 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={shoulder_3} className="bic_img"/>
            <h3>Alternating Dumbbell Front Raise</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Delts</li>
                <li><b>Equipment needed:</b> Dumbbell</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 60 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={shoulder_4} className="bic_img"/>
            <h3>Standing Overhead Press (Military Press)</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Delts</li>
                <li><b>Equipment needed:</b> Cable Machine</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 8-10</li>
                <li><b>Rest:</b> 60 seconds</li>
            </ul>
            </div>
            
        </div>
      

        <h1 className='exer_head' >Legs</h1>
      <div className="exer_con" data-aos="fade-left" data-aos-delay="200">
            <div className="box-exer">
            <img src={leg_1} className="bic_img"/>
            <h3>Squats</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={leg_2} className="bic_img"/>
            <h3>Leg Press</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={leg_3} className="bic_img"/>
            <h3>Hack Squats</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={leg_4} className="bic_img"/>
            <h3>Leg Extension</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            
        </div>
        </div>
              )}

        {level==='Intermediate' && (
        <div>
    <h1 className='exer_head' >Biceps</h1>
      <div className="exer_con" data-aos="fade-left" data-aos-delay="200">
      <div className="box-exer">
            <img src={bic} className="bic_img"/>
            <h3>Standing Barbell Curl</h3>
            <br/>
            <ul className='exer_list' >
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 9-8</li>
                <li><b>Rest:</b> 60 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={bic1} className="bic_img"/>
            <h3>Dumbbell Curl</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Dumbbell</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 10-12</li>
                <li><b>Rest:</b> 60 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={bic3} className="bic_img"/>
            <h3>Dumbbell Hammer Curl</h3>
            <br/>
            <ul className='exer_list'>
            <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Dumbbell</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 8-12</li>
                <li><b>Rest:</b> 60 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={bic4} className="bic_img"/>
            <h3>Preacher Curl</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Preacher Bench</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 8-10</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={bic5} className="bic_img"/>
            <h3>One Arm Hammer Prescher</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={bic6} className="bic_img"/>
            <h3>Concentrated curls</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={bic7} className="bic_img"/>
            <h3>Standing Dumbbell Curls</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={bic8} className="bic_img"/>
            <h3>Dumbbell Hammer Curl</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            
        </div>

        <h1 className='exer_head' >Triceps</h1>
      <div className="exer_con" data-aos="fade-right" data-aos-delay="200">
      <div className="box-exer">
            <img src={tri_1} className="bic_img"/>
            <h3>Cable Rope Pushdown</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Triceps</li>
                <li><b>Equipment needed:</b> Cable machine</li>
                <li><b>Sets:</b> 3-4</li>
                <li><b>Reps:</b> 8-10</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={tri_2} className="bic_img"/>
            <h3>Close Grip Push-Up</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Triceps</li>
                <li><b>Equipment needed:</b> None</li>
                <li><b>Sets:</b> 3-4</li>
                <li><b>Reps:</b> 8-10</li>
                <li><b>Rest:</b> 60 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={tri_3} className="bic_img"/>
            <h3>Straight Arm Pull-Down</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Triceps</li>
                <li><b>Equipment needed:</b> Cable machine</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 10-12</li>
                <li><b>Rest:</b> 60 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={tric_0} className="bic_img"/>
            <h3>Overhead  Extensions</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Triceps</li>
                <li><b>Equipment needed:</b> Dumbbell</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 10-12</li>
                <li><b>Rest:</b> 60 seconds</li>
            </ul>
            </div>
            
            <div className="box-exer">
            <img src={tri_5} className="bic_img"/>
            <h3>Power Press</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={tri_6} className="bic_img"/>
            <h3>Dumbbell Upright Dip</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={tri_7} className="bic_img"/>
            <h3>Barbell Pullover</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={tri_8} className="bic_img"/>
            <h3>Overhead Dumbbell Extensions</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            
        </div>
        

        <h1 className='exer_head' >Chest</h1>
      <div className="exer_con" data-aos="fade-left" data-aos-delay="200">
      <div className="box-exer">
            <img src={chest_1} className="bic_img"/>
            <h3>Weighted Svend Press</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Chest</li>
                <li><b>Equipment needed:</b> Steel Plates</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 12-14</li>
                <li><b>Rest:</b> 30 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={chest_2} className="bic_img"/>
            <h3>Push Up</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Chest</li>
                <li><b>Equipment needed:</b> None</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 10-12</li>
                <li><b>Rest:</b> 30 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={chest_3} className="bic_img"/>
            <h3>Pec Deck Fly</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Chest</li>
                <li><b>Equipment needed:</b> Pec deck machine</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 7-10</li>
                <li><b>Rest:</b> 50 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={chest_4} className="bic_img"/>
            <h3>Chest Dip</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Chest,teres,triceps</li>
                <li><b>Equipment needed:</b> Dip machine</li>
                <li><b>Sets:</b> 3-4</li>
                <li><b>Reps:</b> 8-12</li>
                <li><b>Rest:</b> 30 seconds</li>
            </ul>
            </div>

            <div className="box-exer">
            <img src={chest_5} className="bic_img"/>
            <h3>Name</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={chest_6} className="bic_img"/>
            <h3>Name</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={chest_7} className="bic_img"/>
            <h3>Name</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={chest_8} className="bic_img"/>
            <h3>Name</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            
        </div>


        <h1 className='exer_head' >Shoulders</h1>
      <div className="exer_con" data-aos="fade-right" data-aos-delay="200">
            <div className="box-exer">
            <img src={shoulder_1} className="bic_img"/>
            <h3>Cable Lateral Fly</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={shoulder_2} className="bic_img"/>
            <h3>Single Dumbbell Front Raise</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={shoulder_3} className="bic_img"/>
            <h3>Alternating Dumbbell Front Raise</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={shoulder_4} className="bic_img"/>
            <h3>Standing Overhead Press (Military Press)</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
             </div>
            
            <div className="box-exer">
            <img src={shoulder_5} className="bic_img"/>
            <h3>Cable Lateral Fly</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={shoulder_6} className="bic_img"/>
            <h3>Single Dumbbell Front Raise</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={shoulder_7} className="bic_img"/>
            <h3>Alternating Dumbbell Front Raise</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={shoulder_8} className="bic_img"/>
            <h3>Standing Overhead Press (Military Press)</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            
        </div>
      

        <h1 className='exer_head' >Legs</h1>
      <div className="exer_con" data-aos="fade-left" data-aos-delay="200">
            <div className="box-exer">
            <img src={leg_1} className="bic_img"/>
            <h3>Squats</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={leg_2} className="bic_img"/>
            <h3>Leg Press</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={leg_3} className="bic_img"/>
            <h3>Hack Squats</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={leg_4} className="bic_img"/>
            <h3>Leg Extension</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            
        </div>
        </div>

        )}

        
{level==='Advanced' && (
        <div>
    <h1 className='exer_head' >Biceps</h1>
      <div className="exer_con" data-aos="fade-left" data-aos-delay="200">
      <div className="box-exer">
            <img src={bic} className="bic_img"/>
            <h3>Standing Barbell Curl</h3>
            <br/>
            <ul className='exer_list' >
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 9-8</li>
                <li><b>Rest:</b> 60 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={bic1} className="bic_img"/>
            <h3>Dumbbell Curl</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Dumbbell</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 10-12</li>
                <li><b>Rest:</b> 60 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={bic3} className="bic_img"/>
            <h3>Dumbbell Hammer Curl</h3>
            <br/>
            <ul className='exer_list'>
            <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Dumbbell</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 8-12</li>
                <li><b>Rest:</b> 60 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={bic4} className="bic_img"/>
            <h3>Preacher Curl</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Preacher Bench</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 8-10</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>

            <div className="box-exer">
            <img src={bic5} className="bic_img"/>
            <h3>One Arm Hammer Prescher</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={bic6} className="bic_img"/>
            <h3>Concentrated curls</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={bic7} className="bic_img"/>
            <h3>Standing Dumbbell Curls</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={bic8} className="bic_img"/>
            <h3>Dumbbell Hammer Curl</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            
        </div>

        <h1 className='exer_head' >Triceps</h1>
      <div className="exer_con" data-aos="fade-right" data-aos-delay="200">
      <div className="box-exer">
            <img src={tri_1} className="bic_img"/>
            <h3>Cable Rope Pushdown</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Triceps</li>
                <li><b>Equipment needed:</b> Cable machine</li>
                <li><b>Sets:</b> 3-4</li>
                <li><b>Reps:</b> 8-10</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={tri_2} className="bic_img"/>
            <h3>Close Grip Push-Up</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Triceps</li>
                <li><b>Equipment needed:</b> None</li>
                <li><b>Sets:</b> 3-4</li>
                <li><b>Reps:</b> 8-10</li>
                <li><b>Rest:</b> 60 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={tri_3} className="bic_img"/>
            <h3>Straight Arm Pull-Down</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Triceps</li>
                <li><b>Equipment needed:</b> Cable machine</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 10-12</li>
                <li><b>Rest:</b> 60 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={tric_0} className="bic_img"/>
            <h3>Overhead  Extensions</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Triceps</li>
                <li><b>Equipment needed:</b> Dumbbell</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 10-12</li>
                <li><b>Rest:</b> 60 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={tri_5} className="bic_img"/>
            <h3>Power Press</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={tri_6} className="bic_img"/>
            <h3>Dumbbell Upright Dip</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={tri_7} className="bic_img"/>
            <h3>Barbell Pullover</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={tri_8} className="bic_img"/>
            <h3>Overhead Dumbbell Extensions</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            
        </div>
        

        <h1 className='exer_head' >Chest</h1>
      <div className="exer_con" data-aos="fade-left" data-aos-delay="200">
      <div className="box-exer">
            <img src={chest_1} className="bic_img"/>
            <h3>Weighted Svend Press</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Chest</li>
                <li><b>Equipment needed:</b> Steel Plates</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 12-14</li>
                <li><b>Rest:</b> 30 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={chest_2} className="bic_img"/>
            <h3>Push Up</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Chest</li>
                <li><b>Equipment needed:</b> None</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 10-12</li>
                <li><b>Rest:</b> 30 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={chest_3} className="bic_img"/>
            <h3>Pec Deck Fly</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Chest</li>
                <li><b>Equipment needed:</b> Pec deck machine</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 7-10</li>
                <li><b>Rest:</b> 50 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={chest_4} className="bic_img"/>
            <h3>Chest Dip</h3>
            <br/>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Chest,teres,triceps</li>
                <li><b>Equipment needed:</b> Dip machine</li>
                <li><b>Sets:</b> 3-4</li>
                <li><b>Reps:</b> 8-12</li>
                <li><b>Rest:</b> 30 seconds</li>
            </ul>
            </div>

            <div className="box-exer">
            <img src={chest_5} className="bic_img"/>
            <h3>Name</h3>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={chest_6} className="bic_img"/>
            <h3>Name</h3>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={chest_7} className="bic_img"/>
            <h3>Name</h3>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={chest_8} className="bic_img"/>
            <h3>Name</h3>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            
        </div>


        <h1 className='exer_head'>Shoulders</h1>
      <div className="exer_con" data-aos="fade-right" data-aos-delay="200">
            <div className="box-exer">
            <img src={shoulder_1} className="bic_img"/>
            <h3>Cable Lateral Fly</h3>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={shoulder_2} className="bic_img"/>
            <h3>Single Dumbbell Front Raise</h3>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={shoulder_3} className="bic_img"/>
            <h3>Alternating Dumbbell Front Raise</h3>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={shoulder_4} className="bic_img"/>
            <h3>Standing Overhead Press (Military Press)</h3>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            
            <div className="box-exer">
            <img src={shoulder_5} className="bic_img"/>
            <h3>Cable Lateral Fly</h3>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={shoulder_6} className="bic_img"/>
            <h3>Single Dumbbell Front Raise</h3>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={shoulder_7} className="bic_img"/>
            <h3>Alternating Dumbbell Front Raise</h3>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={shoulder_8} className="bic_img"/>
            <h3>Standing Overhead Press (Military Press)</h3>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            
        </div>
      

        <h1 className='exer_head' data-aos="fade-left" data-aos-delay="200">Legs</h1>
      <div className="exer_con">
            <div className="box-exer">
            <img src={leg_1} className="bic_img"/>
            <h3>Squats</h3>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={leg_2} className="bic_img"/>
            <h3>Leg Press</h3>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={leg_3} className="bic_img"/>
            <h3>Hack Squats</h3>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            <div className="box-exer">
            <img src={leg_4} className="bic_img"/>
            <h3>Leg Extension</h3>
            <ul className='exer_list'>
                <li><b>Target Muscle:</b> Biceps</li>
                <li><b>Equipment needed:</b> Bar</li>
                <li><b>Sets:</b> 2-3</li>
                <li><b>Reps:</b> 6-8</li>
                <li><b>Rest:</b> 80 seconds</li>
            </ul>
            </div>
            
        </div>
        </div>

        )}
    </>
  )
}
