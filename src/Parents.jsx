import React from 'react'
import Childs from './Childs'
import img1 from './16pro.png'
import img2 from './airpod.jpg'
import img3 from './boy.jpg'
import './Parents.css'
function Parents() {
  return (
    <div>
    <div className='fc'>
    <Childs  image={img1} name="adam johnson" role="developer" ></Childs>
    <Childs image={img2} name="linda larson" role="manager" ></Childs>
    <Childs image={img3} name="marry hudson" role="designer" ></Childs>
    </div>
    <div className='lc'>
    <Childs  image={img1} name="nina hdson" role="designer" ></Childs>
    <Childs image={img2} name="margo larson" role="manager" ></Childs>
    <Childs image={img3} name="nicole scavo" role="designer" ></Childs>
    </div>
    </div>
  )
}


export default Parents