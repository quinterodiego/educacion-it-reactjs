import 'bootstrap/dist/css/bootstrap.css'
import * as RB from 'react-bootstrap'

export const Carta = ({ titulo, subtitulo, imagen, texto, accion, onAccion }) => {
  return (
    <RB.Card className='w-100'>
      <RB.CardImg src={imagen} className='w-50'/>
      <RB.CardBody>
        <h3>{titulo}</h3>
        <RB.CardTitle className='text-muted'>{subtitulo}</RB.CardTitle>
        <RB.CardText>{texto}</RB.CardText>
      </RB.CardBody>
      <RB.CardFooter>
        <RB.Button variant='primary' onClick={() => onAccion()}>
          {accion}
        </RB.Button>  
      </RB.CardFooter>    
    </RB.Card>
  )
}