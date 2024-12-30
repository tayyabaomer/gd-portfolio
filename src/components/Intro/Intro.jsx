import React from 'react';
import { Flower } from '../SVGS/Svg';
import './Intro.css';

function Intro() {
  return (
    <section className="intro">
      <span className='firstFlower'><Flower /></span>
        <div className="intro-content">
          <p>
            I help brands stand out <br /> and communicate <br /> better through <br /> thoughtful & strategic <br /> design.
          </p>
        </div>
      <span><Flower /></span>
    </section>
  )
}

export default Intro