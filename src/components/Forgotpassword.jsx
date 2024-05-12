import React from 'react'
import Email from './email/Email'
import { useNavigate } from 'react-router-dom'
const Forgotpassword = () => {
  const navigate = useNavigate()
  return (
    <div style={{display:"flex" ,justifyContent:"center"  , width:"100%", height:"100vh", alignItems:"center" , flexDirection:"column" , background:"#bdfeb1"}}  >
   <div style={{width:"50%" , backgroundColor:"white  " , padding:"30px" , borderRadius:"20px"}}>
   <p style={{color:"lightgreen  " ,fontSize:'20px' ,fontWeight:"600"}}>Forgot Password</p>
    <p>Enter your email address we will send you an OTP to reset your password </p>
      <Email/>
      <button style={{backgroundColor:"transparent" , fontWeight:"600",border:"none" ,margin:"10px 0px" ,color:"lightgreen" }} onClick={()=>{
        navigate('/login')
      }}>back to login</button>
   </div>
    </div>
  )
}

export default Forgotpassword