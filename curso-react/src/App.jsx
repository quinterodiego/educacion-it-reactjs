import './App.css'
import { Contenido } from './Contenido'
import { Encabezado } from './Encabezado'
import { Producto } from './Imagen'

function App() {

  return (
    <div className='container my-5'>
      <div className="row mb-5 text-center">
        <h1><Encabezado /></h1>
      </div>
      <div className="row ">
        <div className="col-md-8">
          <Contenido producto={'Coca Cola '} tipo={'Light'} tamanio={'2.25 lts'} precio={900} />
        </div>
        <div className="col-md-4">
          <Producto />
        </div>
      </div>
    </div>
  )
}

export default App
