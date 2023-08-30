import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux';
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';



const Address = ({title}) => {
    const ta =title.title
    const login = useSelector(state=>state.addressName);
    const dispatch = useDispatch();

    const nav = useNavigate();
    // useEffect(()=>{
    //     console.log("address")
    //     if(login == "/login"){
    //         console.log("이동")
    //         nav("/login");
    //     }
    //     if(login == "/my"){
    //         nav("/my");

    //     }
    //     if(login == "/food"){
    //         nav("/food");
    //     }
    // },[login])

    const moveHandler = (item) =>{
        console.log("눌림?>>>");
        console.log(item)
        switch (item) {
            case "로그인":

                return dispatch({ type: "LOGINPAGE"});

            case "마이":

                return dispatch({ type: "MYPAGE"});
            case "음식":

                return dispatch({ type: "FOODPAGE"});
        }
        
    }
    console.log(login);
  return (
    // <Link onClick={moveHandler}>{item}페이지 이동</Link> 
    title.map((item,index)=><Link onClick={()=>{moveHandler(item)}}>{item}페이지 이동<br></br></Link>)
  )
}

export default Address 