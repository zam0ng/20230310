import './App.css';
import React, { useEffect } from 'react'
import { Routes, Route, Navigate ,useNavigate} from 'react-router-dom';
import {Main,Login,Mypage,Foodpage} from './pages';
import { Address } from './components';
import { useSelector ,useDispatch} from 'react-redux';

function App() {

  const login = useSelector(state=>state.addressName);

  const dispatch = useDispatch();

  const nav = useNavigate();

  useEffect(()=>{
    console.log("address")
    if(login == "/login"){
        console.log("이동")
        nav("/login");
    }
    if(login == "/my"){
        nav("/my");

    }
    if(login == "/food"){
        nav("/food");
    }
},[login])
  const islogin = useSelector(state=>state.islogin);
  console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"+islogin);
  const tb = login.substr(1);
  let aa;
  if(tb == "login"){
    aa = <Login/>
  }
  if(tb == "my"){
    aa= islogin ? <Mypage/> :<Login/>
    // aa= <Mypage/>
  }
  if(tb =="food"){
    aa= islogin ? <Foodpage/> : <Login/>
  }
  console.log(login);
  console.log(tb);
  return (
    <div className="App">
    
    <Routes>
      <Route path="/" element={<Main></Main>}/>
      <Route path={login} element={aa}/>
    </Routes>
    </div>

  );
}

export default App;
