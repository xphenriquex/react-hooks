import './App.css';
import { createContext, useState, useContext } from 'react';

const globalState = {
  title: 'O título que está no contexto',
  body: 'O body do contexto',
  counter: 0
};

const GlobaContext = createContext();

const Div = ({ children }) => {
  return (
    <>
      <H1 />
      <P />
    </>
  )
}

const H1 = () => {
  const theContext = useContext(GlobaContext);
  const { contextState: { title, counter } } = theContext;
  return <h1>{title} {counter}</h1>
}

const P = () => {
  const theContext = useContext(GlobaContext);
  const {
    contextState: { body },
    setContextState,
  } = theContext;
  return <p onClick={() => setContextState((s) => ({ ...s, counter: s.counter + 1 }))}>{body}</p>
}

function App() {
  const [contextState, setContextState] = useState(globalState);

  return (
    <GlobaContext.Provider value={{ contextState, setContextState }}>
      <Div />
    </GlobaContext.Provider>
  );
}

export default App;
