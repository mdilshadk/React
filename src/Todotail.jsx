import React, { useState } from 'react'

const Todotail = () => {
    const [data, setData] = useState([]); 
  const [inp, setInp] = useState(""); 
  const[edit,setedit]=useState(null)
  
  const inputb = (event) => {
    setInp(event.target.value);
  };
  const deletb=(index)=>{
    const remov=data.filter((item,i)=>i !==index);
    setData(remov);
  }
  const editb=(index)=>{
    setInp(data[index]);
    setedit(index);
    
  }
  
  const submit = (event) => {
    event.preventDefault();
    if (inp.trim() === "") return; 

    if(edit!==null){
      const update=[...data];
      update[edit]=inp;
      setData(update)
      setedit(null)
    }else{
      setData([...data, inp]);
    }
    
    setInp(""); 
  };
  return (
    <div className="bg-blue-500 h-screen w-screen p-28">
    <div className="bg-white w-8/12 h-[600px] text-center ml-48 rounded-xl drop-shadow-xl">
      
      <form onSubmit={submit} >
        <input 
         onChange={inputb}
          value={inp}
          className="h-9 w-72 mt-10 border  bg-blue-300 text-white text-center rounded-full border-b-blue-50 drop-shadow-lg"
          type="text"
          placeholder="Enter Task"
          name="task"
        />
        <h3 className="text-lg text-blue-500 underline mt-7"><b>Tasks</b></h3>
      </form>
      

      <div className="mt-4 ml-20">
        
        <table>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} >
                <td className=" bg-white drop-shadow-lg p-2 mt-3">
                  <div  className="flex justify-between items-center w-[700px] h-11">
                  {item} <div>
                  <button className="bg-green-400 text-white p-2 rounded" onClick={()=>editb(index)}>edit</button>

                  < button className="bg-red-500 text-white p-2 rounded hover:bg-red-700" onClick={()=>deletb(index)}>Delete</button></div>
                  </div> 
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

export default Todotail