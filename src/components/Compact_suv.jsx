import React from 'react'
import { FaIndianRupeeSign } from "react-icons/fa6";


const Compact_suv = (props) => {
  const { show,handleClose,handleShow} = props;

  return (
    <div  className='priceBG' >
    <div className="sedan-container">
        <h3> <h1><span>Lite</span></h1>  Wash</h3>
      <div className="price">
        <h6><span><FaIndianRupeeSign/></span> </h6>
        <h1>999</h1>
        <h5 style={{position:'relative', top:'15px' }}> <span>/month</span> </h5>
      </div>       
      <h4> <span>10</span> Days Outer Cleaning</h4>     
      <h4><span>12</span> DAys Tire Cleaning</h4>
      <h4><span>1</span> DAys Interior Cleaning</h4>
      <h4><span>1</span>  Free Foamwash</h4>
      <h4><span>0</span> Dashboard polish</h4>
      <button type='button'onClick={()=>{
            handleShow({service:"Lite",price:999})
          }}> Book Now</button>
    </div>
    <div className="sedan-container">
        <h3> <h1><span>Basic</span></h1>  Wash</h3>
      <div className="price">
        <h6><span><FaIndianRupeeSign/></span> </h6>
        <h1>1499</h1>
        <h5 style={{position:'relative', top:'15px' }}> <span>/month</span> </h5>
      </div>       
      <h4> <span>12</span> Days Outer Cleaning</h4>     
      <h4><span>14</span> DAys Tire Cleaning</h4>
      <h4><span>1</span> DAys Interior Cleaning</h4>
      <h4><span>1</span>  Free Foamwash</h4>
      <h4><span>1</span> Dashboard polish</h4>
      <button type='button' onClick={()=>{
            handleShow({service:"Lite",price:1499})
          }}> Book Now</button>
    </div>
    <div className="sedan-container">
        <h3> <h1><span>Deluxe</span></h1>  Wash</h3>
      <div className="price">
        <h6><span><FaIndianRupeeSign/></span> </h6>
        <h1>1999</h1>
        <h5 style={{position:'relative', top:'15px' }}> <span>/month</span> </h5>
      </div>       
      <h4> <span>16</span> Days Outer Cleaning</h4>     
      <h4><span>16</span> DAys Tire Cleaning</h4>
      <h4><span>3</span> DAys Interior Cleaning</h4>
      <h4><span>1</span>  Free Foamwash</h4>
      <h4><span>1</span> Dashboard polish</h4>
      <button type='button' onClick={()=>{
            handleShow({service:"Lite",price:1999})
          }}> Book Now</button>
    </div>
    <div className="sedan-container">
        <h3> <h1><span>Advanced</span></h1>  Wash</h3>
      <div className="price">
        <h6><span><FaIndianRupeeSign/></span> </h6>
        <h1>2199</h1>
        <h5 style={{position:'relative', top:'15px' }}> <span>/month</span> </h5>
      </div>       
      <h4> <span>24</span> Days Outer Cleaning</h4>     
      <h4><span>24</span> DAys Tire Cleaning</h4>
      <h4><span>3</span> DAys Interior Cleaning</h4>
      <h4><span>2</span>  Free Foamwash</h4>
      <h4><span>1</span> Dashboard polish</h4>
      <button type='button'onClick={()=>{
            handleShow({service:"Lite",price:2199})
          }}> Book Now</button>
    </div>
</div>
  )
}

export default Compact_suv
