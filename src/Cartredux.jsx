import React from 'react'
import c1 from './NIKE.png'
import c2 from './airpod.jpg'
import c3 from './hublot.png'
import c4 from './16pro.png'
import { data, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addcart } from './Counterslice'
import { MdNestCamWiredStand } from 'react-icons/md'

const Cartredux = () => {
    const obj=[{id:1,prod:c1,Name:"nikeshoe"},
        {id:2,prod:c2,Name:"airpod"},
        {id:3,prod:c3,Name:"watch"},
        {id:4,prod:c4,Name:"iphone"}
    
    ]
    const cart=useSelector((state)=>state.counter.data);
    
    const dispatch=useDispatch()
    console.log(cart);
    
  return (
    
        <div  className=' d-flex gap-4 ' >
             {obj.map((items)=>(
                 <div className='border border-black p-3'>
                 <img className='cs' src={items.prod} alt="" />
                 <h3>{items.Name}</h3>
                 <button className='bg-warning  p-2' onClick={()=>dispatch(addcart({id:items.id,prod:items.prod,name:items.Name}))}>add to cart</button>
               </div>
             ))}
      <Link to='/cart'><p>cart</p></Link>  
           
          
    </div>
    
  )
}

export default Cartredux