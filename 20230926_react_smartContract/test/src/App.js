import { useEffect, useState } from "react";
import Web3 from "web3";
import "./App.css";
// import fs from "fs";

function App() {
  // 브라우저에서 이더리움 블록체인 상호작용 하기
  // 메타마스크 확장 프로그램을 통해 네트워크에 상호작용
  // 메타마스크는 외부 소유 계정 정보와 네트워크의 정보도 가지고 있음
  // 트랜잭션을 발생시키면 서명 정보를 필요로 하는데 개인키를 직접 전달하는 것이 아닌 메타마스크 안에 안전하게 보관

  // 원격 프로시저 호출을 통해 컨트랙트의 함수를 실행 시킬 수 있고 네트워크의 메소드도 사용하여 계정의 정보 등 로직을 사용 가능

  // 지갑(메타마스크)으로 로그인 (탈중앙화된 어플리케이션 로그인 처리 방식)
  const [account, setAccount] = useState(null);
  // npm install web3
  const [web3, setWeb3] = useState(null);
  const [balance, setBalance] = useState(0);
  const [to,setTo] = useState();
  const [amount,setAmount] = useState();
  const [cnt,setCnt] = useState();
  const [ca,setCa] = useState();

  useEffect(() => {
    (async () => {
      // 즉시 실행 함수를 사용하여 구조분해 할당
      const [data] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("data : ", data);

      // 네트워크 web3 연결
      // console.log(new Web3(window.ethereum));
      setWeb3(new Web3(window.ethereum));
      setAccount(data);
    })();
  }, []);

  const balanceBtn = async () => {
    const balance = await web3.eth.getBalance(account);
    const _balance = await web3.utils.fromWei(balance, "ether");
    setBalance(_balance);
  };
  
  const sendInfo = (e)=>{
    const fieldName = e.target.name;
    const fieldvalue = e.target.value;

    if(fieldName=="to"){
      setTo(fieldvalue);
    }
    else if(fieldName =="amount"){
      setAmount(fieldvalue);
    }
  }
  const sendBtn = async() =>{
    
    await web3.eth.sendTransaction({
      // 컨트랙트 배포자 계정
      from : account,
      to : to,
      // 컴파일된 컨트랙트 바이트 코드
      value : web3.utils.toWei(amount,"ether"),
  })
  }

  const contractDeploy = async () => {

    await web3.eth.sendTransaction({
      // 컨트랙트 배포자 계정
      from : account,
      // gas 제한량
      gas : "300000",
      // 컴파일된 컨트랙트 바이트 코드
      data : "608060405234801561001057600080fd5b50610150806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063209652551461003b5780635524107714610059575b600080fd5b610043610075565b60405161005091906100a1565b60405180910390f35b610073600480360381019061006e91906100ed565b61007e565b005b60008054905090565b8060008190555050565b6000819050919050565b61009b81610088565b82525050565b60006020820190506100b66000830184610092565b92915050565b600080fd5b6100ca81610088565b81146100d557600080fd5b50565b6000813590506100e7816100c1565b92915050565b600060208284031215610103576101026100bc565b5b6000610111848285016100d8565b9150509291505056fea2646970667358221220558e0cec732b754a1b8ab5f61b6ff0360da287720d753179573a9b14709e594764736f6c634300080d0033"
    }).then(data => {
      console.log(data.contractAddress)
      setCa(data.contractAddress);
    });
  }
  //CA : "0x78bd142c5b27c24ed9ae5254aeda8ffb57993a60";

  const abi = [
    {inputs:[],stateMutability:"nonpayable",type:"constructor"},
    {inputs:[],name:"getValue",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},
    {inputs:[{internalType:"uint256",name:"_value",type:"uint256"}],name:"setValue",outputs:[],stateMutability:"nonpayable",type:"function"},
  ];
  

  // 조회 버튼
  const check = async()=>{

    //⭐ web3.eth.abi.encodeFunctionCall(): 스마트 계약 함수 호출을 위한 데이터를 인코딩하는데 사용.
    //⭐ (abi[1],[]) : abi 배열의 인덱스 1인 함수를 호출하고, 인자로는 넘기는게 없다는 뜻
    //⭐ getCodeHash 의 출력값은 0x20965255 이런형식이고, 함수 호출을 위한 데이터가 인코딩된 결과이다.
    //⭐ 이후, 트랜잭션을 보내거나 스마트 컨트렉트 상호작용하는데 사용된다.
    const getCodeHash = await web3.eth.abi.encodeFunctionCall(abi[1],[]);
        console.log(getCodeHash); // 출력값은 0x20965255

        // call 읽기 전용
        // 원격 프로시저 호출 값을 조회
        //⭐ web3.eth.call() : 스마트 컨트렉트에 데이터를 요청.
        const data = await web3.eth.call({
          // to : CA 주소
            to : ca,
          // data : 함수 호출을 위한 데이터
            data : getCodeHash,
        });
        console.log("data",data);

        //⭐ web3.utils 안의 메서드를 확인하고 싶을 때 사용.
        console.log(web3.utils);
        
        //⭐ 스마트 컨트렉스에서 반환 데이터 data를 BigInt 형태로 받고, 10진수로 문자열을 표현.
        const result = await web3.utils.toBigInt(data).toString(10);
        setCnt(result);
        return parseInt(result);
  }
  // 증가 버튼
  const increase = async() =>{
    const _getvalue = await check();
        const setCodeHash  = await web3.eth.abi.encodeFunctionCall(abi[2],[_getvalue + 1]);
        
        // setCodeHash 의 값이 0x552410770000000000000000000000000000000000000000000000000000000000000003
        // 이렇게 나오는데, 0x55241077는 함수의 시그니처(이름과 인수)를 해시화환 값
        // 맨뒤에 value 값은 함수에 전달되는 인수 데이터
        // 가운데 0 들은 데이터의 길이를 일정하기 유지하기 위한 단순 패딩.
        console.log("setCodeHash ",setCodeHash);

        const tx = {
            from : account, //트랜잭션을 발생시키는 계정
            to : ca, // CA 계정 주소
            data : setCodeHash,
            gas : 500000,
            gasPrice : 200000000,
        }
        const data = await web3.eth.sendTransaction(tx);
        console.log(data);
        check();
        balanceBtn();
  }
  // 감소 버튼
  const decrease = async() =>{

    const _getvalue = await check();
        const setCodeHash  = await web3.eth.abi.encodeFunctionCall(abi[2],[_getvalue - 1]);
   
        console.log("setCodeHash ",setCodeHash);

        const tx = {
            from : account, //트랜잭션을 발생시키는 계정
            to : ca, // CA 계정 주소
            data : setCodeHash,
            gas : 500000,
            gasPrice : 200000000,
        }
        const data = await web3.eth.sendTransaction(tx);
        console.log(data);
        check();
        balanceBtn();

    
  }  
  return (
    <div className="App">
      {/* 지갑의 내용을 가지고 계정 조회 */}
      {account || "login please"}
      <br />
      {balance} ETH
      <br />
      <button onClick={balanceBtn}>잔액 조회</button><br></br>
      <h4 style={{marginTop:'50px'}}>송금하기</h4>
      To:<input name="to" onChange={sendInfo} ></input><br></br>
      amount:<input name="amount" onChange={sendInfo}></input><button onClick={sendBtn}>송금</button>

      <br></br>
      <h4 style={{marginTop:'50px'}}>컨트랙트 배포하기</h4>
      <button onClick={contractDeploy}>컨트렉트 배포</button>
      <div id="cnt">{cnt}</div>
      <div style={{marginTop:'50px'}}>
        <button onClick={check}>조회</button>
        <button onClick={increase}>증가</button>
        <button onClick={decrease}>감소</button>
      </div>
    </div>
  );
}

export default App;
