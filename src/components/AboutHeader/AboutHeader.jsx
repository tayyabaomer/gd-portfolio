import React from 'react';
import './AboutHeader.css';
import Navbar from '../navbar/Navbar';
import { AboutFlower } from '../SVGS/Svg';
import { Flower, AboutLeft, AboutRight, AboutSVG } from '../SVGS/Svg';


function AboutHeader() {
  return (
    <>
        <header className='aboutHeader'>
            <div className="aboutNavbar">
                <Navbar />
            </div>
            <div className="aboutHeadText">
                <span className='aboutLeftText'><AboutLeft /></span>
                <span className='aboutRightText'><AboutRight /></span>
            </div>
            <div className="aboutHeadSVGs">
                <span className='leftFlower'><AboutFlower /></span>
                <span className='aboutLogo'><AboutSVG /></span>
                <span className='rightFlower'><AboutFlower /></span>
            </div>
        </header>
    </>
  )
}

export default AboutHeader