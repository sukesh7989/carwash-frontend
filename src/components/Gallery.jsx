import React from 'react'
import  img1 from '../../public/carwash_boy1.jpg'
// import  img4 from '../../public/carwash_girl.jpg'
import img2 from '../../public/carwash_tyre.jpg'
import  img3 from '../../public/carwash_boy2.jpg'
// import  img6 from '../../public/carwash_girl4.jpg'
import  img7 from '../../public/carwash_girl5.jpg'
import img8 from '../../public/car_wash_1.avif'
import img9 from '../../public/car_wash_2.avif'


const Gallery = () => {
  return (
    <div className='gallery' id='gallery1'>
    <h1>GALLERY</h1>
       <div className="gallery-img">
        <img src={img1} alt="" />
        <img src={img3} alt="" />
        <img src={img2} alt="" />
        <img src={img8} alt="" />
        <img src={img9} alt="" />
        <img src={img7} alt="" /> 
       
       </div>
    </div>
  )
}

export default Gallery