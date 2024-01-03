import { useContext } from "react";
import { GlobaContext } from "../../context/AppContext";

export const H1 = () => {
  const theContext = useContext(GlobaContext);
  const { state: { title, counter } } = theContext;
  return <h1>{title} {counter}</h1>
}
