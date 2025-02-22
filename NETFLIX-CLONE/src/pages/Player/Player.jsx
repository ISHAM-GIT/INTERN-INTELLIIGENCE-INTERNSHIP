import React, { useEffect, useState } from 'react'
import './Player.css'
import back_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const{id}=useParams();

  const navigate=useNavigate();

  const [apiData,setApiData]=useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""

  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODdkODgwZTk4ZDQyOGRhZWQxN2Y4ZDVlYzcyZjFiNCIsIm5iZiI6MTczOTg4NzIwMi4wNzgsInN1YiI6IjY3YjQ5MjYyYjMwODM3ZDhmOGUwZDU1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zhrDA7Eee4w-f8ZYf_qsKoSr1la_Op14IzW48yGXIpw'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      // .then(res => console.log(res))
      .then(res => setApiData(res.results[0]))
      .catch(err => console.error(err));
  },[])


  return (
    <div className='player'>
      <img src={back_icon} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe allowFullScreen width='250%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameborder="0">
      </iframe>
      <div className="player-info">
        <p> {apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
