import React from 'react'
import { RxCalendar } from "react-icons/rx";
import { BiHomeHeart } from "react-icons/bi";
import { PiNotePencilBold } from "react-icons/pi";
import { FaMoneyCheckDollar } from "react-icons/fa6";

const Choose = () => {
  return (
  <div className="chooseBar" >
      <div className='cards'>
        <div className="card">
            <p>Everyday your car is cleaned by our professionals at your convenience, so that you can drive a happy car every day to work.</p>
        </div>
        <div className="card">
            <p>Everyday Cleaned at your regular parking place so that you can focus on getting ready to be at your workplace on time by driving a clean car.</p>
        </div>
        <div className="card">
            <p>Daily carwash has taken a revolutionary step by using quality products and equipment to clean efficiently and effectively by a team of professionals.</p>
        </div>
        <div className="card">
            <p>Payments can be made in cash, net banking, paytm, debit/credit cards or any UPI methods. Payments can be made weekly/monthly at your convenience.</p>
        </div>
    </div>
    <div className='second-cards'>
        <div className="card" style={{position:'relative' , left:'6px'}}>
        <h1 className='react-icons'><RxCalendar /></h1>
        <p>Daily Service</p>
        </div>
        <div className="card">
           <h1 className="react-icons"><BiHomeHeart /></h1>
           <p>At your DoorStep</p>
        </div>
        <div className="card">
        <h1 className="react-icons"><PiNotePencilBold /></h1>
        <p>Quality Service</p>
        </div>
        <div className="card" style={{position:'relative' , right:'6px'}}>
        <h1 className="react-icons"><FaMoneyCheckDollar /></h1>
        <p>Easy Payment</p>
        </div>
    </div>
  </div>
  )
}

export default Choose