import {SignupTitle,SignupLabel,SignupInputcss,Signupbtn} from './Signup.styled';
import SignupInput from "./SignupInput";
import React from 'react'

const SignupBox = () => {
  return (

    <div className="SignupBox">

      <SignupTitle>Signup</SignupTitle>
      <SignupInputcss>
        <SignupInput />
      </SignupInputcss> 

    </div>
  )
}

export default SignupBox