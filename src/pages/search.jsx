import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Cards from '../components/cards'

const searchURl = import.meta.env.VITE_SEARCH
const keyURL = import.meta.env.VITE_API_KEY
  
function Search() {
console.log(searchURl,keyURL)
    const [searchparams] = useSearchParams()
const query = searchparams.get("q")
 
const [filme,setfilme]=useState(0)
 
const searchfunção=async(url)=>{
const valores = await fetch(url)
const data =  await valores.json()
setfilme(data.results)
} 
useEffect(()=>{
const searchmontado = `${searchURl}?${keyURL}&query=${query}`
searchfunção(searchmontado)
},[query])     
     
  
return ( 
<div className="max">
<h2>Resultado para <span>{query}</span></h2>

<div className='search' >


{filme.length===0 && <p>Carregando...</p>}
{filme.length>0 && filme.map((filmes)=><Cards filmes={filmes} key={filmes.id}/>) 


  
}








</div>
</div>
  )
}

export default Search