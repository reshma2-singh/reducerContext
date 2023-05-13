import React from 'react'
import { createContext,useReducer } from 'react';
import Child from "./component/Child"
export const data = createContext();
const initial={
name:"cat",
age:15
}
function reducer(state,action){
    console.log(state, "po")
switch(action.type){ 
    case "COMPLETE":
        return action
}
}
function StateProvider() {
    const[state,dispatch] = useReducer(reducer,initial);
  
  return (
    <div>
          <data.Provider value={[state, dispatch]}>
        <Child/>
        </data.Provider>  
    </div>
  )
}

export default StateProvider