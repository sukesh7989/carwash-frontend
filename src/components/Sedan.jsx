import React, { useState } from 'react'
import { FaIndianRupeeSign } from "react-icons/fa6";
import Popup from './Popup';


function Sedan(props) {

  const { show,handleClose,handleShow} = props;
  
  return (
    <div  className='priceBG'>
        <div className="sedan-container">
            <h3> <h1><span>Lite</span></h1>  Wash</h3>
          <div className="price">
            <h6><span><FaIndianRupeeSign/></span> </h6>
            <h1>699</h1>
            <h5 style={{position:'relative', top:'15px' }}> <span>/month</span> </h5>
          </div>       
          <h4> <span>12</span> Days Outer Cleaning</h4>     
          <h4><span>12</span> DAys Tire Cleaning</h4>
          <h4><span>1</span> DAys Interior Cleaning</h4>
          <h4><span>0</span>  Free Foamwash</h4>
          <h4><span>0</span> Dashboard polish</h4>
          <button type='button' onClick={()=>{
            handleShow({service:"Lite",price:699})
          }}> Book Now</button>
        </div>
        <div className="sedan-container">
            <h3> <h1><span>Basic</span></h1>  Wash</h3>
          <div className="price">
            <h6><span><FaIndianRupeeSign/></span> </h6>
            <h1>899</h1>
            <h5 style={{position:'relative', top:'15px' }}> <span>/month</span> </h5>
          </div>       
          <h4> <span>16</span> Days Outer Cleaning</h4>     
          <h4><span>16</span> DAys Tire Cleaning</h4>
          <h4><span>1</span> DAys Interior Cleaning</h4>
          <h4><span>1</span>  Free Foamwash</h4>
          <h4><span>0</span> Dashboard polish</h4>
          <button type='button'  onClick={()=>{
            handleShow({service:"Basic",price:899})
          }}> Book Now</button>
        </div>
        <div className="sedan-container">
            <h3> <h1><span>Deluxe</span></h1>  Wash</h3>
          <div className="price">
            <h6><span><FaIndianRupeeSign/></span> </h6>
            <h1>1199</h1>
            <h5 style={{position:'relative', top:'15px' }}> <span>/month</span> </h5>
          </div>       
          <h4> <span>20</span> Days Outer Cleaning</h4>     
          <h4><span>24</span> DAys Tire Cleaning</h4>
          <h4><span>3</span> DAys Interior Cleaning</h4>
          <h4><span>1</span>  Free Foamwash</h4>
          <h4><span>1</span> Dashboard polish</h4>
          <button type='button' onClick={()=>{
            handleShow({service:"Deluxe",price:1199})
          }}> Book Now</button>
        </div>
        <div className="sedan-container">
            <h3> <h1><span>Advanced</span></h1>  Wash</h3>
          <div className="price">
            <h6><span><FaIndianRupeeSign/></span> </h6>
            <h1>1499</h1>
            <h5 style={{position:'relative', top:'15px' }}> <span>/month</span> </h5>
          </div>       
          <h4> <span>24</span> Days Outer Cleaning</h4>     
          <h4><span>24</span> DAys Tire Cleaning</h4>
          <h4><span>3</span> DAys Interior Cleaning</h4>
          <h4><span>1</span>  Free Foamwash</h4>
          <h4><span>1</span> Dashboard polish</h4>
          <button type='button' onClick={()=>{
            handleShow({service:"Advanced",price:1199})
          }}> Book Now</button>
        </div>

       
    </div>


  )
}

export default Sedan