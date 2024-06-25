import React from 'react';
import "../assets/css/hero.css"
import finalImage from '../assets/images/Ignite your potential unleash your success.svg'; // Correctly import the image

function Hero() {
  return (
    <div id="maskparent" >
      <img id="mask" src={finalImage} alt="Hero" />
    </div>
  );
}

export default Hero;