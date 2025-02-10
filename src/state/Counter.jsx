import React, { useState } from 'react'
import { data } from 'react-router-dom';

const Counter = () => {
    const[Data,setData]= useState(0);
    
    let incriment=()=>{
        setData(Data+1)}
    let decriment=()=>{
        
        if(Data===0){
            setData(Data-0);
        }
        else{
            setData(Data-1);
        }
        

    }
  return (
    <div>
        <h2>{Data}</h2>
        <button onClick={incriment}>incriment</button>
        <button onClick={decriment}>decriment</button>
    </div>
  )
}

export default Counter