import React from 'react'
import { FaStar } from 'react-icons/fa6';

const Maparr = () => {
    let arr=[{Name:"john",Age:20,Place:"london"},
        {Name:"joy",Age:19,Place:"london"}
    ];
  return (
  <div>{
      
    arr.map((item,index)=>(
    <div style={{ backgroundColor: "green"}} key={index}>
        <h2>{item.Name}</h2>
        <h2>{item.Age}</h2>
        <h2>{item.Place}</h2>
        <div><FaStar size={38}  style={{color:"red"}}/></div>
    </div>
    ))
    }</div>
  )
}

export default Maparr