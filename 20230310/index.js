// 우리가 제일 많이 사용할 구문
// 개발자는 객체를 잘 사용하면 된다.

// if문
if(false) {
    //if의 ()안에 true, false의 차이로 실행을 시킨다.
    console.log();
    //불이 꺼져있으면 실행될일이 없다. ()안이 true 불이 켜진다.
    //여기 내용을 실행시키고 싶을때도 있고, 않을때도 있는데
    // 연산자를 넣어주면 값을 비교하면서 실행시키거나 실행 안되게 할 수 있다.


}

let age=2;
let age2=2;

if(age < age2) {
     
    console.log("내 나이가 너보다 작구나");
}

else if(age==age2){

    console.log("우리 나이가 같구나");
}
// false 면 실행 시키고 싶을 땐
else{
     
    console.log("내 나이가 너보다 크구나");
}

// 반복문 
// 여러번 반복 실행해야할 구문이 있을 때 사용한다.
// 변수 선언하고, 값을 확인하고, for문 안에 있는 구문을 실행하고 나서 값을 증가
// 후에 조건문에 성립하지 않으면 반복문 종료
// let b =5;

// for(let a=1; a< b; a++){
//     console.log(a);
// }

// 반복문을 가지고 구구단 만들기
let aa ;
let bb;
for(aa= 1; aa <=9; aa++){
    for (bb=1; bb<=9 ; bb++){   
        console.log(aa+'*'+bb +'='+(aa*bb));
    }
}
