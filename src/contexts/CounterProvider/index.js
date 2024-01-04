import P from 'prop-types';
import { CounterContex } from './context';
import { useReducer } from 'react';
import { reducer } from './reduce';
import { data } from './data';

export const CounterProvider = ({children}) => {
  const [counterState, counterDispatch] = useReducer(reducer, data);
  return (
    <CounterContex.Provider value={{ counterState, counterDispatch }}>
      {children}
    </CounterContex.Provider>
  )
};

CounterProvider.propTypes = {
  children: P.node.isRequired,
}
