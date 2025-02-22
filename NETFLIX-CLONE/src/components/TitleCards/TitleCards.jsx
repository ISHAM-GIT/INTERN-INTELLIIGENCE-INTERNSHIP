import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'

const TitleCards = ({ title, category }) => {


  const [apiData,setApiData]=useState([])

  const cardsRef = useRef()

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODdkODgwZTk4ZDQyOGRhZWQxN2Y4ZDVlYzcyZjFiNCIsIm5iZiI6MTczOTg4NzIwMi4wNzgsInN1YiI6IjY3YjQ5MjYyYjMwODM3ZDhmOGUwZDU1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zhrDA7Eee4w-f8ZYf_qsKoSr1la_Op14IzW48yGXIpw'
    }
  };


  const handleWheel = (event) => {
    event.preventDefault;
    cardsRef.current.scrollLeft += deltay;
  }
  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    // .then(res => console.log(res))
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));


    cardsRef.current.addEventListener('wheel', handleWheel);
  },[])

  return (
    <div className='titlecards'>
      <h2>{title?title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {/* {cards_data.map((card, index) => { */}
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={'https://image.tmdb.org/t/p/w500'+card.backdrop_path} alt="" />
            {/* <img src={card.image} alt="" /> */}
            {/* <p>{card.name}</p> */}
            <p>{card.original_title}</p> 
          </Link>
        })}
      </div>
      {/* <cards_data/> */}
    </div>
  )
}

export default TitleCards
