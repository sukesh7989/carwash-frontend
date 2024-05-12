import React from 'react'
import '../components/Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaCaretRight } from "react-icons/fa";
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll'
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className='footer'>
      <div className="content1">
        A clean car is a happy car. Daily Carwash is a ground-breaking step in car cleaning market by providing the customers a happy car everyday car cleaning service at your doorstep with guaranteed customer satisfaction by using top quality car care products with a team of professional Car Swachh Sevaks..
        <div className="followus">
          Follow us on : <FaFacebookF className='icons' />  <FaInstagram className='icons' /> <CiTwitter className='icons' />
        </div>
      </div>
      <div className="links">
        <div className="quickLinks">
          <h5 style={{marginLeft:'50px'}}> Links</h5>
          <ul>
            {/* <li><FaCaretRight/>About us   </li> */}
            <li><a href="#about1"><FaCaretRight /> About us</a></li>
            <li onClick={() => { navigate('/conditions') }}><FaCaretRight />Terms & Conditions  </li>
            <li onClick={()=>{navigate('/privacy_policy')}}><FaCaretRight />Privacy Policy  </li>
            <li><a href="#home"><FaCaretRight />Service </a> </li>
            <li><a href="#gallery1"><FaCaretRight />Gallery </a>  </li>
          </ul>
        </div>

      </div>
      <div className="address">
        <div className="address1">
          <h4>Address</h4>
          <p>Bhimavaram , near Vishnu College  ,<br /> 534231 , west Godavari District , AndhraPradesh </p>
        </div>
      </div>
    </div>
  )
}

export default Footer