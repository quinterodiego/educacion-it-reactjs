import './App.css'
import { Contenido } from './Contenido'
import { Encabezado } from './Encabezado'
import { Producto } from './Producto'

function App() {

  const cocaCola = {
    id: 1,
    nombre: 'Coca Cola',
    tipo: 'Original',
    precio: 900,
    imagen: 'https://lavaquita.co/cdn/shop/products/supermercados_la_vaquita_supervaquita_gaseosa_coca_cola_10_oz_bebidas_liquidas_700x700.jpg?v=1620489361'
  }

  return (
    <div className='container my-5'>
      <div className="row mb-5 text-center">
        <h1><Encabezado /></h1>
      </div>
      <div className="row ">
        <div className="col-md-8">
          <Contenido producto={cocaCola} />
        </div>
        <div className="col-md-4">
          <Producto />
        </div>
      </div>
    </div>
  )
}

export default App
