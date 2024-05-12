import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdatePassword = () => {
    const[password , setPassword]=useState('');
    const[confirm , setConfirm]=useState('');
    const navigate = useNavigate()
    const updateHandler=(e)=>{
        setPassword(e.target.value)
    }
    const confirmHandler=(e)=>{
        setConfirm(e.target.value)
    }
    const passwordHandler=async(e)=>{

        e.preventDefault()
     try {
        let response =await
         axios.post("https://mern-opal-sigma.vercel.app/updatePassword",{password , confirm , email: localStorage.getItem("email")});
        if(response.status ===200){
            toast.success("Updated Password Successfully")
            navigate('/login')
        }else{
            toast.error("Something went wrong")
        }
      
     } catch (error) {
        toast.error("Something went wrong")
        
     }
    }
    
  return (
    <div style={{display:"flex",height:"100vh", justifyContent:'center' , alignItems:'center',backgroundColor:'#000137' }}>
        <form style={{display:'flex' , flexDirection:"column" , padding:'50px' , background:'white' , borderRadius:"20px" , lineHeight:"30px" ,gap:"10px" , width:"30%"}} onSubmit={passwordHandler}>
        <h4>Choose a password</h4> 
            <input type="text"  placeholder='update password' onChange={updateHandler}/>
            <input type="text"  placeholder='confirm password' onChange={confirmHandler}/>
            <input type="submit"  style={{background:"blue" , color:"white" , border:'none'}}/>
        </form>
    </div>
  )
}

export default UpdatePassword