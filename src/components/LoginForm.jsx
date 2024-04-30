import React, { useEffect, useState } from 'react'
import "../../src/App.css"
import axios from 'axios';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import {toast} from "react-toastify";
import { Link } from 'react-router-dom';;
import {useNavigate} from 'react-router-dom'



const LoginForm = () => {
  const [email , setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  
 let data = localStorage.getItem("customer")

  useEffect(()=>{
    if(data){
      navigate("/home")
    }else{
      navigate("/login")
    }
  },[])

  const emailHandler=(e)=>{
    setEmail(e.target.value)
  }

  const passwordHandler=(e)=>{
    setPassword(e.target.value)
  }
 
  const submitHandler=async(e)=>{
     e.preventDefault();
    try{
      if(email === "" || password === ""  ){
        toast.error("please enter your details" ,{position: "bottom-left",width:"900px"})
      }
      // else if(data.status === 400){
      //   toast.error("please check your password")
      // }
      else{
        let data = await axios.post("http://localhost:8000/login" , {email , password})
        console.log(data);
        if(data.status === 200){
          let convertedData =  JSON.stringify(data.data)
          localStorage.setItem("customer",convertedData)
        }
        toast.success("login successful")
        navigate("/home")
      }
    }
    catch(err){
      console.log(err);
      toast.error("invalid password")
    }

     }

  return (
    <div className='loginform'>
     <div className="con1">
     <h1>Login</h1>
     <form  onSubmit={submitHandler}>
     <div className="input-box">
     <input type="email" placeholder='email'  onChange={emailHandler} /> <FaUser className='icon' /><br />
     </div>
     <div className="input-box">
     <input type="password" placeholder='password' onChange={passwordHandler} /><FaLock  className='icon'/> <br />
     </div>
        <div className="con3">
        <label><input className='check_box' type="checkbox" />Remember me</label>
        <a href="#">Forgot password..?</a>
        </div>
        <button className='btns' type='submit'>Login</button>

       <div className="footer">
       <p>Don't have an account ? <Link to="/">Signup</Link></p>
       </div>

      </form>

     </div>
    </div>
  )
}

export default LoginForm