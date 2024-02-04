import "./movie.css"
const movieURL = import.meta.env.VITE_API
const keyUrl= import.meta.env.VITE_API_KEY
const imgURL = import.meta.env.VITE_IMG
import { MdOutlineTimer } from "react-icons/md";
import { MdOutlineDescription } from "react-icons/md";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { FaCashRegister } from "react-icons/fa";


import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'


const Movie = () => {







const timeisnow=(n)=>{
if(n<60 ){
return n + " segundos"
}
else if(n<120){
n= n -60
return "1 hora e " + n + " minutos"
}

else if(n<180){
return "2 horas e " + n-120 + " minutos"
}

else if(n<240){
n= n-180
return "3 horas e " + n + " minutos"
}

else if(n<300){
n = n-240
return "4 horas e " + n + " minutos"
} 

else if(n<360){
n= n-300
return "5 horas e " + n + " minutos"
}

}


const [filme,setfilme]=useState(0)
const {id} = useParams()
   
const movieon =async(url)=>{
const valores = await fetch(url)
const data = await valores.json()
setfilme(data)
}
useEffect(()=>{
const moviemontado = `${movieURL}${id}?${keyUrl}`
movieon(moviemontado)
},[])




return ( 
<div className='movie' >
{filme && <img src={`${imgURL}${filme.poster_path}`}/>}
<div className="conteudo">
{filme && <h2 className="a" >{filme.title}</h2>}
{filme && <p className="b" >
<FaCashRegister /> Budget: {filme.budget.toLocaleString("en-us",{style:"currency",currency:"USD"})
}</p>}
{filme && <p className="c" >
<FaMoneyBill1Wave /> Revanue: {filme.revenue.toLocaleString("en-us",{style:"currency",currency:"USD"})
}</p>}
{filme && <p className="d" ><MdOutlineTimer /> Runtime: { filme.runtime} Minutos</p>}
{filme && <p className="e" ><MdOutlineDescription /> Overview: {filme.overview}</p>}


</div>
</div>
  )
}

export default Movie
