import React, { useEffect, useState } from 'react'
import {useNavigate} from  'react-router-dom';
import "../../src/App.css"
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../public/carwash_img1.avif'
import img2 from '../../public/carwash_img2.avif'
import img3 from '../../public/carwash_img4.avif'
import Sedan from './Sedan';
import SUV from './SUV';
import Compact_suv from './Compact_suv';
import Luxury from './Luxury';
import logo from '../../public/carwash_logo.jpg';
import Popup from './Popup';
import Your_washes from './Your_washes';
import Header from './Header';
import Choose from './Choose';
import About from './About';
import Gallery from './Gallery';
import SlidingCards from './SlidingCards';
import Footer from './Footer';
import { ToastContainer,  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import {Link} from 'react-scroll'



const Home = () => {
  const [show , setShow] =useState(false)
  const [selectedService , setSeletedService] = useState({
    service:"",price:0
  })

  const [category , setCategory] = useState("sedan")
  const navigate = useNavigate()
  let data = localStorage.getItem("customer")
  useEffect(()=>{
    if(data){
      navigate("/home")
    }else{
      navigate("/")
    }
  },[])
  const handleClose = () => setShow(false);
  const handleShow = (obj) =>{
    console.log(obj);
    setSeletedService(obj)
    // console.log("ss");
    setShow(true)
  };
  return (
    <div>
    <ToastContainer/>
    <div className='hom-whole' >
    <Header/>
      <div className="Hom-con">
     <h1> Welcome to  <br /> <span>Degree Wala Car Wash</span>  <br />where we provide professional car cleaning services to keep your vehicle looking its best.</h1>
      </div>
     
      
    </div>
    {<Choose/>}
    <div className="middle-nav">
      <div className="nav">
        <ul>
          <li  onClick={()=>{  setCategory("sedan") }} className={ category==="sedan"?"button btn-selected": 'button'} >Sedan</li>

          <li   onClick={()=>{setCategory("compact_suv") }}  className={ category==="compact_suv"?"button btn-selected": 'button'}>Compact SUV</li>

          <li  onClick={()=>{  setCategory("suv") }} className={ category==="suv"?"button btn-selected": 'button'}>SUV</li>

         <li  onClick={()=>{  setCategory("luxury") }} className={ category==="luxury"?"button btn-selected": 'button'}>Luxury</li>
        </ul>
      </div>
    </div>

{ category==="sedan"&& <Sedan show={show} handleClose={handleClose}  handleShow={handleShow} />} 

{category==="suv"&& <SUV show={show} handleClose={handleClose} handleShow={handleShow} />} 

{  category==="compact_suv"&& <Compact_suv show={show} handleClose={handleClose} handleShow={handleShow} />}

{ category==="luxury"&& <Luxury show={show} handleClose={handleClose} handleShow={handleShow} />}

  {show && <Popup show={show} handleClose={handleClose} selectedService={selectedService}/>}

<About/>
<Gallery/>
<SlidingCards/>
<Footer/>
   </div>
  )
}

export default Home