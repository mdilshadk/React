import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Loginf.css'
import toast, { Toaster } from 'react-hot-toast'

const Loginf = () => {
    const[data,setData]=useState([])

    const handlechange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const handlesubmit=(event)=>{
        event.preventDefault();
        setData(data)
        console.log(data);
        toast.success("Login Successfully")
    }

  return (
    <div >
        <div className='boxl rounded-4 shadow-lg'>
            <h3 className='text-center p-3'>Login</h3>
            <form action="" onSubmit={handlesubmit} className='in'>
                <label htmlFor="" className='mt-5'>Email</label><br />
                <input type="email" placeholder='Enter your Email' onChange={handlechange} name='email' className='inp rounded-4 shadow border border-1 p-1'/><br /><br />
                <label htmlFor="">Password</label><br />
                <input type="password" placeholder='Enter your Password' onChange={handlechange} name='password' className='inp rounded-4 shadow border border-1 p-1'/><br /><br />
                <button className='sub rounded-3 text-light  border border-0'><b>Submit</b></button>
                 <Toaster />
            </form>
        </div>
    </div>
  )
}

export default Loginf