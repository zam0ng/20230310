import React, { useEffect } from 'react'
import {BoardHeader,BoardMain,BoardInsertBtn,BoardTableTh,Ta,BoardMainDiv
,TaInput,TaLabel,Td,Tr,Table,Detail} from "./board.styled"

import Boardlist from "./Boardlist";
import Boarddetail from "./Boarddetail";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Inserts} from "../../../middleware/boardaction";
import {logins} from "../../../middleware/loginaction"
import { useSelector } from 'react-redux';

const BoardBox = () => {
    const dispatch = useDispatch();
    const isactive = useSelector(state=>state.insert.isactive);
    const isactive2 = useSelector(state=>state.insert.isactive2);
    
    //-------------------------------------------???????????
    const userid = useSelector(state=>state.signup.user_id);
    // console.log("userid"+userid);
    console.log(userid);
    //-------------------------------------------???????????

    // const token = useSelector(state =>state.signup.token);
    // console.log(token);

    // useEffect(()=>{
    //     dispatch(logins.islogin(token))
    // },[])

    const [title,setTitle]= useState("");
    const [content,setContent]= useState("");

    function popupInsert(){
        console.log("클릭됨?");
        dispatch({type:"INSERTSTART" , payload : true});
    }

    function InsertTItle(e) {
        console.log(e.target.value)
        setTitle(e.target.value)
    }
    function InsertContent(e) {
        console.log(e.target.value)
        setContent(e.target.value)
    }

    function Insert(){

        dispatch(Inserts.Insert(title,content))
    }
    
    return (
    <>

    {isactive ? 
    <>
    <BoardHeader>INSERT</BoardHeader>
    <BoardMain>
    <Ta>
        <div>
            <TaLabel for="">제목</TaLabel>
            <TaInput onChange={InsertTItle} type="text"></TaInput>
        </div>
        <div>
            <TaLabel for="">내용</TaLabel>
            <TaInput onChange ={InsertContent} height={"400px"}type="textarea"></TaInput>

        </div>
    </Ta>
    <BoardInsertBtn onClick={Insert}>작성하기</BoardInsertBtn>
    </BoardMain>
    </> : 

    isactive2 ? 
    <>
    <BoardHeader>DETAIL</BoardHeader>
    <BoardMain>
    <Boarddetail></Boarddetail>
    </BoardMain>
    </> :

    <>
    <BoardHeader>BOARD</BoardHeader>
    <BoardMain>
        <BoardMainDiv>
            <Table>
            <Tr>
            <BoardTableTh width={"50px"}>NO</BoardTableTh>
            <BoardTableTh width={"400px"}>제목</BoardTableTh>
            <BoardTableTh width={"80px"}>작성자</BoardTableTh>
            <BoardTableTh width={"100px"}>작성날짜</BoardTableTh>
            </Tr>
            <Boardlist></Boardlist>
            </Table>
        </BoardMainDiv>
        
        <BoardInsertBtn onClick={popupInsert}>글쓰기</BoardInsertBtn>
        </BoardMain>
        </>
        }
    
    </>
  )
}

export default BoardBox