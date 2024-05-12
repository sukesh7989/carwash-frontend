import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Otp = () => {
    const [change, setChange] = useState("")
    const navigate =useNavigate()
    const inputHandler = (e) => {
        setChange(e.target.value)
    }

    const submitOtp = (e) => {
        e.preventDefault();

        try {
            let res = axios.post("https://mern-opal-sigma.vercel.app/verifyOtp", { email: localStorage.getItem("email"), otp: change })
            toast.success("Verified OTP successfully")

        } catch (error) {
            toast.error("Something went wrong")
        }
        navigate('/updatepassword')
    }
    return (
        <div style={{height:"100vh", display:'flex' , justifyContent:"center" , alignItems:"center" ,backgroundColor:"#bdfeb1"}}>
            <div style={{backgroundColor:"white" , padding:"50px" , borderRadius:"20px"}}>
            <form onSubmit={submitOtp}>
            <p>Enter your One Time Password</p>
                <input placeholder=' OTP'  onChange={inputHandler} type="text" /> <br />

                <input style={{margin:"10px 0px " , border:'none'}} type="submit" />
                
            </form>
            </div>
        </div>
    )
}

export default Otp