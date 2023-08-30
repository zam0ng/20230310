import './App.css';
import {produce} from "immer";

import {add,remove,add2,remove2, weather} from "./features/countSlice";
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const num = useSelector(state => state.count.num);
  const num2 = useSelector(state=> state.count2.num);
  const value = useSelector(state=> state.count2.value);
  // const state ={
  //   value : 0,
  //   arr : [],
    
  // }
  // 값이 변해도 바뀐것을 감지를 못하기 때문에
  // 불변성을 지킨다라는 내용이
  // 기존값을 직접 수정하지 않고 새로운 값을 만들어 내는것.

  // const nextState = produce(state,dra =>{
  //   console.log(dra);
  //   dra.value +=1;
  //   dra.arr.push("a");
  // })
  
  // // 기존 객체
  // console.log("state " , state);
  // // 새로운 객체
  // console.log("nextState ", nextState);

  // 기존 객체를 유지하고 새로운 값을 생성해서 반환 해줌.
  // 카운트 기능 하나 만들기

  return (

    <div className="App">
      <div>
        숫자 : {num}
        <button onClick={()=>{dispatch(add())}}>더하기</button>
        <button onClick={()=>{dispatch(remove())}}>빼기</button>

      </div>
      <div>
        로딩 완료 여부 : {value} <br/>
        숫자2 : {num2}
        
        <button onClick={()=>{dispatch(weather("seoul"))}}>날씨 정보 가져오기</button>
        <button onClick={()=>{dispatch(add2())}}>더하기</button>
        <button onClick={()=>{dispatch(remove2())}}>빼기</button>
      </div>
    </div>
  );
}

export default App;
