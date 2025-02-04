import React from 'react'

const Childs = (props) => {
  return (
    <div className='cols'>
        <img className='imgs' src={props.image} alt="" />
        <h2>{props.name}</h2>
        <h5>{props.role}</h5>
    </div>
  )
}

export default Childs