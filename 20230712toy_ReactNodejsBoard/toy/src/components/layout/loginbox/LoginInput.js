import React from 'react'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {logins} from "../../../middleware/loginaction"
import { useNavigate } from 'react-router-dom'
const LoginInput = () => {
    const nav = useNavigate();
    const [user_id,setUserId] =useState();
    const [user_pw,setUserPw] =useState();

    const dispatch = useDispatch();

    function login(){
        dispatch(logins.login(user_id,user_pw,nav));
    }

    function OnId(e) {
        console.log("ID" + e.target.value)
        setUserId(e.target.value)
    }
    function OnPwd(e) {
        console.log("PWD " + e.target.value)
        setUserPw(e.target.value)
    }

    return (
        <>
            <label for="">ID</label>
            <input onChange={OnId} type="text"></input>
            <br></br>
            <label for="">PWD</label>
            <input onChange={OnPwd} type="password"></input>

            <button onClick={login}>Login</button>

        </>
    )
}

export default LoginInput