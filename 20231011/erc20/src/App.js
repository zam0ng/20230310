import { useEffect, useState } from "react";
import useWeb3 from "./hooks/web3.hook";
import abi from "./abi/Poketmon.json";

const App =()=>{
  
  const {user, web3} = useWeb3();
  const [contract,setContract] =useState(null);
  const [token,setToken] = useState("0");

  const [accounts , setAccounts] = useState([]);
  const [users, setUsers] = useState([]);
  const [have,setHave] =useState([]);
  const [selectNum , setselectNum] = useState();
  const [mypoketmon, setMypoketmon] = useState([]);
  const [send, setSend] = useState("");
  const [arr,setArr]= useState("");
  const [testa, setTesta] = useState("");

  useEffect(()=>{
    if(web3 !== null){
      if(contract) return;
      const poketmon = new web3.eth.Contract(abi,"0x36A5F8095D3968884ac1B54C535e609EC5a32E1d",{data:""});
      setContract(poketmon);
    }
  },[web3]);

  // 해당 지갑의 포켓몬 조회
  const getPoketmon = async (account) =>{
    const result = contract.methods.getPoketmon().call({
      from : account,
    });
    return result;
  };

  // 지갑의 토큰량 조회
  const getToken = async(account) =>{
    if(!contract) return;

    let result = web3.utils.toBigInt(await contract.methods.balanceOf(account).call()).toString(10);

    result = await web3.utils.fromWei(result, "ether");
    console.log(result);

    return result;
  };

  // 메타마스크 계정들 조회
  const getAccounts = async ()=>{
    const accounts = await window.ethereum.request({method : "eth_requestAccounts"});
    console.log("acc",accounts);
    const _accounts = await Promise.all(
      accounts.map(async(account)=>{
        const token = await getToken(account);
        const poketmon = await getPoketmon(account);

        // 추가로 포켓몬들도 어떤 포켓몬을 가지고 있는지 추가할 부분

        return {account, token, poketmon};
      })
    )
    setToken(await getToken(accounts[0]))
    setAccounts(_accounts);
  };
  // 1. 포켓몬 랜덤으로 뽑을수 있는 함수를 만들고(버튼)
  const randomPoketmon = async() =>{
    console.log("눌림");
    console.log(user.account);
    
    await contract.methods.buyPoketmon().send({
      from : user.account,
    })
    getAccounts();
    havePoketmon();
    myPoketmonFn();
  }
  // 2. 포켓몬 한번이라도 뽑은 계정들만 모아놓고 어떤 포켓몬을 가지고 있는지

  const havePoketmon = async()=>{
    let answer = [];
    const result = await contract.methods.getPoketmonUsers().call()
    result.forEach(element => {
      answer.push(element[0]);
    });
    setUsers(answer);
    const _have = await Promise.all(
      answer.map(async(element) => {
      const have = await getPoketmon(element);
      return {element, have};
    })
    )
    setHave(_have);
  }

  //⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 
  // 3. 포켓몬 거래(포켓몬 소유권 넘길수 있는 함수 만들기)
  const selectPoketmon = async(number)=>{
    setArr(number);
    setselectNum(number);
  }
  

  // 현재 접속중인 계정 포켓몬 가져오기
  const myPoketmonFn = async()=>{
    console.log(user.account);
    const result = await getPoketmon(user.account);
    console.log("my-------",result);

    setMypoketmon(result);
  }

  const sendValue =(e)=>{
    console.log(e.target.value);
    setSend(e.target.value);
  }
  const sendBtn =async()=>{
    console.log(send);

    const data = await contract.methods.sendPoketmon(send,arr).send({
      from : user.account,
    })
    getAccounts();
    havePoketmon();
    myPoketmonFn();
    console.log(data);
  }
  const ta =async()=>{
    const result = await contract.methods.test().call();
    console.log("ewqrjwoqejroi",result);
    setTesta(web3.utils.toBigInt(result).toString(10));
  }
  useEffect(()=>{
    if(!contract) return;
    console.log("1111111")
    getAccounts();
    havePoketmon();
    myPoketmonFn();
  },[contract])

  if(user.account === null) return "메타마스크 설치하셈."
  return(
    <div style={{display:"flex"}}>
      <div style={{width:"50%"}}>
        <h2>토큰 보유량 : {token}</h2>
        <button onClick={randomPoketmon}>포켓몬 랜덤 뽑기</button>
        {accounts.map((item, index) => (
          <div key={index}>
            계정 {item.account} : 토큰 값 : {item.token}
            <div>포켓몬들 <br></br>
              {item.poketmon.map((item, index) => (
                <div key={index}>
                  {item.name} : <img width={50} src={item.url} alt="" />
                </div>
              ))}
            </div>

          </div>
        ))}

        <h2>포켓몬 트레이너</h2>
        {have.map((item) => (
          <>
            <h4>{item.element} 의 포켓몬 :</h4>
            <div >{item.have.map((el, index) => (
              <>
                <span key={index + 1}>
                  {el.name} : <img width={50} src={el.url}></img>
                </span><span>,</span>
              </>

            ))}

            </div>
            <br></br>
          </>
        ))}
      </div>
      <div>

        <h2>포켓몬 전송</h2>

        <div style={{height:"130px"}}>
          <h4 style={{ width: "80px", backgroundColor: "white", marginLeft: "10px", textAlign: "center" }}>내 포켓몬</h4>

          <div>
            {mypoketmon.map((el, index) => (
              <>
                <span key={index} onClick={() => {selectPoketmon(index)}} style={{ border: ` ${selectNum === index ? "3px solid red" : "1px solid gray"}` }}>
                  {el.name} : <img width={50} src={el.url}></img>
                </span><span>,</span>
              </>
            ))}

          </div>

        </div>

        <div>
          <label>보낼 사람 주소 : </label>
          <input onChange={sendValue} style={{width:"350px"}}></input>
          <button onClick={sendBtn}>전송하기</button>
        </div>

        <button onClick={ta}>테스트 버튼</button>
        <div>결과 : {testa}</div>

      </div>
      
    </div>
  )
}

export default App;