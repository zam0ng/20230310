let init = {

    addressName : "",
    islogin : false,
    mypage : "/my",
    mybag : ""
}

// useEffect(()=>{
//     console.log("address")
//     if(login == "/login"){
//         console.log("이동")
//         nav("/login");
//     }
//     else if(login == "/my"){
//         nav("/my");

//     }else if(login == "/food"){
//         nav("/food");
//     }
// },[login])



function reducer(state=init,action){
    console.log("여기옴");

    switch (action.type) {
        case "LOGINPAGE":

            return { ...state, addressName: "/login" };
        case "MYPAGE":

            return { ...state, addressName: "/my" };
        case "FOODPAGE":

            return { ...state, addressName: "/food" };
        case "LOGIN":

        return { ...state, islogin: action.payload };

        case "GAJI" :

        return {...state, mybag :state.mybag + "가지"};

        case "TODAR" :

        return {...state, mybag: state.mybag + "토달"};

        default:
            return { ...state };
    }
}

export default reducer;