import React from 'react'
import { useState } from 'react'
import  Buscar  from './components/Buscar.jsx'

const App = () => {
  const [buscarTerm, setBuscarTerm] = useState('')
  return(
    <main>
      <div>
        <div className='pattern'/>
        <div className='wrapper'>
          <header>
            <img src="./pelis-arg.png" alt="heroe papaa" />
            <h1>Encontra las <span className='text-gradient'>peliculas</span> Argentinas en The Movie Database </h1>
          </header>

          <Buscar/>
        </div>

      </div>
    </main>    
  )
}


export default App