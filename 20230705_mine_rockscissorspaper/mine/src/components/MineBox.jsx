import React from 'react'
import {useState,useEffect} from 'react'
import MineBoxItem from './MineBoxItem'

const MineBox = () => {
    const [minenumArr,setMinenum] = useState([]);
    const [gameOver,setGameOver] = useState(false);
    const [count,setCount] = useState(0);   

    const mineArr = new Array(9).fill(null);
    function box(){

        return mineArr.map((item,index)=><MineBoxItem minenum={minenumArr} itemIndex={index} setMinenum={setMinenum} setGameOver={setGameOver} 
                                                        gameOver={gameOver} count={count} setCount={setCount}/>)
    }

    useEffect(() => {
        if (count == 6) {

            setGameOver(true);
            alert("게임 승리");
            setMinenum([]);

        }
    }, [count]);

    function mineNumSet() {
        
        let newArr=[];
        while(newArr.length<3){
            
            let ran = Math.floor(Math.random()*9);
            if(newArr.indexOf(ran) == -1){

                newArr.push(ran);
            }
        }

        setMinenum(newArr)
        setGameOver(false);
        setCount(0);
    }

    useEffect(()=>{
        console.log("마인번호 "+minenumArr);
    },[minenumArr])

  return (
    <>
    <tr className='MineAllBox'>
    {box()}
    </tr>
    <button onClick={mineNumSet}>게임시작</button>
    </>
  )
}

export default MineBox