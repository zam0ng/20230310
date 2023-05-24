const {Post,User} = require("../models");

exports.borderview = async (req,res)=>{
     
    const arr=[];
    try {
       const post = await Post.findAll({});
    //    console.log(post);

       post.forEach((el,index)=>{
            arr.push(post[index].dataValues);
       })
    //    console.log(arr);
       res.render("border",{data:arr});
    } catch (error) {
        console.log("보더컨드롤러 보더뷰에서 오류남"+error);
    }
}

exports.borderinsertview = async (req,res)=>{
    // console.log(req.decoded);
    const {user_id}= req.decoded.user_id;
    try {
        res.render("insert",{data:req.decoded});
    } catch (error) {
        console.log(error);
    }   
}

exports.borderinsert = async (req,res)=>{

    try {
        const {content,writer} = req.body;

    Post.create({
        content : content,
        writer : writer,
    })

    res.redirect("/border");
        
    } catch (error) {
        console.log("보더컨드롤러 인서트에서 오류남"+error);
    }
    
}

exports.gradeCount = async()=>{
    
}