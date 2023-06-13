import React from 'react';
import Slide from './Slide';
import Data from './Data';
import './Home.css';
function Hero() {
  return (
    <div>

        <Slide slides={Data}/>
    </div>
  )
}

export default Hero