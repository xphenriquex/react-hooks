import { useContext, useEffect, useRef } from "react"
import { PostsContext } from "../../contexts/PostsProvider/context"
import { loadPosts } from "../../contexts/PostsProvider/actions";
import { CounterContex } from "../../contexts/ExemploProvider/context";
import { decrementCounter, incrementCounter } from "../../contexts/ExemploProvider/action";

export const Posts = () => {
  const isMounted = useRef(true);

  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

  const counterContext = useContext(CounterContex);
  const {counterState, counterDispatch } = counterContext;

  useEffect(() => {
    loadPosts(postsDispatch).then(dispatch => {
      if(isMounted.current) {
        dispatch();
      }
    });

    return () => {
      isMounted.current = false;
    }
  }, [postsDispatch])

  return (
    <div>
      <button onClick={() =>  incrementCounter(counterDispatch)}>
        Counter +
      </button>

      <button onClick={() =>  decrementCounter(counterDispatch)}>
        Counter -
      </button>

      <h1>Posts {counterState.counter}</h1>
      {
        postsState.loading && (<p><strong>Carregando posts...</strong></p>)
      }

      {
        postsState.posts.map((p) => <p key={p.id}>{p.title}</p>)
      }
    </div>
  )
}
