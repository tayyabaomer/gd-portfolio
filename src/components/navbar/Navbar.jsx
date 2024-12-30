import React from 'react';
import { SlMenu } from "react-icons/sl";
import { NavLink} from 'react-router-dom';
import '../../App.css';
import './navbar.css';

function Navbar() {
  return (
    <>
        <nav>
            <ul>
                <li>
                    <NavLink to="/" end>
                        <h2>Nick Timmothy</h2>
                    </NavLink>
                </li>
                <li>
                    <span className="menu">
                        <SlMenu size="1.5rem"/>
                    </span>
                </li>
            </ul>
        </nav>

    {/* <NavLink to="/" end>
    Home
    </NavLink>
    <NavLink to="/About">About</NavLink>
    <NavLink to="/Portfolio">Portfolio</NavLink>
    <NavLink to="/Contact">Contact</NavLink> */}
    </>
        
        
  )
}

export default Navbar;