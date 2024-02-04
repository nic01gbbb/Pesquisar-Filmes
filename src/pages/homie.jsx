import React, { useEffect, useState } from 'react'
import "./homie.css"
import  Cards from "../components/cards"

const muralAPP = import.meta.env.VITE_API
const keyURL = import.meta.env.VITE_API_KEY

const Homie = () => {
const [filmes,setfilmes]=useState(0)


const showmovies = async (url)=>{

const valores = await fetch(url)
const data = await valores.json()
setfilmes(data.results)
} 
 
useEffect(()=>{
const urlmontada = `${muralAPP}top_rated?${keyURL}`
showmovies(urlmontada)
},[])
   


 
return (

<div className="max">
<h1>Melhores filmes</h1>
<div className='Homie'  >

{filmes.length===0 && <p>Carregando...</p>}
{filmes.length>0 && 
filmes.map((filme)=><Cards key={filme.id} filmes={filme}/>)}
</div>
 </div>
  )
}

export default Homie
