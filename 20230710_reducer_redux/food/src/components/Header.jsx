import React, { useEffect } from 'react'
import Address from './Address';
import {useDispatch} from 'react-redux';
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';


const Header = (ta) => {
  


  console.log(ta.ta);
  const title =["로그인","마이","음식"];

  const aa =title.filter((item)=>item!=ta.ta);
  console.log(":aaaaaaa")
  console.log(aa);
  return (
    <Address title={aa}></Address>
  )
}

export default Header