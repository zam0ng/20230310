// 로또 추첨기 만들어보자
//

// 로또 추첨기계

// 로또 번호들이 들어갈 로또 박스
let lottoNum=[];
let res=[];


// 1.로또는 겹치는 숫자가 업어야하고
// 2.숫자가 6개
// 3.나온 숫자들의 결과를 보여주자.

//로또의 번호를 모두 뽑아놓고 가져다 사용하자
// 1~45번까지 반복시키자.
for (let i = 0; i < 46;i++)
{
    //1~45 까지의 숫자를 배열에 담아주고
    lottoNum.push(i);

}

console.log(lottoNum);
for (let i = 0; i < 6;i++)
{
      // //값이 만약에 5.7이면 floor는 5로 만들어준다 버림정수
      //0~44 랜덤 숫자를 뽑고 인덱스로 사용해야겠다
      let rndIndex=Math.floor(Math.random()*lottoNum.length);
      //랜덤으로 뽑은 인덱스를 가지고 lotooNum배열에 인덱스로 전달해서
      //number라는 변수에 담아놓자 (사용하기위해서 달은거 )
      let number=lottoNum[rndIndex];
    //래덤한 값아 또나오지않게 하기위위해서
    //배열에서 갑을 제거하려면 spclce}{
    //시작점 ,그시작점으루부터 몇개를 제거할것인지
    lottoNum.splice(rndIndex,1);
    //인덱스에 해당하는 값하나만 제거
    //해당배열에서 값이 제거되면 길이가 줄어들기떄문에
    //랜덤값을 구하는과정에서도 lottoNum.legth 길이 값이 줄어들기떄문에
    // 정사적으로 작동할수있다.
    res.push(number);
}

console.log("로또 결과는? "+res)

//추첨전에 세팅작업
function lottoInit(){

    //배열에 값을 추가하는과정을 초기화를 해야하는지 
    //확인을 꼭하고 작업을 진행해야한다
    lottoNum=[];
    for (let i = 0; i < 46;i++){
    //1~45 까지의 숫자를 배열에 담아주고
    lottoNum.push(i);
    }
    console.log("init 함수 실행 lotto 세팅끝 "+ lottoNum)
}

function lottoplay(){
    
    res=[];
for (let i = 0; i < 6;i++)
{
      // //값이 만약에 5.7이면 floor는 5로 만들어준다 버림정수
      //0~44 랜덤 숫자를 뽑고 인덱스로 사용해야겠다
      let rndIndex=Math.floor(Math.random()*lottoNum.length);
      //랜덤으로 뽑은 인덱스를 가지고 lotooNum배열에 인덱스로 전달해서
      //number라는 변수에 담아놓자 (사용하기위해서 달은거 )
      let number=lottoNum[rndIndex];
    //래덤한 값아 또나오지않게 하기위위해서
    //배열에서 갑을 제거하려면 spclce}{
    //시작점 ,그시작점으루부터 몇개를 제거할것인지
    lottoNum.splice(rndIndex,1);
    //인덱스에 해당하는 값하나만 제거
    //해당배열에서 값이 제거되면 길이가 줄어들기떄문에
    //랜덤값을 구하는과정에서도 lottoNum.legth 길이 값이 줄어들기떄문에
    // 정사적으로 작동할수있다.
    res.push(number);

}

console.log("로또 결과는? "+res);

}

function main(){
    //로또 세팅하고
    lottoInit();
    //로또 추첨하자
    lottoplay();

}

// 함수 초기화나 play같은 우의 코드처럼 단위별로 기능으러 정리해두었을때
// 단위 테스트가 가능하다.
// 단우별로 버그가없는지 테스트를 해볼수있다.

// 단위별 기능 오류가 없게되면 통합테스트를 진행 전체적 기능이 오류가없는지 
//테스트를 진행할수있다.

// 전체기능이 들어있는 함수를 만들고 함수가 실행될때마다
//해당기능이 동작할수있게 재사용성을 높일수있다.

main();
// 이렇게 단위 통합으로 작업을 정리해주는 습관을 길러야한다.

main();