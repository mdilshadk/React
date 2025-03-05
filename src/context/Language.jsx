import React, { useContext } from 'react'
import Langcon from './Langcon'

const Language = () => {
    let value=useContext(Langcon)
    console.log(value);
    
  return (
    <div>
        <h1>{value.lang=='hi'?'ഹായ്':'hi'}</h1>
        <button onClick={value.langchange}>click</button>
    </div>
  )
}

export default Language