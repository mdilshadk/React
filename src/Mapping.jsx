import React from 'react'
import { Link } from 'react-router-dom';

const Mapping = () => {
    let obj={Name:"john",Age:20,Place:"london"};
  return (
    
       
        <div >
            <h2>{obj.Name}</h2>
            <h2>{obj.Age}</h2>
            <h2>{obj.Place}</h2>
         <Link to="/a"><button>go to</button></Link>   
        </div>
       )
       
  
}

export default Mapping