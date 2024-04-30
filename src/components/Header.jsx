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
            style={({isActive})=>({
              backgroundColor:isActive
              ? "blue":"#fff",color:isActive?"#fff":"#000"
            })}
          
          >
            {/* <button style={{ marginRight: '20px' }} > */}
            Feedback
            {/* </button> */}
          </NavLink>;
          {/* <button style={{ marginRight: '20px' }} onClick={() => {
            navigate('/feedback')
          }}>Feedback</button> */}
          <button style={{ marginRight: '20px' }} onClick={() => {
            navigate('/yourwashes')
          }}> Your Washes</button>
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