import React, { useState } from 'react'
import axios from 'axios'
const Users = () => {
    const[data,setdata]=useState([])

    const api=async ()=>{
        let response=await axios.get("https://jsonplaceholder.typicode.com/posts");
        setdata(response.data)
    }
    console.log(data);
    
    
  return (
    <div>
        <button onClick={api}>click</button>
        {data.map((item,index)=>(
                <div key={index}>
                    <p>{item.id}</p>
                    <p>{item.title}</p>
                </div>
        ))
        }
    </div>
  )
}

export default Users