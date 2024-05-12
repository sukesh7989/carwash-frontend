import React, { useState } from 'react'
import Rating from '@mui/material/Rating';
import Header from './Header';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';

const Feedback = () => {
  const [value, setValue] = useState(2);
  const [submit, setSubmit] = useState("")
  const [loader, setLoader] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [pro, setPro] = useState([])
  const navigate = useNavigate();

  console.log(pro);

  const commonTab1 = (text) => {
    if (pro.includes(text)) {
      setPro(prev => prev.filter(item => item !== text))
    } else {
      setPro((prev) => {
        return [...prev, text];
      });
    }

  }
  const textareaHandler = (e) => {
    setFeedback(e.target.value)
  }
  let localdata = JSON.parse(localStorage.getItem("customer"));


  const submitHandler = async (e) => {
    setLoader(true)
    e.preventDefault();
    let response = await axios.post("http://localhost:5173/feedback", { value, pro, feedback, email: localdata.email });
    setLoader(false)
    navigate('/home');

  }
  console.log(pro);
  return (
    <div>
      <div style={{ background: 'black' }}>
        <Header />
      </div>
      <div className='feed' >
        <div className='feedback1'>


          <div className="emojis">
            <h1> {value === 1 && <span>😔</span>}</h1>
            <h2> {value === 1 && <span style={{ color: 'red' }}>Sorry</span>}</h2>



            <h1> {value === 2 && <span>😟</span>}</h1>
            <h2> {value === 2 && <span style={{ color: 'pink' }}>Very Bad</span>}</h2>


            <h1>  {value === 3 && <span>🙂</span>}</h1>
            <h2>  {value === 3 && <span style={{ color: 'orange' }}>Good</span>}</h2>


            <h1>   {value === 4 && <span>😊</span>}</h1>
            <h2>   {value === 4 && <span style={{ color: 'blue' }}>Excellent</span>}</h2>

            <h1> {value === 5 && <span>😍</span>} </h1>
            <h2> {value === 5 && <span style={{ color: 'green' }}>Love You Bangaram</span>} </h2>
          </div>
          <div className='feedback2'>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
          <h1>What went wrong ?</h1>
          <div className='tab common_tab'>
            <p onClick={() => { commonTab1("service not good") }} style={{ cursor: 'pointer', backgroundColor: pro.includes("service not good") ? "blue" : "#fff", color: pro.includes("service not good") ? "white" : "black" }} >service not good</p>
            <p onClick={() => { commonTab1("timings") }} style={{ cursor: 'pointer', backgroundColor: pro.includes("timings") ? "blue" : "#fff", color: pro.includes("timings") ? "white" : "black" }}>timings</p>
            <p onClick={() => { commonTab1("price") }} style={{ cursor: 'pointer', backgroundColor: pro.includes("price") ? "blue" : "#fff", color: pro.includes("price") ? "white" : "black" }}>price</p>
          </div>

          <div className="tab-2 common_tab">
            <p className='sub-plan' onClick={() => { commonTab1("subscription plans") }} style={{ cursor: 'pointer', backgroundColor: pro.includes("subscription plans") ? "blue" : "#fff", color: pro.includes("subscription plans") ? "white" : "black" }}>subscription plans</p>
            <p onClick={() => { commonTab1("Add-ons") }} style={{ cursor: 'pointer', backgroundColor: pro.includes("Add-ons") ? "blue" : "#fff", color: pro.includes("Add-ons") ? "white" : "black" }}>Add-ons</p>
          </div>
          <div className="tab-3 common_tab">
            <p onClick={() => { commonTab1("cleaner's behaviour") }} style={{ cursor: 'pointer', backgroundColor: pro.includes("cleaner's behaviour") ? "blue" : "#fff", color: pro.includes("cleaner's behaviour") ? "white" : "black" }}>cleaner's behaviour</p>
            <p onClick={() => { commonTab1("Location") }} style={{ cursor: 'pointer', backgroundColor: pro.includes("Location") ? "blue" : "#fff", color: pro.includes("Location") ? "white" : "black" }}>Location</p>
          </div>
          <div className='review'>
            <h6>say something about your experience ?</h6>
            {/* <textarea name="" id="" cols="55" rows="5" placeholder='  say somethinng about your experience'></textarea> */}
            <input type="text" required placeholder='    say somethinng about your experience' onChange={textareaHandler} style={{ width: "90%", height: '10vh', borderRadius: '10px' }} />
          </div>
          {
            loader === true ? <div style={{marginTop:"10px"}}>
              <CircularProgress size="1rem" />
            </div> : <button className='feeback-button' type='button' onClick={submitHandler}  >Submit your Feedback</button>
          }
        </div>
      </div>
    </div>
  )
}

export default Feedback