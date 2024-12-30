import React from 'react';
import Navbar from '../navbar/Navbar';
import Heading1 from './Heading1';
import {headingTop} from '../../content';
import { Circle, VerticleArrow } from '../SVGS/Svg';



function Header() {
  return (
    <>
      <header className="banner">
        {/* Navigation Bar */}
        <Navbar />
        {/* SVG Circle, animate while loading */}
        <span className="circle"><Circle /></span>
        {/* Title Top */}
        <div className="banner-heading">
          <Heading1 content= {headingTop[0].title1} />
          <Heading1 content= {headingTop[0].title2} />
          <Heading1 content= {headingTop[0].title3} />
        </div>
        {/* Scroll text and SVG line */}
        <div className="scroll">
          <p>Scroll</p>
          <VerticleArrow />
        </div>
      </header>
    </>
  )
}

export default Header