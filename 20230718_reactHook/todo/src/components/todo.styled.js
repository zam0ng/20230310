import styled from "styled-components"

export const InputBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    display: flex;
    border: 1px solid black;
    width: 500px;
    height: 500px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.500);
    color: white;


    & input {
        width: 200px;
    }
`
export const HeaderBox = styled.div`
    margin: 0 auto;
    width: 500px;
    height: 50px;
    border: 1px solid black;
    text-align: center;
    line-height: 50px;
    font-size: larger;
    font-weight: bolder;
    
`
export const AllBox =styled.div`
    position: relative;
    margin: 0 auto;
    border: 1px solid black;
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ListBox = styled.div`

    position: absolute;
    margin: 0 auto;
    width: 500px;
    height: 500px;
    border: 1px solid red;
    

`
export const ListDiv = styled.div`
    width: 400px;
    height: 400px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow-y: scroll;


   
`

export const ListSpan =styled.span`

        box-sizing: border-box;
        width: 380px;
        height: 40px;
        border: 1px solid black;
        line-height: 35px;
        padding-left : 10px;

       
`
export const ListSpan2 =styled.span`
        margin-left: 20px;
    `

export const Updown = styled.button`
        float: right;
        width: 30px;
        height: 30px;
        border: none;
        font-size: large;
        background-color: white;
        
`