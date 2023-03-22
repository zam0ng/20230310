// // DOM 내용 추가 document object model

// // 우리가 사용하는 div p h1 태그들

// // DOM 트리
// // DOM 트리 구조 한번 보자.
// // DOM 트리의 기본구조는 노드라고 한다.

// // 문자를 태그사이에 넣어서 태그를 추가하는 방법
document.querySelector('.add_class').innerHTML= "<div>태그내용</div>"

// // 노드에 추가하는 방법

// // div 태그를 생성하는 방법
// // createElement 태그 생성해주는 메소드
// // createElement('태그명') ex> createElement('div'), createElement('span');
let _div = document.createElement('div');
// // 여기까지는 태그를 생성해서 _div변수에 담았고
// // 생성된 태그는 html에는 없고 메모리공간에만 있는것이다.
console.log(_div);

// // 생성한 태그에 내용을 넣고
_div.innerHTML = "<p>내용이 </p><div>있니?</div>";

// // 생성한 태그에 클래스도 추가.
_div.classList.add("new_tag");

// // 태그를 추가하고 싶은 위치에 추가를 해줘야 보인다.
// // 원하는 위치에 추가 하는법
// // 여기서 사용해야할 메소드는 append() 메소드이다.

document.body.append(_div);

// setTimeout(() => {

//     //.add_class라는 클래스에 생성한 _div 태그를 넣는다.
//     document.querySelector('.add_class').append(_div);
    
// }, 2000);

// // append 메소드는 원하는 위치에 태그를 추가할 수 있다.
// // 태그참조.append(생성한 태그 ) = 태그참조 태그의 내용으로 생성한 태그가 추가된다.

// // innerHTML : 문자로 내용이 들어가서 보안이 취약.
// // append : DOM 트리의 노드이기 때문에 보안이 좋다. 태그작업을 세부화 가능

// // 태그의 내용 전부 확인
console.log(_div.innerHTML);

// // 태그의 내용에서 문자만 가져오고 싶으면
// // innerText 를 사용하면 태그 사이의 내용 문자만 가져온다.
console.log(_div.innerText);

// // button 태그 생성
let _button = document.createElement('button');
_button.innerHTML = '눌러봐';
// // 태그를 만들고 우리가 사용한것 처럼 사용하면 되고
// // 내용을 추가해준다음 원하는 위치에 태그를 넣어주면 된다.

_button.onclick = function(){

    // 클릭했을 때 위에서 만든 div 태그를 제거해보자
    // remove() 메소드가 div태그를 제거해준다.
    // remove() 메소드는 원하는 태그를 지울 수 있다.
    // 태그의 자식 태그도 제거할 수 있다.
    _div.remove();
    
    // 태그의 자식태그는 removeChild 메소드를 사용해야한다.
    // _div태그를 body의 내용에서 찾아서 제거 해준다.
    
    
    // let _div2 = document.querySelector("");

    console.log(_div);
    // _div태그를 body의 내용에서 찾아서 제거 해준다.
    // document.body.removeChild(_div);        
}

document.body.append(_button);

// // onclick 이렇게 이벤트명으로 직접 함수를 대입해서 추가하는 방법
// // 함수를 덮어씌운다.
// // 또 다른 방법이 하나 있다.
// // onclick => on만 빼면된다.
// // onscroll => scroll on만 빼고
// // 두번째 매개변수로 실행시킬 함수.
_button.addEventListener('click',function () {

    console.log("나 클릭 구독중");
    
})

_button.addEventListener('click',function () {

    console.log("나도 구독중");
    
})

// // addEventListnet 메소드는 이벤트를 누적시킬 수 있다. 추가가 가능하다.

// // onclick은 이벤트를 덮어쓴다.
// _button.onclick = function() {
//     console.log("나 onclick 이벤트");
// }
// _button.onclick = function() {
//     console.log("나 onclick 이벤트2");
// }

// // 이벤트들 뭐있나?

// // load -페이지와 기타 요소들의 그릴 준비 로딩이 끝났을 때

// // on이 붙으면 어트리뷰트 방식.
window.onload = function(){

}

// load 이벤트 구독
// addEventListener("이벤트의 타입", 함수의 내용)을 사용해서
// 이벤트를 구독해놓는다.
window.addEventListener('load',function(){
     //load이벤트가 발생되면 내용 실행.
})

//onresize : 브라우저의 창 크기가 바뀌면 실행되는 이벤트
window.onresize = function(){
    console.log("창 사이즈 변환");
}

window.addEventListener('resize',function(){
    console.log("창 사이즈 변환");
})

