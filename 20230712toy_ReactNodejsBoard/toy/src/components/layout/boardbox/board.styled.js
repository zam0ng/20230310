import styled from "styled-components";

export const BoardHeader = styled.div `

    width: 100%;
    height: 100px;
    box-sizing: border-box;
    background-color: lightgrey;
    text-align:  center;
    line-height: 100px;
    
`
export const BoardMain = styled.div`
    width: 100%;
    height: 640px;
    /* border: 1px solid black; */
    box-sizing: border-box;
    background-color: ivory;
    

    & table {
        width: 658px;
        height: 500px;
        /* border:  1px solid black; */
        
    }
`

export const BoardMainDiv = styled.div`
        width: 85%;
        height: 540px;
        /* border: 1px solid black; */
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;

`
export const BoardTableTh = styled.th`

    width: ${(props)=> props.width};
    height: 30px;
    /* border: 1px solid red; */
    font-size: small;

`
export const BoardInsertBtn = styled.button`
    width: 70px;
    height: 30px;
    float: right;
    background-color: black;
    color : white;
    margin-right: 80px;
    border-radius : 40px;
`

export const Ta = styled.div`
    width: 76%;
    height: 540px;
    /* border: 1px solid black; */
    margin: 0 auto;
    background-color: ivory;
    display: flex;
    flex-direction: column;

    & div {
        margin-top: 10px;
        display: flex;
        width: 100%;
    }
    
`
export const TaLabel = styled.label`
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;

`
export const TaInput = styled.input`
    padding-left :10px;
    width: 550px;
    height: ${(props)=>props.height || "50px"};
    border-radius: 20px;

    &::placeholder{
        color: black;
    };

`
export const Td = styled.td`
    width: ${(props)=> props.width};
    height: 30px;
    /* border: 1px solid red; */
    font-size: small;
`
export const Tr = styled.tr`
    width : 700px;
    height: 30px;

`
export const Table = styled.table`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    text-align: center;
`

export const Detail = styled.div`
    width: 76%;
    height: 540px;
    /* border: 1px solid black; */
    margin: 0 auto;
    background-color: tan;
    display: flex;
    flex-direction: column;
    border-radius: 20px;

    & div {
        margin-top: 10px;
        display: flex;
        width: 100%;
    }
`

export const Detaildiv =styled.div`
    width: 600px;
    display: flex;
    margin: 0 auto;
    justify-content: flex-end;
    & button{
    width: 100px;
    height: 30px;
    }
`