//
const {user,board} = require("../model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const createHash = (password)=>{

    return new Promise((resolve,reject)=>{

        bcrypt.hash(password,10,(err,data)=>{

            if(err) reject
            resolve(data);
        })
    })
}

const compare = (password,hash) =>{

    return new Promise((resolve,reject)=>{

        bcrypt.compare(password,hash,(err,same)=>{

            resolve(same);
        })
    })
}

exports.Signup = async function(req,res){

    const {user_id, user_pwd, user_name, user_num} = req.body;
    

    try {
        console.log("1")
        await user.inittable();
        console.log("2")

        const hash = await createHash(user_pwd);
        console.log("3")

        await user.signup(user_id,hash,user_name,user_num);
        return user_id;

    } catch (error) {
        console.log("컨트롤러 signup에서 오류");
    }
}

exports.Login = async function(req,res){

    const {user_id,user_pwd} = req.body;

    try {
        const data = await user.userSelect(user_id);
   
        console.log(data);
        //login 함수에서 가져온 data에 user_id가 없으면
      
        if(!data?.user_id){
            return res.send("아이디 없음");
        }
        console.log("로그인창에 입력한 비밀번호")
        console.log(user_pwd)

        console.log("mysql에서 가져온 비밀번호")
        console.log(data.user_pwd);
        const compare_pw = await compare(user_pwd,data.user_pwd);
        console.log(compare_pw);

        if(!compare_pw){
            return res.send("비밀번호 오류");
        }

        // if(data.user_pwd !== user_pwd){
        //     return res.send("비밀번호 오류");
        // }
        // 여기까지 통과하면 로그인 성공임

        // 로그인 성공했을 때 엑세스 토큰 발행.
        const accessToken = jwt.sign({
            user_id : data.user_id,
        },process.env.ACCESS_TOKEN_KEY,{
            expiresIn : "1m",
        });

        // 리프레쉬 토큰도 발행.
        const refreshToken = jwt.sign({
            user_id : data.user_id,
        },process.env.REFRESH_TOKEN_KEY,{
            expiresIn : "1h",
        })
        console.log(accessToken);

        await user.refresh(user_id,refreshToken);
        req.session.access_token = accessToken;
        req.session.refresh_token = refreshToken;

        res.redirect("/list");
        // return data;
    } catch (error) {
        console.log("컨트롤러 로그인에서 오류 남"+error);
    }

}

exports.verifyLogin = async (req,res,next) =>{

    const {access_token, refresh_token} = req.session;
            // verify 메서드는 토큰이 유효한지 검증해주는 메서드
            //첫번째 매개변수로 토큰을 전달하고 
            //두번째 매개변수로 키를 전달하고
            //세번째 매개변수로 콜백함수 전달
            //콜백함수의 매개변수로 첫번째는 err 내용 객체
            //두번째는 해석된 객체
    jwt.verify(access_token,process.env.ACCESS_TOKEN_KEY,async (err,acc_decoded)=>{
        // 엑세스 토큰이 썩은 토큰이라면
        if(err){

            // 리프레시 토큰이 썩었는지 확인후에
            jwt.verify(refresh_token,process.env.REFRESH_TOKEN_KEY, async (err,ref_decoded)=>{

            // 리프레시 토큰도 썩었다면 다시 로그인하게
            if(err){
                console.log("리프레시 토큰 만료")
                res.send("다시 로그인하세요");
            }
            // 리프레시 토큰은 안썩었다면
            else{
                // 리프레시 토큰안에 있는 유저아이디로 data 조회
                const data = await user.userSelect(ref_decoded.user_id);
                console.log(data);
                // 조회한 data 안에 refresh 값과 키값과 같으면 access 토큰 재발행
                if(data.refresh == refresh_token){

                    const accessToken = jwt.sign({
                        user_id : ref_decoded.user_id,

                    },process.env.ACCESS_TOKEN_KEY,{
                        expiresIn : "1m",
                    })
                    req.session.access_token =  accessToken;
                    console.log("access_token 재발행")
                    next();
                }
                else{ // 리프레시 토큰은 로그인할 때 발급해주는것이니깐 다른 브라우저에서 접속하면
                      // 리프레시 토큰이 재발행되니 현재 mysql에 있는 리프레시와 다르다.
                    res.send("중복 로그인 방지");
                }
                
            }
            })
        }else{ // 엑세스 토큰이 썩은 토큰이 아니니 유지가 된다.
            console.log("로그인 정상 유지중");
            next();
        }
    })
}



exports.Viewboard = async function(){

    try {
        await board.inittable();
        const data = await board.viewboard();
       
        return data;
    } catch (error) {
        console.log("컨트롤러 게시글 목록에서 오류남")
    }
}

exports.Insertboard = async function(req,res){

    const {title,content,likey} = req.body;
    
    if(req.file){
        
        const image = ("/upload/"+req.file.filename);
        try {
            await board.insertboard(title,content,image);
        } catch (error) {
            console.log("컨트롤러 게시글 추가에서 오류남")
        }

    }

    else{
        try {
            await board.insertboard(title,content,null);
        } catch (error) {
            console.log("컨트롤러 게시글 추가에서 오류남")
        }

    }

    // console.log("wer")
    // console.log(image);
    
    
}

exports.Selectboard = async function(req,res){
    const {id} =req.params;
    try {
        const data = await board.selectboard(id);
        // console.log("22");
        // console.log(data);
        return data;
    } catch (error) {
        console.log("글 상세 컨트롤러에서 오류남")
    }
}

exports.Likeyboard = async function(req,res){

    const {likey} = req.body;
    const {id} = req.params;


    try {
        await board.likeyboard(likey[0],id);
    } catch (error) {
        console.log("컨트롤러 좋아요 증가에서 오류남")   
    }
};

exports.Deleteboard = async function(req,res){

    const {id} = req.params;

    try {

 
        await board.deleteboard(id);
    } catch (error) {
        console.log("컨트롤러 delete에서 오류남")
    }
}

exports.Editboard = async function(req,res){

    const {title, content} = req.body;
    const {id} = req.params;

    try {
        await board.editboard(title,content,id);
    } catch (error) {
        console.log("컨트롤러 edit에서 오류남")
    }
};

exports.Replyinsert = async function(req,res){
    console.log("여기까진 들어와")
    const {content} = req.body;
    const {id} =req.params;

    try {
        await board.replyinit();
        await board.replyinsert(content,id);
    } catch (error) {
        console.log("컨트롤러 리플 인서트에서 오류남")
    }
}

exports.Replyview = async function(req,res){
    const {id} = req.params;
    try {
        const data2 = await board.replyview(id);
        return data2;
    } catch (error) {
        console.log("컨트롤러 리플뷰에서 오류남")
    }
}

