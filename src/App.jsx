import React, { useEffect } from 'react'
import { BrowserRouter, } from 'react-router-dom'
import {Routes , Route} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Signup from './components/Signup'
import "../src/App.css"
import Home from './components/Home'
import { ToastContainer,  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from './components/Error'
import Your_washes from './components/Your_washes'
import Choose from './components/Choose'
import Feedback from './components/Feedback'
import SlidingCards from './components/SlidingCards'
import Footer from './components/Footer'
import About from './components/About'
import Conditions from './components/terms/Conditions'
import Forgotpassword from './components/Forgotpassword'
import Privacy_policy from './components/privacy_Policy/Privacy_policy'
import Otp from './components/Otp'
import UpdatePassword from './components/UpdatePassword'

const App = () => {

  return (
    <BrowserRouter>
        <ToastContainer/>
        
            
          <Routes>

            <Route path='/' element={<Signup/>} />
            <Route path='/login' element={<LoginForm/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='*' element={<Error/>}/>
             <Route path='/yourwashes' element={<Your_washes/>}/>
             <Route path='chooseus'  element={<Choose/>}/>
             <Route path='/feedback' element={<Feedback/>}/>
             <Route path='slidingcards' element={<SlidingCards/>}/>
            <Route path='footer' element={<Footer/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/conditions' element={<Conditions/>}/>
            <Route path='/privacy_policy' element={<Privacy_policy/>}/>
            <Route path='/forgotpassword' element={<Forgotpassword/>}/>
              <Route path='otp'  element={<Otp/>}/>
              <Route path='/updatepassword'  element={<UpdatePassword/>}/>
          </Routes>
    </BrowserRouter>
  )
}

export default App