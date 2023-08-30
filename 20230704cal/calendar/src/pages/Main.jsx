import React from 'react'
import {Header,Header2} from "../components/Header";
import Body from '../components/Body'
import Footer from '../components/Footer';
import { useEffect,useState } from 'react';
import DayBox from '../components/DayBox'

const Main = () => {
  const [active,setactive]= useState(false);

  function activeHandler(){
    setactive(!active);
    console.log(active)
    // active ?  : false;
  }
  return (
    
    <>    <button onClick={activeHandler}>calender</button>
  
    {active ? <div className='seven'>
      <Header/>
      <Body/>
      {/* <Footer/> */}
      </div> : <></>
    }
    </>
  )
}

export default Main