// scroll : 사용자가 태그나 페이지에서 스크롤 했을 때
// 스크롤 값이 없으면 동작 하지 않는다.

// _div 태그에서 스크롤 이벤트가 발생할 때 실행된다.
_div.onscroll = function(){
    console.log('나 스크롤 되니?');
}

// 여기는 body태그에서 스크롤 이벤트가 발생할 때 실행된다.
document.body.onscroll = function(){

}

// 키보드 이벤트들
// onkeydown : 사용자가 키보드를 눌렀을 때 누르자마자 발생.
window.onkeydown = function(){
    console.log("나 키보드 누르마자");
}

// onkeyup : 사용자가 키보드를 누르고 땠을 때
window.onkeyup = function(){

    console.log("키보드 누르고 땠어");
}

// onkeypress : 키보드를 누르고 있을 때 (키를 누르고 있으면 계속 실행)

window.onkeypress = function(){
    console.log("키보드를 누르고 있는 동안");
}

// 마우스 이벤트
// click : 사용자가 해당 태그를 클릭했을 때 발생하는 이벤트

// window.onclick = function(){
//     console.log("나 클릭");
// }

//dbclick : 더블 클릭 했을 때 실행되는 함수
window.ondblclick = function(){
    console.log("나 더블클릭");
}

// mousedown : 마우스를 누르자마자 실행되는 이벤트
window.onmousedown = function(){
    console.log("마우스 키다운");
}

// mouseup : 마우스를 누르다가 땠을 때 실행되는 이벤트
window.onmouseup = function(){
    console.log("마우스 업");
}

// onmousedown과 onmouseup
// 마우스 키를 누르고 이동한뒤 키를 땠을 때 좌표를 계산해서 동작해야하는 기능을 만들 때 사용
// 웹페이지에서 누르고 옆으로 넘기는 슬라이드 구현할 때

//mousemove : 마우스가 태그위에서 이동 되는 동안
window.onmousemove = function(){
    console.log("마우스 이동중 입니다.");
}

// mouseenter : 마우스를 태그에 올려졌을 때 실행되는 이벤트

// hover 같네
let _box = document.querySelector(".box");
_box.onmouseenter = function(){
    console.log("마우스가 올려짐");
}

//mouseleave : 마우스가 태그위에서 나갔을 때 실행되는 이벤트
_box.onmouseleave = function(){
    console.log("마우스가 나가짐");
}

// 개발할 때 pc,모바일 이렇게 웹을 만들텐데
// 모바일 환경에서 실행되는 이벤트

// 모바일 터치
// touchstart : 화면을 터치한 순간
window.ontouchstart =function(){
    console.log("모바일 터치됐어");
}

//touchend:화면을 터치하다가 때면
window.ontouchend= function(){
    console.log("터치하다가 땠어");
}

// touchmove :화면을 터치하고 이동할 때
window.ontouchmove= function(){
    console.log("터치하고 이동중");
}

//이벤트가 실행될때 매개변수로 해당 이벤트의 내용이 전달됩니다.
// click의 이벤트를 보자
_box.onclick = function(event){
    // 이벤트의 내용들이 이벤트가 실행되면 이벤트의 내용이 값으로 넘어온다.
    console.log(event);
    //해당 이벤트 일어난 타겟
    //지금은 window에 click 이벤트가 일어나면 실행되는 기능을 실행시켰고
    //event.target 클릭된 태그를 가져온다.
    console.log(event.target);
}

//마우스의 위치를 가져와바야겠다.

// window.onmousemove =function(e){

//     //이벤트의 타입을 확인해보자
//     console.log(e.type);
    
//     //해당 이벤트 일어나면 마우싀 좌표 x값
//     // 좌표값은 픽셀 단위다.
//     // 0~브라우저 너비크기
//     console.log(e.pageX);
//     //이벤트 발생시 마우스 좌표 Y값
//     // 0~브라우저 높이 크기
//     console.log(e.pageY);
// }

window.onkeydown =function(e){
    //e.keyCode

    console.log(e.keyCode);
    // 아스키코드로 표현된다. 

    if(e.keyCode==65)
    {
        console.log("A키를 입력받았다.");
    }
}

// 기본 동작을 취소하는 방법
let _button2 = document.querySelector(".btn_class");
_button2.onclick = function(e){
    // 기본 동작이 제거된다.
    // 원래 버튼 submit 기본속성이 새로고침되는건데 
    //preventDefault로 그 기본속성을 제거해서 새로고침이 되지 않는다.
    e.preventDefault();
}