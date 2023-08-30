let init ={

    user_id : "",
    user_pw : "",
    islogin : "",
    token : "",
}

function reducer(state=init,action){

    const {type,payload} =action;
    console.log(payload);
    switch (type) {

        case "LOGIN":
            
            return {...state, user_id : payload.id, user_pw: payload.pw, islogin : payload.islogin};
        case "TOKEN":
            
            return {...state, token : payload};
    
        default:
            return {...state};
    }
}

export default reducer;