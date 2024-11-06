import React from 'react'
import '../styles.css';
import logo from '../assets/logo.webp';

import {Link as ScrollLink} from 'react-scroll';
import {Link as RouterLink} from 'react-router-dom';
export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
            <img src={logo} alt="Logo" />
            <h5>Gym Time</h5>
        </div>
        <ul className="nav">
          
            {/* <li><ScrollLink to='home'>Home</ScrollLink></li> */}
            <li><RouterLink to='/'>Home</RouterLink></li>
            <li><ScrollLink to ='membership'>Memberships</ScrollLink></li>
            <li><ScrollLink to='about'>About</ScrollLink></li>
            <li><ScrollLink to='form'>Contact</ScrollLink></li>
            <li><RouterLink to="/exercises">Exercises</RouterLink></li>
            <li><RouterLink to="/protein">Protein</RouterLink></li>
            
           
        </ul>
       </div>
    </>
  )
}
