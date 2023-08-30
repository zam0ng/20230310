import React, { useState } from 'react'

const Listvalue = ({data}) => {

    const [active,setActive]=useState(false);
    // 완료 버튼을 누르면 
    function com(){
        console.log("완료 버튼 눌림");
        setActive(!active);
    }

  return (
    <>
        {/* <li className='todoValue'>{data}</li> */}
        <li className={active ? "todoValue2" : "todoValue"}>{data}</li>
        <button onClick={com} className='com'>{active ? "취소" : "완료"}</button>
    </>
  )
}

export default Listvalue