import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const Darkmode = () => {

const[Color,setColor]=useState(true)

    const Dark=()=>{
        setColor(!Color)
    }
    console.log(Color);

  return (
    <div>
        <div style={{height:'300px',width:'300px',backgroundColor:Color ? 'blue':'green'}}></div>
        <button onClick={Dark}>change</button>
    </div>
  )
}

export default Darkmode