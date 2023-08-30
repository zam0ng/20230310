import React from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { Header } from '../components';
import { useLocation, useParams, useSearchParams } from 'react-router-dom'


const Foodpage = () => {
  const dispatch = useDispatch();
  function buy(){
    dispatch({type: "GAJI"})
  }
  function buy2(){
    dispatch({type: "TODAR"})
  }
  
  


  const location = useLocation();
    console.log(location.pathname);
    let ta;
  if(location.pathname=="/food"){
    ta="음식"

  }
  return (
  <>
    <Header ta={ta}></Header>

    <div>가지볶음밥</div>
    <button onClick={buy}> 구매</button>

    <div>토마토계란볶음밥</div>
    <button onClick={buy2}> 구매</button>
    </>
  )

}

export default Foodpage