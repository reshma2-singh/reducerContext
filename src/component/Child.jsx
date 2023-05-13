import React,{useContext,useReducer} from 'react';
import {data} from "../StateProvider";


function Child() {
  const user = useContext(data);
  
  console.log(user,"09")
  const[{name,age},dispatch]= user;
  const handleClick=()=>{
    dispatch({ type: "COMPLETE" ,'name':'dog'
    })
  }
  return (
    <div>
      <p onClick={handleClick}>{name}</p> 
      <p>{age}</p> 
    </div>
  )
}

export default Child