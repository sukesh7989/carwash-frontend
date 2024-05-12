import React from 'react'
import logo from '../../public/1122.png';
import { NavLink, useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate()
  return (
    <div style={{ marginBottom: '30px' }} >
      <div className="header">
        <div className="img">
          <img src={logo} alt="" onClick={() => {
            navigate('/home')
          }} />

        </div>

        <div className="btn" style={{ border: 'none' }}>
          <NavLink  
            to='/feedback'
            style={({ isActive  }) => ({
              backgroundColor: isActive
                ? "blue" : "", color: isActive ? "#fff" : "#000",textDecoration:'none' , padding:"5px 10px" , borderRadius:'20px', border:'2px solid blue' , color:'white' , fontWeight:'700' , fontSize:"12px"
            })} className="headerbtn">
           FEEDBACK
          </NavLink>;

          <NavLink
            to='/yourwashes'
            style={({ isActive }) => ({
              backgroundColor: isActive
                ? "blue" : "", color: isActive ? "#fff" : "#000" ,textDecoration:'none' , padding:"5px 10px" , borderRadius:'20px', border:'2px solid blue' , color:'white' , fontWeight:'700' , fontSize:"12px" 
            })}className="headerbtn" >
            YOUR WASHES
          </NavLink>;
  
          <button onClick={() => {
            localStorage.clear();
            navigate("/")
          }}>Log Out</button>
        </div>

      </div>
    </div>
  )
}

export default Header