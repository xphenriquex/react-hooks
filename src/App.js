import './App.css';
import { Div } from './components/Div';
import { AppContext } from './context/AppContext';

function App() {
  return (
  <AppContext>
    <Div />
  </AppContext>
  );
}

export default App;
