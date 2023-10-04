import { useEffect, useState } from "react";
import useWeb3 from "./hooks/web3.hook";
import abi from './abi/Counter.json'
const App = () =>{
  const {user, web3} = useWeb3();
  const [count, setCount] =useState(0);


  // CA 컨트렉트 주소에 상태변수를 조회하는 함수를 작성
  const getCount = () =>{
    // web3 있는지 확인
    if (web3 === null) return;

    // find 배열을 순회하면서 값을 찾는데
    // 순회하는 요소는 객체 data
    // 순회하는 요소 객체에 name키가 getValue인지 확인하고 맞으면 return
    const getValueData = abi.find((data)=> data?.name === "getValue");

    const data = web3.eth.abi.encodeFunctionCall(getValueData, []);
    // data 실행시킬 내용이 담겨있음
    // 원격 프로시저 호출
    web3.eth.call({
      to : "0xF49f502a93843dd00582788d114417194B15B1a7",
      data,
    }).then((data)=>{
      // toBN 큰 자리수의 값을 다루기 때문에
      // .toString(10) 10진수 변경 16진수에서
      const result = web3.utils.toBigInt(data).toString(10);
      setCount(result);
    })
  };

  // 값을 블록체인 네트워크에 요청해서 상태변수를 변경하는 함수
  const increment = async() =>{
    const incrementData = abi.find((data)=> data.name === "increment");
    const data = web3.eth.abi.encodeFunctionCall(incrementData, []);

    // 접속한 지갑의 주소
    // useWeb3 hook에서 지갑의 정보를 받아 왔음.
    const from  = user.account;
    await web3.eth.sendTransaction({
      from : from,
      to : "0xF49f502a93843dd00582788d114417194B15B1a7",
      data,
    }).then((data)=>{
      console.log(data);
      getCount();
    })
  }

// 값을 감소시키는 함수
const decrement = async ()=>{
  const decrementData = abi.find((data) => data.name  === "decrement");
  const data = web3.eth.abi.encodeFunctionCall(decrementData, []);

  const from = user.account;
  const _data = await web3.eth.sendTransaction({
    from : from,
    to : "0xF49f502a93843dd00582788d114417194B15B1a7",
    data,
  })
  console.log(_data);
  getCount(); 
}
  useEffect(()=>{
    // 최초에 값 조회
    if(web3 !== null) getCount();
  },[web3]);

  if(user.account === "") return "지갑 로그인 하셈";
  return(
    <>
      <div>지갑주소 {user.account}</div>
      <h2>카운트 : {count}</h2>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
    </>
  )
}

export default App;


/*
Available Accounts
==================
(0) 0x9b1b321BF1f2CB969D5332D14E831a88A020d274 (100 ETH)
(1) 0x4dECD9ac73b8DB10Bf9A117c42Eb65a0B9AF0D77 (100 ETH)
(2) 0x03cB63aab692DC118732353C630c0252fdd26EE5 (100 ETH)
(3) 0xD3adEbc0583BeE7a73a1834DC8E7A29a079d6b27 (100 ETH)
(4) 0xdB7C5E5Cc83E6F2017e60edf76A4Ea1300B69D68 (100 ETH)
(5) 0xD389aC3E78e691AD62DA4B88bea1bdd6E2a08651 (100 ETH)
(6) 0x3784faB22Ed74Dd6a2F2619dB9D205D8716B79Dd (100 ETH)
(7) 0xf84D931d2549ac39572De6EE3Eab053fabE2Da4d (100 ETH)
(8) 0x64E1C445Ff7815c19E980B300B19a00B43Bf6813 (100 ETH)
(9) 0x550875c12C1415cE73142E37Ea4E9Dd21410EF6a (100 ETH)

Private Keys
==================
(0) 0x6db67fecee3abed5694b6d36c57c0b0e19c1019d84b57e0ac2175696a2743ea4
(1) 0x7d2cb66d0d1fff674dd9fe64cbcefb1ca343ab4e08b4160deb483ab8f5339c79
(2) 0xd3ea699be4074876ba5c1aebeb76e886491a0e289611e19a1f5294c333f15250
(3) 0xa0e918a2b9b4912e2ce2db4b4acd3544ec0a585fb2bedf0c256e0ec8ac488618
(4) 0x5482fc2e0703024d12a8d7d2f516015e7b938f51d3ba87548de76427d4961aca
(5) 0xbf418532d254364545e349d6d591cf506b182324128e26b7af65c87b44ea5f8e
(6) 0x3995d59576c837b56d9f292c228e170d1a79c05b94b5cc14ef834eac8466d76b
(7) 0x34fd9c580648a93c8d0065d6a1330267a43d215206a986d74bfa39850dd63426
(8) 0xfbe28a41179f54c6e478f43c0b6827c9fceeee90ce6912bc52f58178d373faa1
(9) 0xc6aedbcf2a202d27f304e2c4968b22f24da6d16332fb18a60dc5aff45b93c588
*/