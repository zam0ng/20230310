// 가위바위보 게임을 20판 게임 ok
// 초기 금액 2만원 ok
// 종료조건 20판 다끝나면 or 돈다 잃었을때. ok
// 소지금이랑 몇판했는지 알려주세요 ok
// 게임 시작전에 돈걸고 입력하는데 2000원 이상 잘못걸면 다시입력 ok
// 가위바위보 이기면 묵찌빠 해서 이기면 배팅한 금액의 *2로 판돈 줍니다.
// 지면 마이너스 배팅한 금액의 *2 , 
let comValue ;
let playy = true; // true로 바꿔야함
let value;

function battle(){
    comValue = parseInt(Math.random() * 3);
    alert(comValue);

    value = prompt("묵, 찌, 빠 입력"); // 플레이어 묵,찌,빠 입력
    
    switch (comValue) {
        case 0:
          comValue = "묵";
          return;
        case 1:
          comValue = "찌";
          return;
        case 2:
          comValue = "빠";
          return;
    }
}
    
function sun(num){ //비겼을때 0, 플레이어 선공 1, 컴퓨터 선공 2
     
    if(num==0){ 
            alert("비겼습니다. 다시 고르세요");
            return;
    }
    else if(num==1){
            alert("플레이어 선공입니다.");
            playerVictory = 1;
            playy =false;
            return;
    }
    else if(num==2){
            alert("컴퓨터 선공입니다.");
            comVictory = 1;
            playy =false;
            return;
    }
}
function reverse(){ //컴퓨터로 선공바뀜
                comVictory = 1;
                playerVictory =0;
}

// 시도할수 있는 게임 20판
let maxGame =3;
//시도한게임
let gameCount = 0;
// 남은게임
let restGame = maxGame -gameCount;
// 내 초기 소지금 =2만원;
let myMoney = 20000;
// 컴퓨터가 알려줄 문구
let battingMoney ;
// 남은돈
let restMoney = myMoney - battingMoney ;
let subText;
let playerVictory;
let comVictory;

//나머지게임이 0회가 아닐때랑 내돈이 0원이 아닐때는 계속 반복한다
while(restGame !==0 || myMoney !==0){
    
    if(maxGame-gameCount==0){
        alert(`\n남은 게임횟수가 없어 더이상 게임할 수 없습니다.\n 남은 게임 수: ${maxGame-gameCount} | 
        현재까지 한 게임 수: ${gameCount} | 현재 남은돈 : ${myMoney} `);
        break;
    }
    else if(maxGame-gameCount==0){
        alert(`\n남은 소지금이 없어 더이상 게임할 수 없습니다.\n 남은 게임 수: ${maxGame-gameCount} | 
        현재까지 한 게임 수: ${gameCount} | 현재 남은돈 : ${myMoney} `);
        break;
    }

let battingMoney = prompt(`${subText}\n 배팅금액을 입력하세요 (2000원이상) \n 남은 게임 수: ${maxGame-gameCount} | 
                    현재까지 한 게임 수: ${gameCount} | 현재 남은돈 : ${myMoney} `);

battingMoney = parseInt(battingMoney);

// 배팅금이 2천원 미만 일경우
if(battingMoney < 2000){
    alert(`${subText}\n 배팅금액을 2000원이상으로 입력하세요\n`);
    continue;
}

while(playy){

// 컴퓨터 묵, 찌,빠 입력 받아 0,1,2로 변환
    battle();

switch (value) {
    case "묵": 
        if(comValue == "묵"){ //내가 묵을냈고, 컴퓨터가 묵일 떄
            sun(0);
            continue;
        }
        else if(comValue == "찌"){ //내가 묵, 컴퓨터 찌
            sun(1);
            break;
        }
        else if(comValue == "빠"){ //내가 묵 컴퓨터 빠로 졌지만 결국 다시하는건 똑같음
            sun(2);
            break;
        }
    case  "찌":
        if(comValue =="묵"){ // 나 찌 컴터 묵
            sun(2);
            break;
        }
        else if(comValue=="찌"){
            sun(0);
            continue;
        }
        else if(comValue=="빠"){
            sun(1);
            break;
        }
    case "빠":
        if(comValue =="묵"){
            sun(1);
            break;
        }
        else if(comValue=="찌"){
            sun(2);
            break;
        }
        else if(comValue=="빠"){
            sun(0);
            continue;
        }
    }
}
let playyy = true; // true로 바꿔야함
        while(playyy) { // 플레이어와 컴퓨터가 다시 묵찌빠 중에 하나 재선택
            
            battle();
            
            if (comValue == value){ // 비길 때 까지해야되니깐 같지 않으면 계속 실행하게
                if(playerVictory===1){
                    alert("플레이어 승리");
                    playyy =false;
                    myMoney = (myMoney-battingMoney) + (battingMoney *2);
                    gameCount++;
                    break;
                }
                else if(comVictory===1){
                    alert("컴퓨터 승리");
                    myMoney = (myMoney-battingMoney) - (battingMoney *2);
                    playyy =false;
                    gameCount++;
                    break;
                }
            }
            else if(value=="묵" && comValue=="찌"){
                    continue;
            }
            else if(value=="찌" && comValue =="빠"){
                    continue;
            }
            else if(value=="빠" && comValue =="묵"){
                    continue;
            }
            else if(value=="묵" && comValue =="빠"){
                reverse();
                continue;
            }
            else if(value=="찌" && comValue =="묵"){
                reverse();
                continue;
            }
            else if(value=="빠" && comValue =="찌"){
                reverse();
                continue;
            }
        } 
}