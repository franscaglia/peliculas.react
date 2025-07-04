import React from 'react'

const Buscar = ({buscarTerm, setBuscarTerm}) => {
    return(
        <div className='search'>
            <div>
                <img src="search.svg" alt="search"/>
                <input type="text"
                    placeholder='Busca peliculas de argentina' 
                    value={buscarTerm} 
                    onChange={(evento) => setBuscarTerm(evento.target.value)}/> 
            </div>
        </div>
    )
}

export default Buscar