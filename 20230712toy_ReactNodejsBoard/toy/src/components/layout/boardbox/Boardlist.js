import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {Inserts} from "../../../middleware/boardaction"
import { useSelector } from 'react-redux'
import {Td,Tr,Detail} from "./board.styled"

const Boardlist = () => {
    const dispatch = useDispatch();
    const data = useSelector(state=>state.bring.data)

    useEffect(()=>{
  
        dispatch(Inserts.bring());
      
    },[])

    function tt(title){
      console.log("클릭")
      console.log(title);
      dispatch({type:"DETAILSTART", payload:true, payload2 : title})

    }

  // const ta = "2023-07-13T03:03:26.000Z"
  // const tb= ta.slice(0,10);
  // console.log(tb);
  return (

    data.data?.map((item,index) => 
    <>
    <Tr >
    <Td width={"50px"}>{item.id}</Td>
    <Td width={"400px"} onClick={()=>{tt(item.title)}}>{item.title}</Td>
    <Td width={"80px"}>{item.user_id}</Td>
    <Td width={"100px"}>{(item.createdAt).slice(0,10)}</Td>
    </Tr>
    </>
  )
  )
}

export default Boardlist