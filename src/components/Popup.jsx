import { useState } from 'react';
import  axios  from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {toast} from "react-toastify";


function Popup(props) {
const [date , setDate] = useState("")
const [address , setAddress] = useState("")
const [number , setNumber] = useState("")
const [carno ,setCarno] = useState("")
const [ time , setTime] = useState("")
const [carModel , setCarModel] = useState("")

let userData =localStorage.getItem ('customer')
let convertedData = JSON.parse(userData)
console.log(  convertedData);
  const {show,handleClose,selectedService} = props;
const {service,price}=selectedService;
  const dateHandler =(e)=>{
    setDate(e.target.value)
  }
  const  addressHandler=(e)=>{
    setAddress(e.target.value)
  }
  const numberHandler =(e)=>{
    setNumber(e.target.value)
  }
  const carnumberHandler=(e)=>{
    setCarno(e.target.value)
  }
  const timehandler=(e)=>{
    setTime(e.target.value)
  }
  const  carModelHandler=(e)=>{
    setCarModel(e.target.value)
  }

  const submitHandler =async(e)=>{
    e.preventDefault( )
    let response = await axios.post ("https://carwash-backend-beryl.vercel.app/createWash", {date ,address, customerId:convertedData._id , number , carnumber : carno,service,price , time ,carModel} );
    handleClose();
   
    toast.success("Wash Created Successfully");

    

  }

  return (

     <Modal   show={show} onHide={handleClose}>
    <div className="timings" >
       <form className='form'>
       <div className='timeform'>
       <label> <input type="radio"  name='radio1' value="09:00AM - 10:00AM" onChange={timehandler} /> 09:00AM - 10:00AM </label>
        <label> <input type="radio"  name='radio1'   value="10:00AM - 12:00PM" onChange={timehandler}/> 10:00AM - 12:00AM</label>
        <label> <input type="radio"   name='radio1'  value="02:00AM - 04:00AM" onChange={timehandler}/> 02:00PM - 04:00PM</label>
        <label> <input type="radio"   name='radio1' value="04:00AM - 06:00AM"  onChange={timehandler}/> 04:00PM - 06:00PM</label>
       </div>
        <input type="date" onChange={dateHandler} />
        <input type="number" placeholder='Mobile Number' onChange={numberHandler} />
        <div style={{display:'flex' , justifyContent:'space-between'}}>
        <input type="text"  placeholder='Car Model'  onChange={carModelHandler}  />
        <input type="text"  placeholder='Car number' onChange={carnumberHandler}/>
        </div>
        <input type="text"  onChange={addressHandler}  placeholder='Address'/>

        <input type="submit" onClick={submitHandler}  />
       </form>
    </div>
  </Modal>
 
    
  );
}

export default Popup;