import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <p>Bienvenidos al Curso de Ract JS en Educación IT!</p>
        <img src="img/coca-cola.webp" alt="" width={180}/>
    </div>
  )
}

export default App
