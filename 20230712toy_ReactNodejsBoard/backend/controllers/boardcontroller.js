const Sequelize = require("sequelize");
const {Board} = require("../models");
const { update } = require("../models/users");

exports.board= async(req,res)=>{

    try {
        // console.log(req.query);
        const {title, content} = req.query;
        const {user_id} = req.acc_decoded;
        console.log(user_id)
        const data =await Board.create({
            title : title,
            content : content,
            user_id : user_id
        })
        
        res.json(data);

    } catch (error) {
        console.log("보드 컨트롤러 오류남 "+error)
    }
}

exports.boardbring =async(req,res)=>{

    try {
        const data = await Board.findAll({
            raw:true,
        })
        // console.log(data);
        res.json(data);
    } catch (error) {
        console.log("보더브링에서 오류남 "+error);
    }
}

exports.bringdetail = async(req,res)=>{

    try {
        console.log(req.acc_decoded);
        console.log("--------------req.query");
        console.log(req.query);
        const {title} = req.query;
        const {user_id} =req.acc_decoded;
        const data = await Board.findOne({
            where :{title :title},
            raw:true
        })
        // console.log(data);
        res.json({data:data,user_id:user_id});
    } catch (error) {
        console.log("브링 디테일에서 오류 "+error)
    }


}
exports.update = async(req,res)=>{

    try {
        console.log(req.query);
        const {uptitle,upcontent,title} =req.query
        const data = await Board.update({
            title : uptitle,
            content : upcontent,
        },{
            where: {title: title}
        })

        
        res.send(data);

        } catch (error) {
        console.log("보더 업데이트에서 오류남"+error);
    }
}

exports.del = async(req,res)=>{

    try {
        console.log(req.query);
        const {title} =req.query;

        const data = await Board.destroy({
            where : {title: title}
        })

        // console.log("-----------------");
        // console.log(data);
        res.json(data);
        
    } catch (error) {
        console.log("보더 딜리트에서 오류남 "+error);
    }
}

