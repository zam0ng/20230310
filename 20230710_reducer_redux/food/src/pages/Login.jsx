import React from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { Header } from '../components';
import { useLocation, useParams, useSearchParams } from 'react-router-dom'

const Login = () => {
  const dispatch = useDispatch();
  const islogin = useSelector(state=>state.islogin);
  console.log("-------------------------"+islogin)
  const location = useLocation();
    console.log(location.pathname);
    let ta;
  if(location.pathname=="/login"){
    ta="로그인"
  }

  function loginHandler(){
    
    return dispatch({type :"LOGIN",payload :true});
  }

  return (


    <>
    <div>{islogin ? "로그인 완료" :"로그인하세요"}</div>
    <button onClick={loginHandler}>{islogin ? "로그인 완료" :"로그인"}</button><br></br>
    <Header ta={ta}></Header>
    </>
  )
}

export default Login