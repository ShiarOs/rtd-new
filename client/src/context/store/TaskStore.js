import React, { createContext, useReducer } from "react";
import {Reducer, initialState} from "../reducer/TaskReducer";



const TaskStore = ({ children }) => {
  const [taskState, taskdispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[taskState, taskdispatch]}>
      {children}
    </Context.Provider>
  );
};

export const Context = createContext(initialState);
export default TaskStore;
