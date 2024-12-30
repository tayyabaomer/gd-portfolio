import React from 'react';
import { FooterSVG } from '../SVGS/Svg';
import { links } from '../../content';
import FooterLinks from './FooterLinks';
import './Footer.css';

function Footer() {

    const currentYear = new Date().getFullYear();
    function year() {
        return currentYear;
    }

  return (
    <>
        <footer className='footer'>
            <div className="footerContainer">
                <div className="rows links">
                    <FooterLinks 
                        title={links[0].title} 
                        link1={links[0].Link1} linkPath1="/"
                        link2={links[0].Link2} linkPath2="/"
                        link3={links[0].Link3} linkPath3="/"
                        link4={links[0].Link4} linkPath4="/"
                    />
                </div>
                <div className="rows">
                    <FooterSVG />
                </div>
                <div className="rows links">
                    <FooterLinks 
                        title={links[1].title} 
                        link1={links[1].Link1} linkPath1="/"
                        link2={links[1].Link2} linkPath2="/Portfolio"
                        link3={links[1].Link3} linkPath3="/Contact"
                        link4={links[1].Link4} linkPath4="/About"
                    />
                </div>
            </div>
            <div className="copyRight">
                <p>Copy Right &copy; {currentYear} | Redeveloped by Tayyaba, for learning purpose</p>
            </div>
        </footer>  
    </>
  )
}



export default Footer;