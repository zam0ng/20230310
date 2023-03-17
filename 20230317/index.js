// 오늘은 생성 함수
// 객체를 함수로 만들 때 많이 사용한다
// 뭔가를 생성한다고 한다 
// 객체를 생성할 때 사용하는 함수
// 모양이 어떻게 되나


// createObj는 생성자 함수다.
function createObj(_name, _atk, _def, _speed){
    this.name = _name;
    this.atk = _atk;
    this.def = _def;
    this.speed = _speed;
}

// 이런모양으로 생성자 함수를 만들고
// 이 함수를 가지고 객체를 생성하는 방법
// 새로운 키워드 new라는 키워드를 사용할것
// (동적할당) 메모리 공간을 동적으로 할당해준다.
// 새로운 객체를 생성하기 위한 메모리 공간을
// new 키워드를 사용하면 빈 객체를 만들어주고 생성자함수를 실행시켜서
// this 객체를 참조한다 this가 빈객체
// 키값을 추가해주고 객체를 만들어준다.
// 객체를 뭐라고 보면될까 - 사물 
// 하나의 객체를 사람이라 표현했을 때 
// 사람에 대한 정보를 객체로 만들어놓고 사람을 생성
// 물건을 생성할때도 객체에 그물건의 정보를 키와 값으로 만들어서 하나의 오브젝트화 시킨다.

let obj = new createObj("고블린",100,100,10);
console.log(obj);
console.log(obj.name);
let obj2 = new createObj("트롤",200,100,10);
console.log(obj2);
// 객체 값에 접근하는 방법
console.log(obj2.name);
console.log(obj["name"]);

let arr = [1,2,3,4];
arr.forEach((i)=>{
    console.log(i);
});

for(let i=0; i < arr.length; i++){
    console.log(arr);
}

//for in
// 자동완성 했을 때 object라고 적혀있는 변수에 우리가 보고싶은 
// 객체를 넣어준다.


for (const key in obj){
    // 키값의 순서대로 나온다.
    // 키값이 key변수에 순서대로 담긴다.
    //console.log(key);

    console.log(obj[key]);
    // consol.log(obj.key); -> 이렇게 쓰면 안된다.

}

// 자바스크립트를 이용해 페이지에 동적인 기능을 넣어보자.

// BOM 브라우저 객체
// 브라우저의 기능들을 객체로 사용할수 있게 해준것.
alert("sdsdf");
console.log(window);

// onload 메소드는 브라우저의 랜딩이 끝나고 보여줄 준비가 되었을때 실행되는 함수
// html 문서 랜더링을 끝내고 실행되는 함수
// window onload 라는 키값에 함수 값을 전달.
window.onload=function(){

    console.log("나 페이지 랜더링 끝났어 보여줄 준비 끝");
}

// DOM(문서 객체 모델): 문서를 객체의 모양으로 만든것
// 문서의 접근을 가능하게 해준다.
// DOM은 페이지에 있는 태그들을 객체로 표현한것.

// document 객체에서 태그를 선택하는 방법.
// 객체를 이용해서 찾고싶은 태그를 자바스크립트로 가져와서 사용할 수 있다.

console.log(document);

// getElementById 메소드로 태그의 아이디를 찾아서 태그를 가져올 수 있다.
let div2 = document.getElementById("div1");

// 아이디 값이 있는 태그는 변수처럼 사용해도 된다.
// 아이디는 중복되지 않게
let div3 = div1; 


// #div1 = 아이디가 div1인 친구를 찾아줘.
let div4 = document.querySelector("#div1"); 


console.log(div2);
console.log(div3);
console.log(div4);

// class 는 id처럼 변수처럼 사용 불가능.
//console.log(classdiv2); -> 안됨.

// querySelector는 문서를 읽다가 첫번째로 발견된 태그를 하나만 가져온다.
let div5 = document.querySelector('.classdiv2');
console.log(div5);

// 그래서 클래스 이름이 같은 태그를 가져올 땐  querySelectorAll 태그에 인덱스 번호를 매겨 사용.
let divArr = document.querySelectorAll(".classdiv2");
console.log(divArr[3]);

// 태그 이름 선택자.
// 변수의 내용에 css 선택자를 문자열로 넣어준다.

let div6 = document.querySelector('div');

console.log(div6);

// 텍스트를 태그에 넣어주고 싶다.
// div1 태그의 내용을 추가 할수 있다. <div>여기에 내용이 추가됨</div>
//div1.innerHTML = "gg";

// div1.innerHTML = 여기에 넣는 내용은 알아서 인식해서 css형태로 읽어준다.
div1.innerHTML = "<ul><li>나 태그임</li></ul>";
console.log(div1.innerHTML);

let div7 = document.querySelector(".classdiv2");
div7.innerHTML = "나 classdiv2 태그중 첫번째야";

let div8 = document.querySelectorAll(".classdiv2");
div8[3].innerHTML = "난 4번째 classdiv2를 가진 태그야";


// 버튼에 기능을 넣어보자
// 버튼을 누르면 함수를 실행시켜보자.
function btnFn(){
    // class_div2를 가지고 있는 태그들을 class_div에 배열에 담고 
    let class_div = document.querySelectorAll(".classdiv2");
    // 그 배열값에 forEach로 순회하면서 값을 받았다.
    class_div.forEach(function(i){
        i.innerHTML = "이 문자로 통일 너 버튼 눌렀지";
    })
}   

//html에서 함수를 가져가서 사용하자.