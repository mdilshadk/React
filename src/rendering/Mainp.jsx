import React from 'react'
import Adminp from './Adminp';
import Userp from './Userp';
import Guest from './Guest';


const Mainp = ({role}) => {
   
  return (
    <div>
        {role ==='admin' && <Adminp></Adminp>}
        {role ==='user' && <Userp></Userp>}
        {role ==='guest' && <Guest></Guest>}
    </div>
  )
}

export default Mainp
