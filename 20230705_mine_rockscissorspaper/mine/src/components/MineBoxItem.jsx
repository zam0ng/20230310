import React from 'react'
import { useState } from 'react'
import mineimg from "../img/mine.jpg"
import tileimg from "../img/tile.jpg"
import openimg from "../img/open.png"
import { useEffect } from 'react'

const MineBoxItem = ({minenum, itemIndex, setMinenum , setGameOver, gameOver,count, setCount}) => {
    
    const [isActive, setActive] = useState(false);
    const [isMine, setMine] = useState(false);

    useEffect(()=>{
        if(gameOver == false){
            setActive(false);
            setMine(false);
        }
    },[gameOver])

    const onClickHandler = () =>{

        if(minenum.length==0){
            return alert("게임 시작 버튼을 눌러주세요")
        }
        if(!isActive)
        {
            
            setActive(!isActive);
            minenum.map((item,index)=>{

                if(item == itemIndex){
                    alert("폭탄을 찾아 게임 종료되었습니다.")
                    setMinenum([]);
                    setMine(!isMine);
                    setGameOver(true);
                }
                else{
                    setCount(count+1);
                }
            })
        }
    }

  return (
    <div onClick={onClickHandler} className='MineBox'>
        {/* {isActive ? <></> : <div>qwer</div>} */}
        {/* <img className="mimg" src={isMain ? mineimg : tileimg} alt="" /> */}

        {/* if (isActive === true) {
                if (isMine === true) {
              result = mineimg;
                } else {
              result = openimg;
                }
                } else {
              result = tileimg;
                } */}

        <img className="mimg" src={isActive===true ? isMine ===true ? mineimg : openimg : tileimg } alt="" />
    </div>
  )
}
export default MineBoxItem