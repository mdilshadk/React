import React from 'react'
import img from './boy.jpg'

const Body = () => {
  return (
    <div className='mainb'>
        <div>
            <img src={img} alt="" />
        </div>
        <div className='box' >
            <label htmlFor="">Enter Name</label><br />
            <input type="text" /><br /><br />
            <label htmlFor="">Enter Password</label><br />
            <input type="text" /><br /><br />
            <button>Submit</button>
        </div>
    </div>
  )
}

export default Body