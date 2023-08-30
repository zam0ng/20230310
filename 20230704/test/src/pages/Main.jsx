import { Component } from "react";
import {Mycom,Mycom2} from "../components/Mycom";
import Mycom3 from '../components/Mycom3';

export default class Main extends Component{

    render(){
        return(
            
            <>
            메인페이지<br/>
            {/* <Mycom name="첫번쨰 컴포넌트" Cname="red"/>
            <Mycom name="두번쨰 컴포넌트" Cname="blue"/>
            <Mycom2/> */}
            
            <Mycom3 newNum={1} newNum2={2}/>
            </>
        )
    }
}