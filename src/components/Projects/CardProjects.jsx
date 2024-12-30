import React from 'react';
import './Projects.css';

function CardProjects( { SubTitle, Title1, Title2, Img, Btn} ) {

  return (
    <>
      <div className="projectContainer">
          <img src={Img} alt="Project Img" />
          <div className="projectContent">
            <p>{SubTitle}</p>
            <h3>{Title1} <br /> {Title2}</h3>
            <a href="#">{Btn}</a>
          </div>
      </div>
    </>
  )
}

export default CardProjects;