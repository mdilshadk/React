import React, { use, useState } from 'react'
import './datalay.css'
import axios from 'axios'
const Whether = () => {
const[temp,settemp]=useState(null)
const[search,setsearch]=useState('')


    const api=async()=>{
        let response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&appid=0cf3d05c6cb443424f42856d18e090b3`);
        settemp(response.data)
    }  
    console.log(temp);
     

  return (
    <div className='body w-100 h-100'>
        <input type="text" placeholder='Search places'/>
    </div>
  )
}

export default Whether