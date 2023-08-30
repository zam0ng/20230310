import styled from "styled-components";

export const LoginTitle = styled.div`
    width: 400px;
    height: 100px;
    background-color: gray;
    color: white;
    line-height: 100px;
    margin: 0 auto;
    text-align: center;
`

export const LoginInputcss = styled.div`
   width: 250px;
  height: 100px;    
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
    
    & label {
        display: inline-block;
        width: 50px;
        text-align: center;
        height: 30px;
    }
    & input {
        width:150px;
        height:30px;
    }

    & button {
    border-radius: 20px;
    width: 110px;
    height: 20px;
        margin: 0 auto;
    }
`