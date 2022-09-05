const { INCREMENTO, DECREMENTO } = require('../action-types');

const initialState = {
  contador: 0
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

function contador(state = initialState, action) {
  console.log('accion',action);
  switch (action.type) {
    case INCREMENTO:
      return { contador: state.contador + 1 }
    case 'INCREMENTO_IMPAR':
      console.log('entre a reducer a incrementar IMPAR', state.contador)
      if ( state.contador % 2 !== 0 ) {
        return { contador: state.contador + 1 }
      } else return state
    case DECREMENTO:
      return { contador: state.contador - 1 }
    default:
      return state;
  }
  
}

module.exports = contador;