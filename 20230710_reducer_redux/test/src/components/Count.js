import React from 'react'
import { useDispatch } from 'react-redux'

// 전역상태에 있는 값을 업데이트 해줄건데
// useDispatch 액션을 보낼수 있게 react hook 함수를 사용하자.
const Count = () => {
    //useDispatch
    const dispatch = useDispatch();
    //dispatch 함수를 사용해서 action을 던질수 있다.
    //dispatch 함수를 사용할 때 매개변수로 객체를 전달 해주자.
    // 객체의 규칙은 {type, payload}
    // type : 동작시킬 행동의 이름
    // payload : 선택사항 있어도 되고 없어도 됨. 상태를 변경할 때 데이터 전달이 필요하면 사용.

    const handlerAdd = () =>{
        dispatch({type : "더하기"})
    }
    const handlerRemove= () =>{
        dispatch({type : "빼기"})
    }
  return (
    <div>

        <button onClick={handlerAdd}>더하기</button>
        <button onClick={handlerRemove}>빼기</button>
    </div>
  )
}

export default Count