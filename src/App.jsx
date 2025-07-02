import './App.css'

import ViteFotos from './viteComponents/ViteFotos.jsx'
import ViteCounter from './viteComponents/ViteCounter.jsx'
import ViteMensaje from './viteComponents/ViteMensaje.jsx'
import ViteH1 from './viteComponents/ViteH1.jsx'
import Card from './franComponents/Card.jsx'

function App() {
  return (
    <>
      <Card title="Tony Montana"/>
      <Card title="Scarface"/>

      <ViteFotos/>
      <ViteH1/>
      <ViteCounter/>     
      <ViteMensaje/>
    </>
  )
}

export default App
