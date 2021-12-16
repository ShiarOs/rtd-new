import React, { createContext, useReducer } from "react";
import {Reducer, initialState} from "../reducer/TeamReducer";



const TeamStore = ({ children }) => {
  const [teamState, teamdispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[teamState, teamdispatch]}>
      {children}
    </Context.Provider>
  );
};

export const Context = createContext(initialState);
export default TeamStore;
