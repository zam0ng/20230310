import { useEffect, useState } from "react";
import useWeb3 from "./hooks/web3.hook";
import abi from "./abi/Baseball.json";

const App = ()=>{

    const {user,web3} = useWeb3();
    const [ticket, setTicket] = useState("0");

    // 우리가 입력해서 매개변수로 요청할 값, 우리가 정한 정답
    const [value , setValue] = useState("");
    
    //게임을 한사람들이 어람나 이더를 쌓아놨는지
    // 정답 맞추면 다 그사람 것.
    const [reward, setReward] = useState("0");

    // 게임을 몇판이나 사람들이 진행했는지
    const [progress, setProgress] = useState("0");

    // 컨트렉트 배포자만 알 수 있는 답
    const [random, setRandom] = useState("000");

    // 게임이 진행중인지 여부
    const [message, setMessage] = useState("");

    const [baseballCountract, setBaseballCountract] = useState(null);

    const [sender ,setSender] = useState("");

    useEffect(()=>{
        if(web3 !==null){
            if(baseballCountract === null){
                const Baseball = new web3.eth.Contract(
                    abi, "0xC8D1381287B2e774a810B811E31eb2B6f04b0c23", {data : ""})
                
                setBaseballCountract(Baseball);
            }
        }
    },[web3]);

    const getTicket = async() => {
        if(baseballCountract === null) return;
        const result = web3.utils.toBigInt(await baseballCountract.methods.getTicketPrice().call()).toString(10);

        setTicket(await web3.utils.fromWei(result, "ether"));
    };

    const getReward = async() =>{
        if(baseballCountract === null) return;
        const result = web3.utils.toBigInt(await baseballCountract.methods.getReward().call()).toString(10);

        setReward(await web3.utils.fromWei(result, "ether"));
    }

    const getPlaying = async() =>{
        const playing = web3.utils.toBigInt(await baseballCountract.methods.getPlaying().call()).toString(10);
        setMessage(playing);
    }

    const getProgress = async () =>{
        const progress = web3.utils.toBigInt(await baseballCountract.methods.getProgress().call()).toString(10);
        setProgress(progress);
    };
    
    const getRandom = async () =>{
        try {
            const Random = web3.utils.toBigInt(await baseballCountract.methods.getRandom().call({
                from : user.account,
            })).toString(10);
            setRandom(Random);
            
        } catch (error) {
            console.log(error.data.message);
            if(error.data.message.includes("aaddmmiinn")){
                alert("어드민만 숫자를 볼 수 있음.")
            }
        }
        
    }

    const gameStart = async() => {
        if(value.length < 3){
            alert("숫자 3자리 입력해라");
            return;

        } 
        await baseballCountract.methods.gameStart(Number(value)).send({
            from : user.account,
            // value : 스마트 계약에 이더를 송금할 때, 사용되는 속성
            value : web3.utils.toWei("5", "ether")
        })
        render();

    }
    const gameRestart = async() =>{
        try {

            await baseballCountract.methods.gameRestart(Number(message)).call({
                from: user.account,
            });

            console.log("눌림?");
            console.log(message)
            await baseballCountract.methods.gameRestart(Number(message)).send({
                from: user.account,
            });
            render();
        } catch (error) {
            console.log(error.data.message);
            if (error.data.message.includes("no endgame")) {
                alert("게임이 종료되어야 재시작 가능");
            }
        }
    }
    const getSender = async () =>{
        const Sender = await baseballCountract.methods.getSender().call({
            from : user.account,
        });
        setSender(Sender);
    }
    

    const render = async () =>{
        getTicket();
        getReward();
        getPlaying();
        getProgress();
    }


    useEffect(()=>{
        if(baseballCountract !=null){
            render();
        }
    },[baseballCountract])

    if(user.account === null) return " 지갑 연결 하세요. "
    return(
        <>  
            <div>{user.account}</div>
            <div>티겟 가격 : {ticket}</div>
            <div>현재 게임 진행도 : {progress} / 5</div>
            <div>총 상금 : {reward}</div>
            <div>진행상태 : {message == 0 ? "게임중 ": "게임종료"}</div>
            <div>sender : {sender}</div>

            <input onChange={(e)=>{setValue(e.target.value)}}></input>
            <div>정답 : {random} </div>
            <button onClick={gameStart}>게임시작</button>
            <button onClick={getRandom}>어드민</button>
            <button onClick={gameRestart}>게임 재시작</button>
            <button onClick={getSender}>sender</button>
        </>
    );

};

export default App;