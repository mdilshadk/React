import React from 'react'
import './roottask.css'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import img1 from './hublot.png';
import img2 from './16pro.png';
import img3 from './airpod.jpg'

const Roottask = () => {
  return (
    <div>
     
    <div className='head  d-flex justify-content-center gap-5 p-2 '>
        <Link to="/home" className='text-decoration-none text-light'><h3>HOME</h3></Link>
        <Link to='/about' className='text-decoration-none text-light'> <h3>ABOUT</h3></Link>
        <Link to='/contact'className='text-decoration-none text-light'> <h3>CONTACT</h3></Link>
    </div>
    <Carousel className='h-6 ' autoPlay={true} showThumbs={false} showStatus={false} infiniteLoop={true} interval={2000}>
                <div id='top'>
                    <img src={img1} className='h-25 w-25'  />

                </div>
                <div>
                    <img src={img2} className='h-25 w-25'/>

                </div>
                <div>
                    <img src={img3} className='h-25 w-25'/>

                </div>

            </Carousel>
    </div>
  )
}

export default Roottask