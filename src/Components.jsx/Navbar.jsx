import React from 'react'
import '../styles.css';
import logo from '../assets/logo.webp';
import {Link} from 'react-router-dom';
export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
            <img src={logo} alt="Logo" />
            <h5>Gym Time</h5>
        </div>
        <ul className="nav">
            <li><Link to='/'>Home</Link></li>
            <li><Link to ='/membership'>Memberships</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='contact'>Contact</Link></li>
            <li><Link to="/exercises">Exercises</Link></li>
            <li><Link to="/protein">Protein</Link></li>
           
        </ul>
       </div>
    </>
  )
}
