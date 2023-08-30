import React, { useState,useMemo } from 'react'

const Memo = () => {
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(0);
    const handleCount = ()=>{
        console.log("나 count");
        setCount(count + 1);
    }
    const handleCount3 = ()=>{
      setCount2(count2+ 1);
  } 
    // 컴포넌트의 리렌더링을 관리하고 싶음
    // 부모 컴포넌트가 리렌더링 되면 자식 컴포넌트가 리렌더링 되는데 
    // 부모컴포넌트 안에 자식컴포넌트가 무척많으면 전부 리렌더링 되는데 그럼 페이지가
    // 최적화가 되지 않는다.  
    const handleCount2 = useMemo(()=>{
        console.log("나 count2");
        return (count2);
    },[count2])
    const handleCount4 = useMemo(()=>{
        console.log("zzz")
        return (count);
    },[count])
    // count2를 주시하고 있다가 값이 변하면 새로운 값으로 업데이트
  return (
    <div>
        <p>memo</p>
        <button onClick={handleCount}>더하기</button>
        <button onClick={handleCount3}>카운트2더하기</button>
        <p>handleCount2:{handleCount2}</p>
        <p>handleCount4:{handleCount4}</p>
    </div>
  )
}

export default Memo