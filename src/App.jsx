import React from 'react'
import {useEffect, useState } from 'react'

import  Buscar  from './components/Buscar.jsx'

const TMDB_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.TMDB_API_KEY
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}


const App = () => {
  
  const [buscarTerm, setBuscarTerm] = useState('')
  const [mensajeError, setMensajeError] = useState('')
  const fetchMovies = async () => {
    try{ 

    }catch(error){
      console.log(` -- error intentado buscar las peliculas ${error}`)
      setMensajeError(` -- error buscando peliculas .. . ${error}`)
    }
  }

  return(
    <main>
      <div>
        <div className='pattern'/>
        <div className='wrapper'>
          <header>
            <img src="./pelis-arg.png" alt="heroe papaa" />
            <h1>Encontra las <span className='text-gradient'>peliculas Argentinas</span> en The Movie Database </h1>
            <Buscar buscarTerm={buscarTerm} setBuscarTerm={setBuscarTerm}/>
          </header>


        </div>

      </div>
    </main>    
  )
}


export default App