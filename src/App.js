import { useReducer } from 'react';
import './App.css';

export const globalState = {
  title: 'O título que está no contexto',
  body: 'O body do contexto',
  counter: 0
};

const reducer = (state, action) => {
  switch(action.type) {
    case 'muda':
      console.log('Chamou muda com', action.payload)
      return { ...state, title: action.payload };

    case 'inverter':
      console.log('Chamou inverter')
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };

    default:
      return {...state };
  }
};

function App() {
  const [state, dipatch] = useReducer(reducer, globalState);
  const { title } = state;

  return (
    <div>
      <h1>{title}</h1>
      <button
        onClick={() =>
          dipatch({
            type: 'muda',
            payload: new Date().toLocaleString('pt-br')
          })
        }
      >
        Click
      </button>
      <button onClick={() => dipatch({ type: 'inverter' })}>Inverter</button>
    </div>
  );
}

export default App;
