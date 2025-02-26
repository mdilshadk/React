import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'


const Forms = () => {
    const[data,setData]=useState([])

    const handlechange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const handlesubmit=(event)=>{
        event.preventDefault();
        setData(data)
        console.log(data);
        toast.success("success")
        
    }
  return (
    <div>
        <form onSubmit={handlesubmit}>
            <label >name : </label>
            <input type="text" onChange={handlechange} name='name'/><br /><br />
            <label >email : </label>
            <input type="email" onChange={handlechange}  name='email'/><br /><br />
            <label >age : </label>
            <input type="number" onChange={handlechange}  name='age'/><br /><br />
            <button>submit</button>
            <Toaster />
        </form>
    </div>
  )
}

export default Forms