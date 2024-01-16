import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux'

import simpsonsReduxStore from './redux/simpsons-redux'
import * as RB from 'react-bootstrap'
import { ListaPersonajesSimpsons } from './containers/ListaPersonajesSimpsons';

function App() {
  return (
    <Provider store={simpsonsReduxStore}>
      <RB.Container>
        <ListaPersonajesSimpsons />
      </RB.Container>
    </Provider>
  );
}

export default App;

