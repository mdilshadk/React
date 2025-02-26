import axios from 'axios';
import React, { useState } from 'react'
import './Movie.css'
import { Link } from 'react-router-dom';
import { MdMovie } from "react-icons/md";
import { CiSearch } from "react-icons/ci";


const Movie = () => {
    const[data,setData]=useState([]);
    const[search,setsearch]=useState('');

const handlechange=(event)=>{
    setsearch(event.target.value)
};
    const api=async(event)=>{
        event.preventDefault()
        try{
        let cinima=await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=a5ef1268`);
        setData(cinima.data.Search);
        }
        catch(error){
            console.log("error",error);
            alert('movie not found');
        }
    }

    console.log(data);
    
  return (
    <div className='home'>
        <div className='navi d-flex justify-content-around '>
            <h3 className=' mt-2 lead'><MdMovie /><b> MOVIE</b>details</h3>
            <button className=' rounded-2 border border-2 p-1 mt-2 bg-light border-black  shadow-sm'>sign in</button>
        </div>
            <div className='text-center mt-5 '>
            <input className='p-2  rounded-start-pill border border-black border-3 shadow-sm border-end-0'  onChange={handlechange} type="text" placeholder='Search movies' />
            <button className='p-2 bg-light rounded-end-pill border border-black border-3 text-black shadow-sm border-start-0' type='submit'onClick={api}><CiSearch /></button>
            </div>
        {data.length>0 &&(
        <div className='mvs d-flex gap-4 mt-5 ms-4'>{
            data.map((item,index)=>(
           <Link to={`/movieadd/${item.imdbID}`}> <div className='click text-dark shadow'  key={index}>
                <img className='poster' src={item.Poster} alt="" />
                <p><b>{item.Title}</b></p>
                <p>{item.Year}</p>
            </div>
            
            </Link>
            
            ))
        }</div>
    )}
    </div>
  )
}

export default Movie