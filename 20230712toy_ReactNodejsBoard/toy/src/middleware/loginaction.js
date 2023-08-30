import axios from "axios";
function login(user_id,user_pw,nav){
    
    return async(dispatch) =>{

        const data = await axios.get("http://127.0.0.1:8080/login",{
            withCredentials : true,
            params :{
                user_id : user_id,
                user_pw : user_pw,
            }
        })

        dispatch({type: "LOGIN", payload : {id :user_id , pw : user_pw , islogin : true}})

        
        console.log(data.data);
        if(data.data == "가입되지 않은 계정"){
            alert("가입되지 않은 계정");
        }

        if(data.data.msg == "로그인 성공"){
            alert("로그인이 완료되었습니다.")
            window.location = "/board";
            // dispatch({type:"TOKEN",payload : data.data.token})
            // nav("/board");
            
        }   
    }
}

function islogin(token){
    return async() =>{
        const data = await axios.get("http://127.0.0.1:8080/login/islogin",{
            withCredentials:true,
            params :{
                token : token,
            }
        })
    }
}

export const logins ={login,islogin}  