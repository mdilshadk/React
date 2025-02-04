import React from 'react'
import { FaStar } from "react-icons/fa6";
import img1 from './NIKE.png'
import img2 from './airpod.jpg'
import img3 from './hublot.png'
import img4 from './16pro.png'
import './market.css'
import { FaStarHalfAlt } from "react-icons/fa";

const Market = () => {
    let prod=[{product:img1,name:"NIKE",model:"SB Dunk",price:"$9999"},
        {product:img2,name:"APPLE",model:"Airpod",price:"$999"},
        {product:img3,name:"HUBLOT",model:"GENEVE",price:"$19999"},
        {product:img4,name:"APPLE",model:"16pro Max",price:"$139999"},
    ]
  return (
    <div>
        <div className='navi'><h1>PREMIUM STORE</h1></div>
    <div  className='itm' >{
        prod.map((item,index)=>(
            
            <div className='itms' key={index}>
                <img src={item.product} alt="" height={"200px"} width={"200px"}/>
                <h3>{item.name}</h3>
                <p>{item.model}</p>
                <h3>{item.price}</h3>
                <div className='star'><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
                <h2 className='buy' style={{backgroundColor: index % 2 === 0 ? "aqua":"orange"}}>Buy</h2>
            </div>
          
        ))
     } 
     </div>
     </div>
  )
  
}

export default Market