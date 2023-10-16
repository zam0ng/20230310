const router = require("express").Router();
const {nftimg} = require("../middleware/ntfimg");
const fs = require("fs");
const path = require("path");
const axios = require("axios");
router.post('/',nftimg.single("upload"),async(req,res)=>{

    console.log(req.body);
    const {name , explain, hash} = req.body;
    // const imgurl = req.file.path;
    // console.log(req.file.path);

    let nftjson = 
    
    {
        "pinataContent": {
            name : name,
            description : explain,
            image : hash,
            attributes : [
            ]
        },
        "pinataMetadata": {
          "name": `${name}.json`
        }
      }
    const savepath = path.join(__dirname,"..","/NFTjson","test2.json")
    fs.writeFile(savepath,JSON.stringify(nftjson),(err)=>{

        if(err) {
            console.log("오류",err);
        }
        else{

            console.log("json 파일 생성완료");
        }
    })
    console.log(path.join(__dirname,"..","/NFTjson"))
// 파일을 읽어와서
// FROMDATA
// json을 업로드하면
// json파일의 해시 주소
    fs.readFile(savepath, async (err, data) => {

        if (err) {
            console.log("파일 읽기 오류", err);
        }
        else {

            const readJson = JSON.parse(data);
            console.log("readJson---",readJson);

            const resp = await axios.post("https://api.pinata.cloud/pinning/pinJSONToIPFS", readJson, {
                headers: {
                    "Content-Type": "application/json",
                    pinata_api_key: process.env.PINATA_API_KEY ,
                    pinata_secret_api_key: process.env.PINATA_SECRET_API_KEY,
                },

            });
       
            console.log("resp---",resp.data.IpfsHash);
            res.send(resp.data.IpfsHash);

        }
    })

});

module.exports = router;