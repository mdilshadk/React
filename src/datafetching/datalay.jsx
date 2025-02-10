
import React, { useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';


const Datalay = () => {
  const[data,setdata]=useState([])

  const api=async()=>{
    let info=await axios.get("https://jsonplaceholder.typicode.com/todos");
    setdata(info.data)
  }
  console.log(data);
  
  return (
    <div>
    <button onClick={api}>click</button>
     
      <table class="table w-75 border border-dark ms-5">
       <thead>
         <tr className='table-info'>
           <th scope="col">userid</th>
           <th scope="col">id</th>

           <th scope="col">title</th>
           <th scope="col">completed</th>
         </tr>
       </thead>
       {data.map((item,index)=>(
          <tbody>
            <tr className='border border-dark'>
              <th scope="row">{item.userId}</th>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.completed.toString()}</td>
            </tr>
          </tbody>
        ))}
      </table>
  
      
    </div>
  )
}

export default Datalay