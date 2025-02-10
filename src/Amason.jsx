import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Amason.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';


import { FaAmazon } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import img1 from './amazon.webp';
import img2 from './amazon1.avif';
import img3 from './amazon2.jpg';
import img4 from './iphone-13-offer.webp'

import { FaStar } from "react-icons/fa6";
import img5 from './NIKE.png'
import img6 from './airpod.jpg'
import img7 from './hublot.png'
import img8 from './16pro.png'
import './market.css'
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import limg from './amz.png'
import { CiDark } from "react-icons/ci";
const Amason = () => {
  
    const[Dark,setDark]=useState(true)
    
        const darkmode=()=>{
            setDark(!Dark)
        }
        console.log(Dark);
    
  return (
    <div style={{height:'100%',width:'100%',backgroundColor:Dark ? 'white':'grey',color:Dark?'black':'white'}}>
        <div className='navi d-flex justify-content-between bg-black bg-gradient text-light p-3 '>
          <div className='d-flex gap-1 ms-2'>
            <h4 className='text-warning'><FaAmazon /></h4>
            <Link to='/Amason 'className='text-decoration-none text-light'><h4>amason.in</h4></Link>
          </div>
          
        <div className='d-flex'>
          <select name="" id="" className='all rounded-start-3' >
              <option value="">All</option>
              <option value="">Alexa Skills</option>
              <option value="">Amason Devices</option>
              <option value="">Amason Fashion</option>
              </select>
          <input className='search' type="text" placeholder='Search amason.in'/>
          <button className='icn bg-warning rounded-end-3'><FaSearch /></button>
        </div>
        <div className='d-flex gap-4 me-2'>
          <h5 onClick={darkmode}><CiDark /></h5>
          <Link to='/login' className='text-decoration-none text-light'><h5 >Login</h5></Link>
          <Link to='/login' className='text-decoration-none text-light'><h5>Orders</h5></Link>
          <Link to='/cart' className='text-decoration-none text-warning'><h5 ><FaShoppingCart /></h5></Link>
          
        </div>
      </div>

      <div className='trans mt-5'>
        <Carousel className='h-6 ' autoPlay={true} showThumbs={false} showStatus={false} infiniteLoop={true} interval={2000}>
          <div id='top'>
            <img src={img1} className='h-50 w-50'  />
          </div>
          <div>
            <img src={img2} className='h-50 w-50'/>
        
          </div>
          <div>
            <img src={img3} className='h-50 w-50'/>
          </div>
          <div>
            <img src={img4} className='h-50 w-50'/>
          </div>
        </Carousel>
      </div>

     <div  className='itm' >
           <img src={limg} alt="" />
         </div>

    </div>
  )
}

export default Amason