import { useState } from 'react'
import ViteParrafo from './ViteParrafo.jsx'

export default function ViteCounter() {
    const [contador, contar] = useState(0)
    return(
        <div>
            <button onClick={() => contar((contador) => contador + 1 )}> Total : {contador}</button>
            <ViteParrafo />
        </div>
    )
}