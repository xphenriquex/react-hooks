import { useContext } from "react";
import { GlobaContext } from "../../context/AppContext";

export const P = () => {
  const theContext = useContext(GlobaContext);
  const {
    state: { body },
    setState,
  } = theContext;
  return <p onClick={() => setState((s) => ({ ...s, counter: s.counter + 1 }))}>{body}</p>
}
