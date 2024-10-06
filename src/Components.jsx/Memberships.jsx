// import React, { useState } from 'react'
// import abt_1 from '../assets/abt_1.jpg';
// import abt_2 from '../assets/abt_2.jpg';
// import abt_3 from '../assets/abt_3.jpg';
// import { useNavigate } from 'react-router-dom';

// export default function Memberships() {

//   const navigate = useNavigate();
//   const handleClick=()=>{
//     navigate('/exercises');
//   }
//   return (
//     <>
//     <section id="membership"></section>
//        <h1 className="heading_1">Memberships</h1>
//        < div className="container2">
//         <div className="box"id="box-1">
//              <div className="img">
//                 <img src={abt_1} className="abt_img"/>
//                 <h3 className="h3">"Kickstart your fitness journey with our 1-month membership plan. Perfect for those who want to test the waters and experience our facilities."</h3>
//                 <button className='btn-mem' onClick={handleClick}><h4>Buy MemberShip</h4></button>
//             </div>
            
           
//         </div>
//         <div className="box"id="box-2"><div className="img">
//             <img src={abt_2} className="abt_img"/>
//             <h3 className="h3">"Stay committed to your goals with our 6-month renewal plan. Enjoy exclusive benefits and make fitness a part of your lifestyle."

//             </h3>
//             <button className='btn-mem'><h4>Buy MemberShip</h4></button>
            
//         </div></div>
//         <div className="box"id="box-3"><div className="img">
//             <img src={abt_3} className="abt_img"/>
//             <h3 className="h3">"Achieve long-term results with our 12-month renewal plan. A complete package for those who are serious about their fitness journey."</h3>
//             <button className='btn-mem'><h4>Buy MemberShip</h4></button>
//         </div></div>
//         </div>

//     </>
//   )
// }

import React, { useState } from 'react';
import abt_1 from '../assets/abt_1.jpg';
import abt_2 from '../assets/abt_2.jpg';
import abt_3 from '../assets/abt_3.jpg';
import { useNavigate } from 'react-router-dom';
import FormComponent from './FormComponent'; // Import the form component
import '../styles.css'; // Import CSS for blur effect

export default function Memberships() {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false); // State to control form visibility

  const handleFormOpen = () => {
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  return (
    <>
      <section id="membership"></section>
      <h1 className="heading_1">Memberships</h1>

      {/* Correct the className syntax for container2 */}
      <div className={`container2 ${showForm ? 'blur' : ''}`}>
        <div className="box" id="box-1">
          <div className="img">
            <img src={abt_1} className="abt_img" alt="Membership 1 Month" />
            <h3 className="h3">
              "Kickstart your fitness journey with our 1-month membership plan. Perfect for those who want to test the waters and experience our facilities."
            </h3>
            <button className='btn-mem' onClick={handleFormOpen}>
              <h4>Buy Membership</h4>
            </button>
          </div>
        </div>

        <div className="box" id="box-2">
          <div className="img">
            <img src={abt_2} className="abt_img" alt="Membership 6 Months" />
            <h3 className="h3">
              "Stay committed to your goals with our 6-month renewal plan. Enjoy exclusive benefits and make fitness a part of your lifestyle."
            </h3>
            <button className='btn-mem' onClick={handleFormOpen}>
              <h4>Buy Membership</h4>
            </button>
          </div>
        </div>

        <div className="box" id="box-3">
          <div className="img">
            <img src={abt_3} className="abt_img" alt="Membership 12 Months" />
            <h3 className="h3">
              "Achieve long-term results with our 12-month renewal plan. A complete package for those who are serious about their fitness journey."
            </h3>
            <button className='btn-mem' onClick={handleFormOpen}>
              <h4>Buy Membership</h4>
            </button>
          </div>
        </div>
      </div>

      {/* Display the form component if showForm is true */}
      {showForm && (
        <div className="form-overlay">
          <FormComponent />
          <button className="close-btn" onClick={handleFormClose}>Close</button>
        </div>
      )}
    </>
  );
}
