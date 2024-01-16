import { useSelector } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css'
import * as RB from 'react-bootstrap'
import { Carta } from '../components/Carta';

export const ListaPersonajesSimpsons = () => {

  const personajes = useSelector(store => store.personajes)

  return (
    <RB.Row>
      <RB.Col sm={6}>
        {
          personajes.map(p => (
            <Carta titulo={p.Nombre} subtitulo={p.Ocupacion} texto={p.Historia} accion={'Ver más'} imagen={p.Imagen}/>
          ))
        }
      </RB.Col>
    </RB.Row>
  )
}
