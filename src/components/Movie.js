import React from 'react'
import '../App.css'
const Movie = (props) => {
  return (
    <div className='movieComponent'>
        <img src={props.image} className='movieImage'></img>
        <h2 className='movieTitle'>{props.title}</h2>
        <h4 className='movieYear'>{props.year}</h4>
    </div>
  )
}

export default Movie