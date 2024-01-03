import { createContext, useState } from "react";
import { globalState } from "./data";

export const GlobaContext = createContext();

export const AppContext = ({ children }) => {
  const [state, setState] = useState(globalState);

  return (
    <GlobaContext.Provider value={{ state, setState }}>
      {children}
    </GlobaContext.Provider>
  );
}
