import React from 'react'
import img from './empty.png'
import { FaAmazon } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { minus, plus } from './Counterslice';
const Cartp = () => {
   const cart=useSelector((state)=>state.counter.data);
   const dispatch=useDispatch();
  return (
    <div>
        <div className='navi d-flex justify-content-between bg-black bg-gradient text-light p-3 '>
          <div className='d-flex gap-1 ms-2'>
            <h4 className='text-warning'><FaAmazon /></h4>
            <Link to='/Amason' className='text-decoration-none text-light'><h4>amason.in</h4></Link>
          </div>
          
        <div className='d-flex'>
          <select name="" id="" className='all rounded-start-3 text-black' >
              <option value="">All</option>
              <option value="">Alexa Skills</option>
              <option value="">Amason Devices</option>
              <option value="">Amason Fashion</option>
              </select>
          <input className='search' type="text" placeholder='Search amason.in'/>
          <button className='icn bg-warning rounded-end-3'><FaSearch /></button>
        </div>
        <div className='d-flex gap-4 me-2'>
          <Link to='/login' className='text-decoration-none text-light'><h5 >Login</h5></Link>
          <Link to='/login' className='text-decoration-none text-light'><h5>Orders</h5></Link>
          <Link to='/cart' className='text-decoration-none text-warning'><h5 ><FaShoppingCart /></h5></Link>
        </div>
      </div>
      <div>
        {cart.map((items)=>(
          <div className='d-flex p-3 gap-4'>
            <img className='w-16' src={items.prod} alt="" />
            <h2>{items.name}</h2>
            <button className='text-[25px]' onClick={()=>dispatch(plus(items.id))}>+</button>
            <h2>{items.quantity}</h2>
            <button className='text-[25px]' onClick={()=>dispatch(minus(items.id))}>-</button>
          </div>
        ))}
        
      </div>
        
    </div>
  )
}

export default Cartp