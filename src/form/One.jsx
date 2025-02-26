import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';


const One = () => {
const[data,setData]=useState([])
// const notify = () => toast('Here is your toast.');


const handlechange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
}

const handlesubmit=(event)=>{
    event.preventDefault()
    setData(data)
    console.log(data);
    // toast.success("submitted successfully")
    toast.error("jjjj")
    
}


  return (
    <div>
        
        <form onSubmit={handlesubmit}>
            <label htmlFor="">name</label>
            <input type="text" onChange={handlechange} name='name'/>
            <label htmlFor="">email</label>
            <input type="email" onChange={handlechange}  name='email' />
            <label htmlFor="">age</label>
            <input type="number" onChange={handlechange}  name='age'/>
<button>submit</button>
{/* <button onClick={notify}>Make me a toast</button>
<Toaster /> */}
        </form>
    </div>
  )
}

export default One