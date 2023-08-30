import { useEffect,useState} from 'react';
import './App.css';
import Block from "./components/Block"
import { img01,img02,img03 } from './img';
// 추억의 자바스크립트
// 가위바위보
// 플레이어 하나 컴퓨터 하나
// 컴포넌트로 만들고
// 컴퓨터는 랜덤 가위 바위 보 중ㅇ 하나를 내고
// 플레이어는 선택할 수 있게

// 플레이어 컴퓨터
// 가위 / 가위 = 무승부
// 가위 / 바위 = 패
// 가위 / 보 = 승

// 바위 / 가위 = 승
// 바위 / 바위 = 무승부
// 바위 / 보  = 패

// 보 / 가위 = 패
// 보 / 바위 = 승
// 보 / 보 = 무승부

function App() {

  // 컴퓨터와 유저가 사용할 가위바위보의 객체를 하나 만들어주자
  // 선택값을 담아 놓을 객체

  // select 객체 안에 데이터가 다 들어있으면
  // select 동작을 하는 프로그램을 작성할 때
  // select객체안에 있는 값은 전부 select동작을 하기위해 만든 것이라고 알 수 있다.

  // select 컴퓨터와 유저가 가위 바위 보 를 냈을 때 필요한 데이터를 모아둘 객체
  const select ={
    scissors : {
      name : "가위",
      img : img01
    },
    rock : {
      name : "바위",
      img : img02
    },
    paper : {
      name : "보",
      img : img03
    },
  }
  // 유저가 선택한 값은 주시하자 선택하면 데이터 바뀐상태로 다시 그려줘야 하기 때문에
  // 유저의 선택 state
  const [userSelect, setUserSelect] = useState(null);




  
  // 컴퓨터의 선택 값을 담은 useState
  const [comSelect, setComSelect] = useState(null);

  // 승패 결과를 담을 useState
  const [result, setResult] = useState("");

  function userClick(_select){
    
    //선택한 객체를 상태변수에 담아주자
    // ⭐⭐⭐_select를 문자열로 받았기때문에 select._select 가 아닌 select[_select]로 객체의 안에 값을 찾아줘야한다.
    setUserSelect(select[_select]);

    //플레이어 선택 이후에 컴퓨터도 랜덤한 값을 가지고 가위 바위 보를 선택 시키자.
    //컴퓨터는 랜덤으로 선택을 시켜야하는데
    // select 라는 객체에서의 객체의 키값만 가져와 배열로 반환
    
    // select 객체의 키값만 가져와서 arr에 저장
    let arr = Object.keys(select);
    console.log(arr); // (3) ['scissors', 'rock', 'paper']
  
    let ComRandom = Math.floor(Math.random() * 3);

    // arr= ['scissors', 'rock', 'paper'];
    // arr[ComRandom]
    
    setComSelect(select[arr[ComRandom]]);

    let player = select[_select]
    // let player = userSelect -> 리액트의 상태업데이트는 비동기때문에 set 직후에는 업데이트 값이 적용이 안된다.

    let computer = select[arr[ComRandom]]
    if(player.name === computer.name){
      setResult("무승부");
    }
    else if(player.name =="가위"){
      let result = computer.name == "보"? "이겼음":  "졌음";
      setResult(result);
    }

      else if(player.name =="바위"){
        let result = computer.name == "가위"? "이겼음" : "졌음";
        setResult(result);
      }
      else if(player.name =="보"){
        let result = computer.name == "가위"? "졌음" : "이겼음";
        setResult(result);
      }
  }
  
  useEffect(()=>{
    console.log(userSelect)
  },[userSelect])

  return (
    <>
      <div className="App">
        <Block data={userSelect} name={"유저"} result={result}/>
        <Block data={comSelect} name={"컴퓨터"} result={result}/>
      </div>
      <div>
        {/* 버튼은 여기에 */}
        <button onClick={()=>{
          userClick("scissors")
        }}>가위</button>
        <button onClick={()=>{
          userClick("rock")
        }}>바위</button>
        <button onClick={()=>{
          userClick("paper")
        }}>보</button>
      </div>
    </>
  );
}

export default App;
