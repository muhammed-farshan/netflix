import React, { useEffect, useState } from 'react'
import instance from '../instance'
import './Row.css'
function Row({title, fetchurl}) {
  console.log("title")
  console.log(title)
console.log(fetchurl)
const image_base_url ="https://image.tmdb.org/t/p/original/"
const [allmovies,setAllmovies] = useState()
const fetchData = async ()=>{
  const response = await instance.get(fetchurl)
  console.log("api response");
  console.log(response);
  setAllmovies(response.data.results)
  }

  useEffect(()=>{
    fetchData()
  },[])
  
  return (
    <>
        <div className='row pt-3 ps-2'>
        <h3 style={{color:'red'}}>{title}</h3>
        <div className='movie_row'>
          {        
          allmovies?.map(item=>(
            <img className='movies' src={`${image_base_url}${item?.poster_path}`} alt=""  />
           ))
          }        
          </div>
        </div>
    </> 
  )
}

export default Row