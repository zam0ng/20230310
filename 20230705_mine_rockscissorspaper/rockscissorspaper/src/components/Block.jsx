import React from 'react'

const Block = ({data, name, result}) => {
    let temp ="";
    if(name === "유저"){
        temp = result;
    }
    else{
        // result == "무승부 " 이면 문제가 없음
        // result == "이겼다"면 반대로 졌다를 보여줘야하고
        // reulst == "졌다"면 반대로 이겼다를 보여줘야함.
        if( result !="")
        temp = result === "무승부" ? "무승부" : result === "이겼음" ? "졌음 " : "이겼음"
    }
    return (
        <div className='block'> 
            <div>{name}</div>


            {/* ⭐⭐⭐react 에서 이미지 import 하는 방법*/}
             {/* 리액트에서 가장 많이 사용하는 조건부 렌더링 값이 있으면 값을 사용해라라는 구문 */}
             {/* 값이 없으면 페이지가 터지기 때문에 */}
            <img src={data && data.img} alt="" />
            <div>{temp}</div>
        </div>
    )
}

export default Block