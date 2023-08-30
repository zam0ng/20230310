import React from 'react'
import { useState ,useEffect} from 'react';
import List from "./List";
const Input = () => {

    // input에 입력된 값
    const [inputvalue,setInputvalue]= useState("");
    // 배열에 담을 값
    const [todovalue,setTodovalue]= useState("");
   
    function ta(){
        // 버튼 누르면 인풋 값 초기화
        setInputvalue("");
    
        // const ta = inputvalue.toString();
      
        setTodovalue(prevValue =>[...prevValue,inputvalue]);
        
    }
    function tb(){
        console.log(todovalue);
        if(todovalue==""){
            return <List/>
        }
        else{
            // return todovalue.map((item,index)=><List itemm={item}/>)
            return <List itemm={todovalue}/>
        }
    }

    function inputOnchange(e){
        console.log(e.target.value);
        setInputvalue(e.target.value);
    }

    useEffect(()=>{
        console.log(todovalue);
    },[todovalue])

  return (
    <>
    <div className='inputContain'>

        <div className='inputMain'>

            <input type="text" className='taa' name='taa' value={inputvalue} onChange={inputOnchange}/>
            <button onClick={ta}>추가</button>

        </div>

    </div>

    {tb()}
    </>

  )
}

export default Input