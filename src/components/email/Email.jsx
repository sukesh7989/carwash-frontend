import React, { useState } from 'react';
import '../email/Email.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Email = () => {
    const [email, setEmail] = useState("")
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();


    const emailhandler = async (e) => {
        if (e.target.value === "") {
            setSuccess(false);
            setEmail("")
        } else {
            setEmail(e.target.value)
            let response = await
                axios.post("https://mern-opal-sigma.vercel.app/verifyEmail", { email: e.target.value })
            console.log(response);
            if (response.status === 200) {
                setSuccess(true)
            }

        }

    }

    const nextHandler = () => {
        try {
            let response = axios.post("http://localhost:8000/sendOtp", { email });

            localStorage.setItem("email", email);

            navigate('/otp')
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div className='forgot'>
            <div className='forgotpassword'>
                <form action=""></form>
                <input style={{marginRight:"10px"}} onChange={emailhandler} type="email" required placeholder='enter your email' />
                {success ? <p style={{ color: '#000' }}>Email found</p> : email !== "" && <p style={{ color: '#000' }} >Email not found</p>}
                <button style={{padding:"0px 10px" , border:"none"}} onClick={nextHandler} disabled={!success}>Next</button>
            </div>
        </div>
    )
}

export default Email