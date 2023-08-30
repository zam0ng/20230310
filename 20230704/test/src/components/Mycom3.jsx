// es7 react/redux/ 확장 다운로드
// rcc 하면 클래스형 컴포넌트 자동완성
// rafce 하면 함수형 컴포넌트 자동완성

import React, { useEffect,useState } from 'react'
// 함수형 컴포넌트의 state와 props의 값은 어떻게 관리해야하나
// react hook useState, useEffect
// useState 상태값을 만들어준다. 상태값을 수정할 때 사용할 메서드를 만들어준다.
// useEffect 라이프사이클을 지원 해준다.

// Main.jsx 에서 넘겨준 함수형 컴포넌트의 props 값은 함수의 매개변수로 전달 된다. 
const Mycom3 = ({newNum,newNum2}) => {
  console.log(newNum,newNum2);
  let count = 0;
  // 다시 리렌더링이 되면 코드를 다시 실행 시키는 과정에서 변수가 다시 선언된다.

  // useState : 첫번째 반환값이 상태변수 , 두번째 값은 상태변수를 업데이트할 setState 함수
  // useState : 매개변수로 전달한 값이 초기값
  const [num,setNum] = useState(0);
  const [active,setActive] = useState(false);
  // useEffect 라이프 사이클 함수
  // useEffect의 첫번째 매개변수 함수를 전달하고, 두번째 매개변수 배열을 전달한다.
  // 첫번쨰로 전달한 함수를 두번째 매개변수의 상태를 확인하고 실행시킨다.
  // [] 빈배열을 전달한 경우 componentDidMount
  // [num] 배열에 전달된 값이 수정된 경우에 실행 componentDidMount, componentDidUpdate


  // [num] 배열에 전달한 값만 주시하기때문에 num이 변경된 경우에는 그 useEffect만 실행된다.⭐
  useEffect(()=>{
    console.log("componentDidMount");
  },[])
  useEffect(()=>{
    console.log("componentDidMount,componentDidUpdate");
    console.log("나는 num이 변경");
    //상태가 변환이후의 값을 사용하는 라이프사이클 함수
    console.log("상태 :"+num);

  },[num])
  useEffect(()=>{
    console.log("나는 active이 변경");
  },[active])

  // num,active 둘중 하나라도 변경되면 업데이트 함수 실행⭐
  useEffect(()=>{
    console.log("나는 active 나 num이 변경");
  },[num,active])
  
  function clickHandler(){
    console.log("클릭함");
    // 상태를 변경
    // 상태값을 사용하는 이유
    // 이전의 상태값이 보관이 된다.
    // 상태값이 
    setNum(num+1);
    count++;
    console.log("변수 :"+count);
    console.log("상태2 :"+num);
    // 실수가 많으니깐 주의 상태값을 수정하고 바로 값을 사용하면 안됨.
  }
  function activeHandler(){
    setActive(!active);
  }
  return (
    <div>
      <button onClick={clickHandler}>클릭</button>
      <button onClick={activeHandler}>활성화/비활성화</button>
    </div>
  )
}

export default Mycom3;
