import React, { Suspense, useState } from 'react';
// import LazyComponent from './lazy-component';

const loadComponent = () => {
  console.log('Componente carregando...');
  return import('./lazy-component');
};

//lazy loading
// const LazyComponent = React.lazy(() => import('./lazy-component'));

//eager loading
const LazyComponent = React.lazy(loadComponent);

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <p>
        <button onMouseOver={loadComponent} onClick={() => setShow((s) => !s)}>
          Show {show ? 'LC on screen' : 'LC is off screen'}
        </button>
      </p>
      <Suspense fallback={<p>Carregando...</p>}>{show && <LazyComponent />}</Suspense>
    </div>
  );
};

export default App;
