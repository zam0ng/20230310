import styled from "styled-components";
import {logoImg,SearchImg} from "../../img";
export const HeaderBox = styled.div`

    position: fixed;
    top:0;
    left: 50%;
    transform: translate(-50%,0%);
    width: 90%;
    height : 80px;
    /* border: 1px solid black; */
    margin: 0 auto;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    
    backdrop-filter: blur(10px);
    
`
export const SiteIcon_Name_Div = styled.div`
    display: flex;
`
export const SiteIcon = styled.div`
    width: 70px;
    height: 60px;
    background-image: url(${logoImg});
    background-size: contain;
    background-repeat: no-repeat;
`

export const SiteName = styled.div`
    width: 150px;
    height: 60px;
    line-height: 60px;
    font-size: xx-large;
    font-weight: 600;
`

export const SearchBox = styled.div`
    width: 60%;
    height: 60px;
    border: 1px solid rgb(197, 197, 197);
    border-radius:20px;
    display:  flex;
    justify-content: flex-start;
    align-items: center;


    & div{
        margin-left: 10px;
        width: 30px;
        height: 30px;
        background-image: url(${SearchImg});
        background-size: contain;
    }

    & input{
        width: 90%;
        height: 30px;
        border: none;
    }
`

export const Mypage = styled.div`
    width: 100px;
    height: 60px;
    /* border: 1px solid black; */
    font-weight: 600;
    text-align: center;
    line-height: 50px;

    &:hover{
        color : blueviolet
    }
`
export const BtnDiv = styled.div`

    width: 90px;
    height: 55px;
    /* border: 1px solid black; */
    display: flex;
    justify-content: space-between;

`
export const Btn = styled.button`
    width: 40px;
    height: 40px;
    display: inline-block;
    border-radius : 50% ;
    background-color: white;
    border: 1px solid rgb(197, 197, 197);;
`