import React, { useState } from 'react'
import Langcon from './Langcon'

const Langprov = ({children}) => {
    const[lang,setlang]=useState('hi')

    let langchange=()=>{
        setlang(lang=='hi'?'ഹായ്':'hi')
    }
  return (
    <div>
        <Langcon.Provider value={{lang,langchange}}>
            {children}
        </Langcon.Provider>
    </div>
  )
}

export default Langprov