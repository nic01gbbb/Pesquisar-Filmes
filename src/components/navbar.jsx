import React, { useState } from 'react'
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'; 
import "./navbar.css"
import Search from '../pages/search';
const Navbar = () => {
const navigator = useNavigate()

const [search,setsearch]=useState("")
const [filme,setfilme]=useState(0) 

const handleclick=async(e)=>{
e.preventDefault()
navigator(`/Search?q=${search}`)
setsearch("")
}





 
 
  return (
    <nav>
    <h2>
    <BiSolidCameraMovie />Movies lib</h2>
    <form onSubmit={handleclick}>
  <input 
  value={search}
  onChange={(e)=>setsearch(e.target.value)}
  type="text" placeholder='Buscar filmes' />
  <button>
  <FaSearch />


  </button>


    </form>

    
    </nav>
  )
}

export default Navbar
