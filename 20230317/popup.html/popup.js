function openPopup(){

    let popup = document.querySelector(".popup-wrap");

    //popup.className
    //popup.classList
    console.log(popup.className);
    console.log(popup.classList);
    
    //popup.className를 사용하면 문자열을 그대로 대입해주면 되고
    //popup.classList를 사용하면 메소드를 사용하면 된다.

    // is-active 앞에 한칸 띄운이유 클래스로 구분하기 위해
    //popup.className = popup.className + " is-active";
    //className은 클릭하면 계속 뒤에 붙는데, classList.add는 뒤에 안붙는다.
    
    //popup.classList.add("is-active");

    //문자열 버전
    // let strArr = popup.className.split("");
    // if (strArr.indexOf("is-active") != -1){
        
    // }
    // else{
    //     popup.className = popup.className + " is-active";
    // }

     if(popup.classList.contains("is-active")){ // class 있으면
        
       popup.classList.remove("is-active");
     }
     else{ // class 없으면
         popup.className = popup.className + " is-active";
     }
}