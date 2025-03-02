import React, { useEffect, useState } from 'react'
import instance from '../instance'
import './Banner.css'
function Banner({fetchurl}) {
  console.log(fetchurl)
    const image_base_url ="https://image.tmdb.org/t/p/original/"
    const [movies,setMovies] = useState({})
    const fetchData = async () => {
    const {data} = await instance.get(fetchurl)

      // console.log("Api result");
      // console.log("result length")
      const res = data.results[Math.floor(data.results.length*Math.random())]
     
   setMovies(res)
  }
  // use Effect
  useEffect(() => {
      // setInterval(()=>{
        fetchData()
      // },4000)
  }, [])
  console.log(movies);
  
  return (
<>
        <div style={{backgroundImage:`url(${image_base_url}${movies?.backdrop_path})`,height:'600px',backgroundSize:'cover',backgroundAttachment:'fixed'}}>
            <div className='banner_content'>
                <h2 style={{color:'red'}}>{movies?.name}</h2>
                <button className='btn btn-danger'>Play <i className="fa-solid fa-play ms-2"></i></button>
                <button className='btn btn-outline-light ms-5'>MORE INFO <i class="fa-solid fa-caret-down"></i></button>
                <h5 className='pt-3' style={{color:'white'}}>{movies?.overview?.slice(0,200)}...</h5>
            </div>
        </div>
</> 
 )
}

export default Banner