let posY = document.querySelector("#skilid").getBoundingClientRect().top
console.log(posY);


window.onscroll = function(){
    // 스크롤 했을 때

    console.log(window.scrollY);

    if(posY <window.scrollY +800){
        document.querySelector('.real-bar').classList.add("ani");
        document.querySelector('.real-bar1').classList.add("ani");
    }
    // else{
    //     document.querySelector('.header').classList.remove("isActive");
    // }
}

window.onload=function(){
    setTimeout(function(){
        scrollTo(0,0);
    },100);
}