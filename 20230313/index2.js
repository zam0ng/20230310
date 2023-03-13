// 우리가 만들어볼거 업다운 게임
// 숫자 맞추기


// 1. 플레이어가 있고 컴퓨터가 있고
// 2. 플레이어는 선택할수 있게하고, 컴퓨터는 랜덤값
// 3. 플레이어가 선택할 수 있는 제어문
// 4. 게임의 종료 시점을 정해야겠다
let playSelect;

// 1~ 100의 랜덤숫자
let comSelect = parseInt(Math.random()*99+1);

let count = 0; // 시도를 몇번할건지

let max = 100; // 플레이어가 선택이 가능한 최대의 숫자.
let min = 0; // 플레이어가 선택이 가능한 최소의 숫자.

let subText = ""; // 컴퓨터가 알려줄 문구
let maxCount = parseInt(prompt("게임 몇번할래?")); //게임횟수 이걸로

// 반복 되어야 하니까
while(playSelect !==comSelect && count < maxCount){
    // ES6 에서 문자열을 사용할 때 편하게 사용할 수 있는 기법
    // 템플릿 리터럴 문자를 다룰때 줄바꿈같은걸 편하게 사용할 수 있게 해준다.
    // `백틱
    // "안녕"+playerSelect
    // `${변수}문자열`
    playSelect = prompt(`${subText}\n숫자를 입력하세요\n 
                        최소: ${min} | 최대 : ${max} | 남은횟수 : ${maxCount - count}`);
    
    //playSelect = parseInt(playSelect);

    // 입력된 값이 숫자인지 확인? 문자쓰면 어떻게?
    // isNaN 숫자가 아닌 값을 입력했는지?
    if(isNaN(playSelect)){

        subText = "숫자 입력 하셈";
        //다시 게임이 시작되야 하기때문에 아래코드는 읽지 않게 할수 없을까?
        continue; // continue 는 그 줄부터 밑으로 읽지 않고 반복문 시작점으로 돌아간다.
    }
    // 입력값이 최소와 최대 사이의 값인지 확인
    if(min >=playSelect || max <= playSelect){
    
        subText = `너 입력값 확인해 최소:${min} | 최대:${max}`;
        continue;
    }

    // 게임의 로직 시작
if(playSelect > comSelect){
    // max 최대값을 다시 겹치지 않게 입력해준다.
    max = playSelect;
    subText = "다운";
}

    else if(playSelect < comSelect){
        //min 최소값을 다시 겹치지 않게 입력해준다.
        min = playSelect;
        subText = "업";
    }
    else{
        count = count +1;
        console.log(`${count}번 시도해서 너 맞춤`);
        //게임 끝났음
        break;
    }
    
    count++;
    if(count >=maxCount){
        console.log("게임오버")
    }
}
// 1. 가위바위보 게임을 20판 게임 / 게임 시작전에 돈걸고 입력하는데 2000원 이상 잘못걸면 다시입력 / 초기 금액 2만원
// 2. 가위바위보 이기면 묵찌빠 해서 이기면 배팅한 금액의 *2로 판돈 줍니다.
// 지면 마이너스 배팅한 금액의 *2 , 종료조건 20판 다끝나면 or 돈다 잃었을때. // 소지금이랑 몇판했는지 알려주세요





