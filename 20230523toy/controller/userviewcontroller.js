const e = require("express");
const {User} = require("../models");
const { findOne, findAll } = require("../models/users");

exports.userview = async(req,res) =>{
        const agree = 0;
        const user = await User.findAll({where : {agree}});

        const arr=[];
            user.forEach((el,index)=>{
                
                if(user[index].dataValues.agree==false){
               
                    arr.push(user[index].dataValues);

                }
            })
            res.render('agree',{data : arr});
}