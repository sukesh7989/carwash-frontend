import React, { useEffect, useState } from 'react'
import Header from './Header'
import "../../src/App.css"
import axios from 'axios'
import { IoTimeOutline } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import cleaner from '../../public/cleaner.jpg'
import { FaStar } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
const Your_washes = () => {
    const [yourwash , setYourwash] =useState([]);
    let cus = localStorage.getItem('customer');
    let customer_data =  JSON.parse(cus);
    console.log( customer_data);

    const yourwashes =async()=>{
    let data = await  axios.get(`http://localhost:8000/yourwashes/${customer_data._id}`)
        console.log(data .data);
        setYourwash(data.data)
        console.log(data.data);
    }
  
    useEffect(() => {
        yourwashes();
    },[]);

  return (

    <div>
        <div style={{background:'black'}}>
            <Header/>
        </div>
        <div className='yourwashDiv'>
            {yourwash.map((obj , i)=>{
                {/* const date = new Date(obj.date) */}
                return(
                    <div className='yourwash'>
                        <p>Wash Details : <input type="text" /> </p>
                       <div className="yourwash-container">
                       <h1 className='time'>  <h1 className='icons'><IoTimeOutline /></h1>   {obj.time} </h1>

                          <h1 className='time'>  <h1 className='icons'><FaCar /></h1>   {obj.carModel} , {obj.carnumber}</h1>
                          <h1 className='time'>  <h1 className='icons'><CiLocationOn /></h1>   {obj.address} </h1>
                       </div>

                       <div>
                        <p>Your Cleaner :</p>
                        <div className="workerDetails">
                           <div>
                           <img src={cleaner} alt="" />
                           </div>
                           <div className='worker'>
                           <h4>Tom Cruise </h4>
                            <div className='worker-rating'>
                            <h4><FaStar />  </h4>
                            <h5>4.5</h5>
                            </div>
                           </div>
                           <div className='call'>
                            {/*  */}
                            <a href="tel:7989004844"><h2><IoCall /></h2></a>
                           </div>
                        </div>
                       </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Your_washes