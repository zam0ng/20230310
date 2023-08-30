import React from 'react'
import { InputBox } from './todo.styled'
import { useContext } from 'react';
import { Global } from '../context/Context';
import { Reducer } from '../context/Context';
import { useReducer } from 'react';


const Input = () => {
    
    const {title, setTitle} =useContext(Global);

    const { init, reducer} = Reducer();
    const [state, dispatch] = useReducer(reducer, init);

    function addtodo(){
        console.log("눌림");
        dispatch({type:"ADDTODO", payload : title});

    }
    function ta(e){
        
        // console.log(e.target.value);
        setTitle(e.target.value);
    }
  return (
    <InputBox>
    <div>
        <label htmlFor="">WHAT</label>
        <br/>
    </div>
    <div>
        <input type="text" name="" id="" onChange={ta}/>
        <button onClick={addtodo}>입력</button>
        
    </div>
    </InputBox>
  )
}

export default Input