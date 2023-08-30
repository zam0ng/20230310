import React,{useEffect,useState}from 'react'
import DayBox from './DayBox';


const Body = () => {
  const [holiday,setholiday]= useState(false);
  function ta(){
    
    const tdArr = new Array(37).fill(null);
    
    return tdArr.map((item, index) => {
      //   console.log(index);
      //   index > 5 ? <DayBox num={index} Cname={"orange"}/> : <DayBox num={""} Cname={""}/>


      // return tdArr.map((item,index)=>
      // index > 5 ? <DayBox num={index-5} Cname={"orange"}/> : <DayBox num={""} Cname={""}/>
      // )Cname2={"red"}
      if (index > 5) {
        if (index % 7 == 0) {
          return <DayBox num={index - 5} Cname={"orange"} Cname2={holiday ? "red" : "black"}  />

        }
        else {
          return <DayBox num={index - 5} Cname={"orange"} />

        }
      }
      else {
        return <DayBox num={""} Cname={""} />
      }
    })

    // console.log(arr);

  }

  function redHandler(){
    console.log("눌림?");
    setholiday(true);

  }
    
    // console.log(ta())

    
  return (
    <>
    <button onClick={redHandler}>휴일</button>
    <tr className='tr'>
    {ta()}
    </tr>
    </> 
    
    
  )
}

export default Body