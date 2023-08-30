import axios from "axios";
function signup(user_id,user_pw,nav){

    return async() =>{

        const data = await axios.post("http://127.0.0.1:8080/signup",{
           data:{ user_id : user_id,
            user_pw : user_pw,
           }
        
    })
    
        if(data.data == "이미 존재하는 계정"){
            alert("이미 존재하는 계정");
        }

        if(data.data == "가입성공"){
            alert("회원가입이 완료되었습니다.")
            nav("/login");
        }   
    }
}

export const signups ={signup}

 // const nav = useNavigate();
    
        // const data = await axios.get("http://127.0.0.1:8080/signup",{
            
        //     params :{
        //         user_id : user_id,
        //         user_pw : user_pw,
        //     }
        // })


