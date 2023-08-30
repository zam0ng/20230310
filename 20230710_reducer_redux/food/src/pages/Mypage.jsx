import React from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { Header } from '../components';
import { useLocation, useParams, useSearchParams } from 'react-router-dom'

const Mypage = () => {

    const mybag = useSelector(state=>state.mybag);
    console.log(mybag);
    const location = useLocation();
    console.log(location.pathname);
    let ta;
  if(location.pathname=="/my"){
    ta="마이"

  }
  return (
    <>
    <div>Mypage</div>
    <Header ta={ta}></Header>
    <div>{mybag=="" ? <></> : mybag}</div>
    </>

    
  )
}

export default Mypage