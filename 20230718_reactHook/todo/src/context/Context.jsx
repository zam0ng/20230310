import React,{useCallback, useContext, useMemo} from 'react'
import { useState ,useReducer } from 'react';
import { createContext } from 'react'
import Index from '../components/Index';
import Header from '../components/Header'
import Input from '../components/Input'
import {AllBox,ListBox,ListSpan} from "../components/todo.styled"
import { InputBox,ListDiv ,Updown,ListSpan2} from '../components/todo.styled'
import List from '../components/List';
import { useEffect } from 'react';
export const Global = createContext();

export const Reducer= ()=>{
  const init ={
    todos :[],
}
const reducer = (state,action)=>{

  const{type,payload} = action;
  console.log("type------------------"+type)
  console.log("payload------------------"+payload)
  switch (type) {
    
    case "ADDTODO":
       
      return {...state, todos:[...state.todos, payload]};

  
    default:
      return state;
  }
};
  return { init, reducer };
}


const Listbox = () => {

  const {title, state} =useContext(Global);
  const todoArr= state.todos;

  const [counts, setCounts] = useState([]);
// [3,7,0,0]
  useEffect(() => {
    setCounts([...counts,0])
    // setCounts(Array(todoArr.length).fill(0));
  }, [state]);

  const up= useCallback(
    (index)=>{
    setCounts((prevCounts) => {
    const newCounts = [...prevCounts];
    newCounts[index] += 1;
    return newCounts;
  });
  },[counts]
  );

  const down = useCallback(
    (index) => {
      setCounts((prevCounts) => {
        const newCounts = [...prevCounts];
        newCounts[index] -= 1;
        return newCounts;
      });
    },
    [counts] // Add dependencies if needed
  );
  return (
    <>
    {/* <Updown onClick={up}></Updown> */}
    <ListDiv>
    {todoArr.map((e, index) => (
      <>
      <ListSpan key={index}>
        {e}
        <ListSpan2>{counts[index]}회</ListSpan2>
        <Updown onClick={() => down(index)}>⬇️</Updown>
        <Updown onClick={() => up(index)}>⬆️</Updown>
      </ListSpan>
      </>
    ))}
  </ListDiv>
  </>
  )
}

const Context = () => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isactive, setIsactive] = useState(false)
  const [count, setCount] = useState(0);

  const { init, reducer} = Reducer();
  const [state, dispatch] = useReducer(reducer, init);

  
  console.log(state);
  const obj = {
    title,
    setTitle,state, dispatch,
    count,setCount,
  }

  function addtodo(){
    setTitle("");
        
    console.log("눌림");
    dispatch({type:"ADDTODO", payload : title});
    setIsactive(!isactive);


}
function tb(){
  setCount(count+1)
}
function ta(e){

    // console.log(e.target.value);
    setTitle(e.target.value);
}

  function isactiveHandler(){

    setIsactive(!isactive);
  }
  return (
    <Global.Provider value={obj}>
      {/* <button onClick={tb}>{count}</button> */}
      <div>
        <button onClick={isactiveHandler}>쓰기</button>
      </div>
      {isactive ? <>
        <Header />
        <AllBox>
          <Listbox />
          <InputBox>
    <div>
        <label htmlFor="">WHAT</label>
        <br/>
    </div>
    <div>
        <input type="text" name="" id="" onChange={ta} value={title}/>
        <button onClick={addtodo}>입력</button>
        
    </div>
    </InputBox>
        </AllBox>
      </> : <>
        <Header />
        <AllBox>
          <Listbox/>
        </AllBox>
      </>}
      

    </Global.Provider>
  )
}
// redux toolket , react query
export {Context}; 