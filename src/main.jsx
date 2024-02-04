import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Search from "./pages/search.jsx"
import Homie from "./pages/homie.jsx"
import Movie from "./pages/movie.jsx"
import { Route,Routes,BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<BrowserRouter>
 <Routes>

<Route element={<App/>}>
<Route path={"/"} element={<Homie/>}/>
<Route path={"Movie/:id"} element={<Movie/>}/>
<Route path={"Search"} element={<Search/>}/>
</Route>

</Routes>


</BrowserRouter>
  
</React.StrictMode>

)
