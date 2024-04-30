import React from 'react'
import girl from '../../public/carwash_girl6.jpg'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const About = () => {
  return (
  
   <div className='about' id='about1'>
   <div className="aboutUs">
   <h1 > About us</h1>
   <h3>Door step car cleaning service at an affordable cost</h3>
   <div className="subDiv">
   <div className="container1">

   </div>
    <div>
    <div className="content">
      <p> <span> A clean car is a happy car </span>, who doesn't want to drive a clean car? At DAILY CARWASH we tend to change the previous car washing concept where the car owner’s had to deal with inconvenient, untrained and unprofessional people to get their prized possession clean and protected. Daily Carwash is a ground-breaking step in car cleaning sector, which provides best car cleaning service at your doorstep at your convenience with right equipment by highly trained professionals.</p>
    </div>
    <div className='vision-mission'>
    <div className='mission'>
      <h2 className='mi'>MISSION :</h2>
      <ul>
       <li>Best quality car cleaning on a daily basis and guaranteed customer satisfaction.</li>
      <li>Convenience of our customers preference is our priority, be it the time of cleaning or payment mode or frequency. Customer is our priority</li>
      <li>Eco-friendly car cleaning practice by using top quality car care products with highest customer satisfaction</li>
       </ul>
    </div>
        <div className="vision">
          <h2 className='vi'>Vision:</h2>
          <p>Commitment to provide our customers a Happy Car to workplace every day by providing daily car cleaning service by professionals using top quality products.

</p>
        </div>
   </div>
   </div>
   </div>
   </div>
   </div>
  )
}

export default About