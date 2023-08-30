const exp = require("constants");
const multer = require("multer");
const Sequelize = require("sequelize");
const {User} = require("../models");

const path = require("path");

exports.Upload = multer({

    storage : multer.diskStorage({

        destination: (req,file,qwer)=>{

            qwer(null,"uploads/")
        },

        filename :(req,file,qwer) =>{

            const ext = path.extname(file.originalname);

            const filename = path.basename(file.originalname,ext) + "_"+ Date.now() + ext;

            qwer(null,filename);
        }
    }),

    limits : {fileSize :5 * 1024 * 1024},
})

exports.myimg = async (req,res)=>{
    console.log("myimg 들어오니?")
    const {decoded} = req;
    
    user_id = decoded.user_id;

    try {
        const user = await User.findOne({where :{user_id}})
       
        console.log(user.img);

        res.json(user.img);
    } catch (error) {
        console.log("이미지컨트롤러 myimg에서 오류남");
    }
}