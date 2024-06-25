import React from 'react';
import "../assets/css/Navbar.css";
import {motion} from "framer-motion";
import logo1 from '../assets/images/logo1.png';

const Navbar = () => {
  return (
    
      <nav className="navbar" >
      <div className="navbar-logo" >
        <img style={{height:'5rem',width:'12rem' }} src={logo1} alt="" />
      </div>
      <div>
      <ul className="navbar-links" style={{marginRight:'3rem'}}>
        <motion.li whileHover={{scale:1.2}}><a  href="#home">Home</a></motion.li>
        <motion.li whileHover={{scale:1.2}}><a  href="#about">About</a></motion.li>
        <motion.li whileHover={{scale:1.2}}><a   href="#services">Services</a></motion.li>
        <motion.li whileHover={{scale:1.2}}><a  href="#contact">Contact</a></motion.li>
      </ul>
      </div>
    </nav>
    
  )
}

export default Navbar
