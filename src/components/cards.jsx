import React from 'react'
import "./cards.css"
import { Link } from 'react-router-dom'
const keyURL = import.meta.env.VITE_API_KEY
const imgURL = import.meta.env.VITE_IMG
import { FaStar } from "react-icons/fa";


import Movie from '../pages/movie'


function Cards({filmes, showlink=true}) {
return (
<div className='cards' >
<div className="card">
<img src={`${imgURL}${filmes.poster_path}`}/>
<p className='voto' ><FaStar className='star' />
{filmes.vote_average}</p>
{showlink && <Link className='link' to={`/Movie/${filmes.id}`} >Detalhes </Link>
}


<h4>{filmes.title}</h4>

</div>



 



    </div>
  )
}

export default Cards