import React, { useState } from 'react'
import './datalay.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

const Whether = () => {
const[temp,settemp]=useState([])
const[search,setsearch]=useState('')

const handlechange=(event)=>{
    setsearch(event.target.value)
};

    const api=async(event)=>{
          event.preventDefault()
        try{
            let response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&appid=0cf3d05c6cb443424f42856d18e090b3`)
        settemp(response.data)
        }
        catch(error){
            console.log("error",error);
            alert('city not found')
        }
    }  
    console.log(temp);

   
     

  return (
    
    <div className='body '>
      <div className='box'>
        <form onSubmit={api} >
        <input onChange={handlechange} type="text" placeholder='Search places' className='bg-light text-dark bg-opacity-10'/>
        <button type='submit'>search</button>
        </form>
        {temp && (
        <div>
            
                <div >
                    {temp.name&&<h1>city:{temp.name}</h1>}

                    {temp.main&&<h2>temperature:{temp?.main?.temp}</h2>}
                    <h2>{temp?.sys?.country}</h2>
                    <h2>{temp?.wind?.speed}</h2>
                    {temp.weather?.map((item, index) => (
            <div key={index}>
              <p>Condition: {item.main}</p>
              <p>Description: {item.description}</p>
             
            </div>
          ))}
                </div>
         
        </div>
        
        )} 
      </div> 
    </div>
   
    
  )
}

export default Whether