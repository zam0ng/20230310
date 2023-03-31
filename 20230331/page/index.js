
console.log(document.querySelector(".text-wrap h2").getBoundingClientRect().top+ window.pageYOffest);
let posY = document.querySelector(".text-wrap h2").getBoundingClientRect().top + window.pageYOffset; 
window.onscroll = function(){
    // 스크롤 했을 때
    
    console.log('스크롤 됨');
    console.log(window.scrollY);
    if(posY <window.scrollY){
        document.querySelector('.header').classList.add("isActive");
    }
    else{
        document.querySelector('.header').classList.remove("isActive");
    }
}
