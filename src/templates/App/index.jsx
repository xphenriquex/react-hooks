import { useCallback, useEffect, useState } from "react";

const useAsync = (asyncFunction, shouldRun) => {
  // const [result, setResult] = useState(null);
  // const [error, setError] = useState(null);
  // const [status, setStatus] = useState('idle');

  const [state, setState] = useState({
    result: null,
    error: null,
    status: 'idle'
  });

  const run = useCallback(async () => {
    await new Promise((r) => setTimeout(r, 2000));

    setState({
      result: null,
      error: null,
      status: 'pending'
    });

    await new Promise((r) => setTimeout(r, 2000));

    return asyncFunction()
      .then(response => {
        setState({
          result: response,
          error: null,
          status: 'settled'
        });
      })
      .catch(error => {
        setState({
          result: null,
          error: error,
          status: 'error'
        });
      });
  }, [asyncFunction]);

  useEffect(() => {
    if(shouldRun) {
      run();
    }
  }, [run, shouldRun])

  return [run, state.result, state.error, state.status];
};

const fetchData = async () => {
  // throw new Error('Que chato');
  await new Promise((r) => setTimeout(r, 2000));
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const json = await data.json();
  return json;
};

function App()  {
  const [posts, setPosts] = useState(null);
  const [reFetchData, result, error, status] = useAsync(fetchData, true);

  if(status === 'idle') {
    return <pre>idle: Nada executando</pre>;
  }

  if(status === 'pending') {
    return <pre>pending: Loading...</pre>;
  }

  if(status === 'error') {
    return <pre>error: {error.message}</pre>;
  }

  if(status === 'settled') {
    return <pre>settled: {JSON.stringify(result, null, 2)}</pre>;
  }
};

export default App;
