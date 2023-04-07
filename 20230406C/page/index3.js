// 전달된 매개변수가 없으면 open에 디폴트로 false가 들어간다.
function Drawer(el,open =false){
    this.el =el;
    this.isOpen = open;

    // 객체의 원형에 assign메소도는 하나이상의 객체로부터
    // 대상 객체로 속성을 복사할 때 사용한다.
    // 두번째 매개변수는 객체의 속성을 복사해서 첫번째 매개변수의 객체에
    // 속성을 추가한뒤 첫번째 매개변수의 객체를 반환한다.
    // 다른 객체의 속성을 복사해서 새로운 객체를 생성한다.

    Object.assign(this.el.style,{
        display : "block",
        position : "fixed",
        top: 0,
        bottom : 0,
        right :0,
        width : "500px",
        padding : "5px",
        backgroundColor : "yellow",
        transition : "1s"
    });
}

Drawer.prototype.open = function(){
    this.isOpen = true;
    this.el.style.transform = "translate(0px)";

}

Drawer.prototype.close = function(){
    this.isOpen = false;
    this.el.style.transform = "translate(500px)";
}

const sideMenu = new Drawer(document.querySelector(".drawer"));
sideMenu.close();
document.querySelector(".drawer-opener").onclick = function(){
    if(!sideMenu.isOpen)sideMenu.open();
    else sideMenu.close();
}