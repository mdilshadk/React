import React, { useContext } from 'react'
import Themecontext from './Themecontext'

const Axesscontext = () => {
    let value=useContext(Themecontext)
    console.log(value);
    
  return (
    <div className={value.theme=='light'?'dark':'light'}>
        <button onClick={value.toggletheme}>click</button>
    </div>
  )
}

export default Axesscontext