import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Movieadd = () => {
  const[data,setData]=useState('');
  const{id}=useParams()
  console.log(id);
  
  useEffect(()=>{
    let fetchdata=async()=>{
      let response=await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=a5ef1268`);
      console.log(response);
      setData(response.data);
      
    }
    fetchdata()
  },[])
  console.log(data);
  
  return (
    <div>
      <img src={data.Poster} alt="" />
      <h1>{data.Title}</h1>
    </div>
      
  
  )
}

export default Movieadd