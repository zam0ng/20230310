import {useEffect, useState} from "react";
import Web3 from "web3";
const useWeb3 = () =>{
    const [user, setUser] = useState({

        account : "",
        balance : "",
    })

    const [web3,setWeb3] = useState(null);

    useEffect(()=>{
        // 확장프로그램 메타마스크 설치 여부 확인
        if(window.ethereum){
            window.ethereum.request({
                method : "eth_requestAccounts",
            }).then(async([data])=>{
                const web3Provider = new Web3(window.ethereum);
                setWeb3(web3Provider);
                setUser({
                    account : data,
                    balance : web3Provider.utils.toWei(await web3Provider.eth.getBalance(data), "ether"),
                });
            });

        }else{
            alert("메타마스크 설치 하세요.")
        }
    },[]);

    return {
        user,
        web3
    }
}

export default useWeb3;