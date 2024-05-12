import React, { useEffect, useState } from 'react'
import "../../src/App.css"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {useNavigate} from  'react-router-dom';



const Signup = () => {
  const [email , setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmpassword , setConfirmpassword] = useState("")
  const navigate = useNavigate();

  const emailHandler=(e)=>{
    setEmail(e.target.value)
  }

  const passwordHandler=(e)=>{
    setPassword(e.target.value)
  }
  const confirmPasswordHandler=(e)=>{
    setConfirmpassword(e.target.value)
  }
 
  let data = localStorage.getItem("customer")
  useEffect(()=>{
    if(data){
      navigate("/home")
    }else{
      navigate("/")
    }
  },[])
  const submitHandler=async(e)=>{
     e.preventDefault();
    try{
      if(email === "" || password === ""  || confirmpassword===""  ){
        toast.error("please enter your details")
      }
      else{
        let data = await axios.post("http://localhost:8000/signup" , {email , password , confirmpassword})
        console.log(data);
        if(data.status === 200){
          toast.success("Account created Successfully")
          navigate('/login')
      }
    
         }
    }
    catch(err){
      if(err?.response?.data){
        toast.error(err.response.data)
      }else{
        toast.error("Something went wrong")

      }
    }

    }
  return (
    <div className='loginform'>
     
    <ToastContainer/>

     <div className="con1">
     
     <h1>Signup</h1>
     <form  onSubmit={submitHandler}>
     <div className="input-box">
     <input type="email" placeholder='email'  onChange={emailHandler} /> <FaUser className='icon' /><br />
     </div>
     <div className="input-box">
     <input type="password" placeholder='password' onChange={passwordHandler} /><FaLock  className='icon'/> <br />
    <input type="password" placeholder='confirm password' onChange={confirmPasswordHandler} /> <FaLock  className='icon2'/> <br />

     </div>
      
         <button className='btns' type='submit'>signup</button> 
        
       <div className="footer2" >
       <p> have an account ? <Link to="/login">login</Link></p>
       </div>

      </form>

     </div>
    </div>
  )
}

export default Signup;