import P from 'prop-types';
import { PostsContext } from "./context.js"
import { useReducer } from 'react';
import { reducer } from './reducer.js';
import { data } from './data.js';

export const PostsProvider = ({children}) => {
  const [postsState, postsDispatch] = useReducer(reducer, data);

  return (
    <PostsContext.Provider value={{ postsState, postsDispatch}}>
      {children}
    </PostsContext.Provider>
  )
}

PostsProvider.propTypes = {
  children: P.node.isRequired,
}
