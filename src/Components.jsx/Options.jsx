import React from 'react'
import img_1 from '../assets/1.png';
import img_2 from '../assets/2 (1).png';
import img_3 from '../assets/3.png';
import img_4 from '../assets/4.1.png';
import img_5 from '../assets/5.png';
import img_6 from '../assets/6.png';

export default function Options() {
  return (
    <>
      
    <div className="container_6">
        <div className="options">
             <img src={img_1} className="opt_img"/>
            <h3>Functional Training</h3>
            <p className="opt_para">Squeeze 100% benefit from the universal training: speed, strength, endurance</p>
        </div>
        <div className="options">
             <img src={img_2} className="opt_img"/>
             <h3>Cardio Training</h3>
             <p className="opt_para" >Improve your health, endurance and cardiovascular system</p>
            </div>
        <div className="options">
            <img src={img_3} className="opt_img"/>
            <h3>Personal Trainer</h3>
            <p className="opt_para">Next to you will always be a personal trainer, who will teach, prompt and insure.</p>
        </div>
        
    </div>
    <div className="container_6">
        <div className="options">
            <img src={img_4} className="opt_img"/>
            <h3>Become Stronger</h3>
            <p className="opt_para">Strength training will make you a monster of the iron world with incredible power</p>
        </div>
        <div className="options"><img src={img_5} className="opt_img"/>
            <h3>Aesthetics of Body</h3>
            <p className="opt_para">Our training will make your body not only hardy, but also beautiful.</p>
        </div>
        <div className="options"><img src={img_6} className="opt_img"/>
            <h3>Sports Nutrition</h3>
            <p className="opt_para">You will learn about all the principles of healthy sports nutrition.</p>
        </div>
        
    </div>
    </>
  )
}
