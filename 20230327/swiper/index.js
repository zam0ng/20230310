// 클릭의 시작 위치를 가지고 있고
// 끝나면 끝난 좌표와 비교해서 
// 오른쪽 으로 스와이프 된건지, 왼쪽으로 된건지 부터 확인하고
// 인덱스를 기준으로 움직을 제어해보자.

// 마우스 시작 클릭 지점 X좌표
let _start;
// 진행중인 인덱스
let _index = 1;
let isActive = false;

let _swiper = document.querySelector(".swiper");
let _swiperContent = document.querySelector(".swiper-content");
let {length} = document.querySelectorAll(".swiper-item");
let _prev = document.querySelector(".prev");
let _next = document.querySelector(".next");
let ssc1 = document.querySelector(".sc");


console.log(length);

// getComputedStyle 적용된,스타일의 값을 가져올 수 있다.
// 적용된 스타일을 가져올 태그를 매개변수로 전달
let _swiperwidth = parseInt(getComputedStyle(_swiper).width);
console.log(_swiperwidth);

_swiper.addEventListener("mousedown",function (e) {
    console.log("클릭 시작");
    console.log(e);
    _start = e.clientX;
    console.log(_start);
});

_swiper.addEventListener("mouseup",function(e){
    if(isActive ==false){

        isActive =true;
    let b = document.querySelector(".swiper-content");
    
    
    if(e.clientX -_start <-100){
        _swiperContent.style.transition = "1s";

        console.log("끝 좌표가 더 작아");
      
        if(_index < (length-1 ))
            _index++;
           b.classList.remove("sc");
        swiperMove();


        if(_index == (length-1)){
            _index =1;

            setTimeout(() => {
                
                b.classList.add("sc");
                swiperMove();
                _swiperContent.style.transition = "none";

            },1000);

        }
        
        
    }
    else if(e.clientX-_start >100){
        _swiperContent.style.transition = "1s";

        console.log("끝 좌표가 더 커");

        if(_index >0)
            _index--;
            swiperMove();
    }
        if(_index == 0){

            _index =4;
            setTimeout(() => {

                _swiperContent.style.transition = "none";
                swiperMove();
                
            }, 1000);
        }

    setTimeout(() => {
        isActive =false;
    }, 1000);

}
    

});

//인덱스를 기준으로 움직임
function swiperMove(){

        _swiperContent.style.left = -(_index * _swiperwidth )+ "px";
}
swiperMove();

_prev.addEventListener("click",function(){
   

    let b= document.querySelector(".swiper-content");

    if(isActive==false)
    {   
        isActive = true;

        if(_index > 0)
        {
        _index--;
        swiperMove();
        
        b.classList.remove('sc');
        _swiperContent.style.transition = "1s";}
    

        if(_index ==0){

            setTimeout(() => {
                // b.classList.add('sc');
                _swiperContent.style.transition = "none";
                _index =4;
                
                swiperMove();
                
            }, 1000);

        }

        setTimeout(() => {
            isActive = false;
        }, 1000);
    }
});

_next.addEventListener("click",function(){
    
    if(isActive==false)
    {   
        isActive = true;
    if(_index < (length-1))
    _swiperContent.style.transition = "1s";
    console.log(length);
    _index++;
    swiperMove();
    let b= document.querySelector(".swiper-content");
    b.classList.contains("sc");
    b.classList.remove('sc');


    if(_index == (length -1)){
        
        let b= document.querySelector(".swiper-content");
        _index=1;    

        setTimeout(() => {

            _swiperContent.style.transition = "none";
            swiperMove();

        }, 1000);
        
    }
        setTimeout(() => {
            isActive = false;
        }, 1000);
    }
});