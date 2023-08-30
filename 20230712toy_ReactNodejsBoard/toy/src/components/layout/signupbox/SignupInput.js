import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {signups} from "../../../middleware/signupaction"
import { useNavigate } from 'react-router-dom';

const SignupInput = () => {
  const dispatch= useDispatch();
  const nav = useNavigate();
  function signup(){
    dispatch(signups.signup(user_id,user_pw,nav));

  }
  
  const [user_id,setUserId] =useState();
  const [user_pw,setUserPw] =useState();

  function OnId(e){
    console.log("ID" + e.target.value)
    setUserId(e.target.value)
  }
  function OnPwd(e){
    console.log("PWD "+ e.target.value)
    setUserPw(e.target.value)
  }

  return (
    <>
      <label for="">ID</label>
      <input onChange={OnId}type="text"></input>
      <br></br>
      <label for="">PWD</label>
      <input onChange={OnPwd}type="password"></input>

      <button onClick={signup}>Create Account</button>

      </>
  )
}

export default SignupInput