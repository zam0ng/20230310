import {LoginTitle,LoginInputcss} from "./Login.styled";
import LoginInput from "./LoginInput";

import React from 'react'

const LoginBox = () => {
  return (
    <div className="loginbox">
    <LoginTitle>Login</LoginTitle>
    <LoginInputcss><LoginInput/></LoginInputcss>
    </div>
  )
}

export default LoginBox