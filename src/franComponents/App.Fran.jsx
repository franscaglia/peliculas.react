import './App.css'

//vite
import ViteFotos from './viteComponents/ViteFotos.jsx'
import ViteCounter from './viteComponents/ViteCounter.jsx'
import ViteMensaje from './viteComponents/ViteMensaje.jsx'
import ViteH1 from './viteComponents/ViteH1.jsx'

import Card from './franComponents/Card.jsx'

function App() {
  
  return (
    <div className="card-container">
      <Card title="Michigan"/>
      <Card title="Capablanca"/>
      <Card title="okupas"/>
    </div>
  )
}

export default App
