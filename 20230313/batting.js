// 가위바위보 게임을 20판 게임 ok
// 초기 금액 2만원 ok
// 종료조건 20판 다끝나면 or 돈다 잃었을때. ok
// 소지금이랑 몇판했는지 알려주세요 ok
// 게임 시작전에 돈걸고 입력하는데 2000원 이상 잘못걸면 다시입력 ok

// 가위바위보 이기면 묵찌빠 해서 이기면 배팅한 금액의 *2로 판돈 줍니다.
// 지면 마이너스 배팅한 금액의 *2 , 


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

let playy = true; // true로 바꿔야함

while(playy){
    
// 컴퓨터 묵, 찌,빠 입력 받아 0,1,2로 변환
let comValue = parseInt(Math.random() * 3);
alert(comValue);


switch (comValue) {
    case 0:
      comValue = "묵";
      break;
    case 1:
      comValue = "찌";
      break;
    case 2:
      comValue = "빠";
      break;
  
    default:
      break;
  }



let value = prompt("묵, 찌, 빠 입력"); // 플레이어 묵,찌,빠 입력


switch (value) {
    case "묵": 
        if(comValue == "묵"){ //내가 묵을냈고, 컴퓨터가 묵일 떄
            alert("비겼습니다. 다시 고르세요");
            continue;
        }
        else if(comValue == "찌"){ //내가 묵, 컴퓨터 찌
            alert("플레이어 선공입니다.");
            playerVictory = 1;
            playy =false;
            break;
        }
        else if(comValue == "빠"){ //내가 묵 컴퓨터 빠로 졌지만 결국 다시하는건 똑같음
            alert("컴퓨터 선공입니다.");
            comVictory = 1;
            playy =false;
            break;
        }

    case  "찌":
        if(comValue =="묵"){ // 나 찌 컴터 묵
            alert("컴퓨터 선공입니다.");
            comVictory = 1;
            playy =false;
            break;
        }
        else if(comValue=="찌"){
            alert("비겼습니다. 다시 고르세요");
            continue;
        }
        else if(comValue=="빠"){
            alert("플레이어 선공입니다.");
            playerVictory =1;
            playy =false;
            break;
        }
    case "빠":
        if(comValue =="묵"){
            alert("플레이어 선공입니다.");
            playerVictory = 1;
            playy =false;
            break;
        }
        else if(comValue=="찌"){
            alert("컴퓨터 선공입니다.");
            comVictory =1;
            playy =false;
            break;
        }
        else if(comValue=="빠"){
            alert("비겼습니다. 다시 고르세요");
            continue;
        }
    
    }
}

let playyy = true; // true로 바꿔야함
        while(playyy) { // 플레이어와 컴퓨터가 다시 묵찌빠 중에 하나 재선택
            
            let comValue2 = parseInt(Math.random() * 3);
            alert(comValue2);

            switch (comValue2) {
                case 0:
                  comValue2 = "묵";
                  break;
                case 1:
                  comValue2 = "찌";
                  break;
                case 2:
                  comValue2 = "빠";
                  break;
              
                default:
                  break;
              }
              let value2 = prompt("묵, 찌, 빠 입력");
            
            if (comValue2 == value2){ // 비길 때 까지해야되니깐 같지 않으면 계속 실행하게
                if(playerVictory===1){
                    alert("플레이어 승리");
                    playyy =false;
                    myMoney = myMoney + (battingMoney *2);
                    gameCount++;
                    break;
                }
                else if(comVictory===1){
                    alert("컴퓨터 승리");
                    myMoney = myMoney - (battingMoney *2);
                    playyy =false;
                    gameCount++;
                    break;
                }
            }
            else if(value2=="묵" && value2=="찌"){
                    continue;
            }
            else if(value2=="찌" && value2 =="빠"){
                    continue;
            }
            else if(value2=="빠" && value2 =="묵"){
                    continue;
            }

            else if(value2=="묵" && value2 =="빠"){
                comVictory = 1;
                playerVictory =0;
                continue;
            }
            else if(value2=="찌" && value2 =="묵"){
                comVictory =1;
                playerVictory =0;
                continue;
            }
            else if(value2=="빠" && value2 =="찌"){
                comVictory =1;
                playerVictory =0;
                continue;
            }
        } 
}







