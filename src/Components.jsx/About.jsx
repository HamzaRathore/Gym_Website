import React from 'react'
import side_1 from '../assets/side_1.avif';
import side_2 from '../assets/side_2.avif';
import side3 from '../assets/side3_.3.avif';
export default function About(props) {
  return (
    <>
      
       <h1 className="heading_1"> {props.heading} </h1>
       <div id="container_3">
           <div className="txt_1" >
            <h1 className="heading_2">Gym Facilities</h1>
            <h2>"Our gym offers state-of-the-art facilities designed to cater to all your fitness needs. We provide a wide range of modern equipment, from cardio machines to free weights, ensuring a complete workout experience for all fitness levels. Our dedicated trainers are available to guide you through personalized training programs, helping you achieve your fitness goals. With spacious workout areas, a dedicated stretching zone, and separate sections for strength training and functional exercises, we ensure a comfortable environment for everyone."</h2>
           </div>
           <div className="side_1">
            <img src={side_1} className="side_1_img"/>
           </div>
       </div>

       <div id="container_4">
        <div className="side_1">
            <img src={side_2} className="side_1_img"/>
           </div>
        <div className="txt_1" >
         <h1 className="heading_2">Training Sessions</h1>
         <h2>" A vibrant picture of individuals actively working out or participating in an engaging training session, showcasing the energetic environment of our gym. Our professional trainers guide every move, ensuring you get the most out of each exercise. This image reflects the variety of workouts and group activities available, demonstrating the motivation and support you’ll experience as part of our fitness community."</h2>
        </div>
        
    </div>

    <div id="container_5">
        <div className="txt_1" >
         <h1 className="heading_2">Success Story</h1>
         <h2>""Our gym has helped countless members achieve their fitness goals. From weight loss journeys to strength-building transformations, our community is full of inspiring success stories. Join us and become the next success story at our gym!""</h2>
        </div>
        <div className="side_1">
         <img src={side3} className="side_1_img"/>
        </div>
    </div>

    </>
  )
}
