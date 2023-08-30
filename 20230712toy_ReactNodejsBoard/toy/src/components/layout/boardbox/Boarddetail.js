import React, { useEffect, useState } from 'react'
import {Detail,TaLabel,TaInput,Detaildiv} from './board.styled'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Inserts } from '../../../middleware/boardaction'
import { flushSync } from 'react-dom'
const Boarddetail = () => {
    const [updateTitle,setUpdateTitle] = useState();
    const [updateContent,setUpdateContent] = useState();

    const title = useSelector(state=>state.insert.title);
    const bringtitle = useSelector(state=>state.insert.bringtitle);
    const bringcontent = useSelector(state=>state.insert.bringcontent);
    const bringUserid = useSelector(state=>state.insert.bringUserid);

    const currentUserid = useSelector(state=>state.insert.currentUserid);
    console.log(bringUserid);
    // console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
    
    let ta;
    
    // console.log(currentUserid);
    let userIdmatch ;

    if(bringUserid==currentUserid){
        userIdmatch = true
    }   
    else{
        userIdmatch = false
    }
    
    const dispatch = useDispatch();


    function alterTitle(e){
        setUpdateTitle(e.target.value)
    }
    function alterContent(e){
        setUpdateContent(e.target.value)
    }

    useEffect(()=>{
        dispatch(Inserts.bringDetail(title));
         
    },[])

    function update(){
        dispatch(Inserts.update(title,updateTitle,updateContent))
    }
    function remove(){
        dispatch(Inserts.remove(title))
    }
  return (
    <>
    <Detail>
        
        <div>
            <TaLabel for="">제목</TaLabel>
            <TaInput onChange={alterTitle}  type="text" placeholder={bringtitle}></TaInput>
        </div>
        <div>
            <TaLabel for="">내용</TaLabel>
            <TaInput onChange={alterContent} height={"400px"}type="textarea" placeholder={bringcontent}></TaInput>

        </div>
        
    </Detail>
    <Detaildiv>
    {userIdmatch ? 
    <>
    <button onClick={update}>수정하기</button>
    <button onClick={remove}>삭제하기</button>
    </> : <></>}
    
    </Detaildiv>
    </>
  )
}

export default Boarddetail