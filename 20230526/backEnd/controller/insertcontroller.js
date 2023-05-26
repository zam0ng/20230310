const {User} = require("../models");

const {Post}= require("../models");


exports.insert = async (req,res) =>{

    try {
        const {title,content} = req.body;
        const {acc_decoded} = req;
        // console.log(title);
        // console.log(content);
        // console.log(acc_decoded);
        await Post.create({

            title,
            content,
            writer : acc_decoded.user_id,
        })

        res.redirect("http://127.0.0.1:5500/frontEnd/view.html");
    } catch (error) {
        console.log("인서트 컨트롤러에서 오류남 "+error);
    }
}

exports.viewposts = async (req,res)=>{
    console.log("여기 들어오니");
    try {
        const {acc_decoded} =req;

        const data = await Post.findAll({}).then((e)=>{

            // console.log(e[0].dataValues);
            e = e.map((i)=> i.dataValues);
            // console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ")
            // console.log(e);
            return e;
        })
        // console.log(data);
        // console.log("123123");
        // console.log(data);
        // console.log()
        res.json(data);
    
    } catch (error) {
        console.log(" 컨트롤러 뷰포스터에서 오류남"+error);   
    }
}

exports.mypage = async (req,res)=>{
    // user_id , name , age , writer
    try {
        const {acc_decoded} = req;
        // console.log(acc_decoded);
        const user_id = acc_decoded.user_id;
        const data = await User.findOne({where : {user_id}})

       
        // console.log(data.dataValues);


        const data2 = await Post.findAll({where : {writer:user_id}}).then((e)=>{
            
            
            // console.log(e);
            e= e.map((i)=>i.dataValues);
            return e;
        })
        // console.log(data2);
        
        
        const dataArr={data,data2};
        
        res.json(dataArr);
    
    } catch (error) {
        console.log("인서트 컨트롤러 마이페이지 오류 "+error);
    }
}