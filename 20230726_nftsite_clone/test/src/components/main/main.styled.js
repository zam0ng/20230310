import styled from "styled-components";

export const MainBox = styled.div`
    
    width: 90%;
    height: 450px;
    /* border: 1px solid black; */
    margin: auto;
    margin-top: 100px;
    background: rgb(244, 241, 251);
    border-radius :30px;
    display: flex;
    justify-content: center;
    align-items: center;

`
export const ContenDiv = styled.div`
    width: 43%;
    height: 350px;
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    justify-content: center;

    & h1{
        text-align: left;
    }
    & p{
        text-align: left;
    }

`
export const MoreBtn = styled.button`
    width: 170px;
    height: 50px;
    /* border: 1px solid black; */
    border-radius: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`
export const ContenDiv2 = styled.div`
    width: 43%;
    height: 350px;
    /* border: 1px solid black; */

    & img{
        width: 100%;
        height: 100%;
        border-radius : 20px;
    }
`