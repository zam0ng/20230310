import {useEffect, useState} from "react";
import axios from "axios";
import useWeb3 from "./hooks/web3.hook";
import abi from "./abi/MyNft.json";

const App = () =>{
  const [file,setFile] = useState(null);
  const [name,setName] = useState(null);
  const [explain,setExplain] = useState(null);
  const [imgurl,setImgurl] = useState(null);
  const [hash, setHash] = useState(null);
  const [jsonhash,setJsonhash] =useState(null);
  const [tokenId,setTokenId] =useState(null);

  // ⭐
  const {user, web3}= useWeb3();
  const [contract, setContract]= useState(null);

  useEffect(()=>{
    if(web3 !== null){
      if(contract) return;

      const mynft = new web3.eth.Contract(abi,"0x4C12932e6C40f036B2411F064535bfDC3db757BF",{data:""});
      setContract(mynft);
    }

  },[web3]);

  const mintingBtn = async() =>{
    const data = await contract.methods.minting(tokenId,jsonhash).send({
      from : user.account,
      gas : 200000,
    })

    console.log("====data",data)
  }
  const imgupload = async () =>{

    const fileData = new FormData();
    console.log(file);
    fileData.append("file",file)
    // 이미지 파일을 업로드 하고
    const resp = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS",fileData,{
      headers : {
        "Content-Type" : "multipart/form-data",
        pinata_api_key : process.env.PINATA_API_KEY,
        pinata_secret_api_key : process.env.PINATA_SECRET_API_KEY,
      },

    });
    console.log(resp);
    console.log(resp.data.IpfsHash);
    setHash(`https://amethyst-defeated-badger-139.mypinata.cloud/ipfs/${resp.data.IpfsHash}`)
  }


    // resp 해시 주소 가지고
    // json
    // 백엔드로 요청
    // nft 이름, 설명, 이미지 경로
    // 백엔드 쪽에 json 객체 파일이 생성이 되고.

    /* app.post(async(req,res) =>{
      const  = nft 이름, 설명, 이미지 경로
      // fs 파일 만들고
        await 
        json 파일 업로드 IPFS
        res.sned("json 객체경로")
    }) */

  const inputValue = (e) =>{ 
    const fieldName = e.target.name;

    if(fieldName == "name"){
      setName(e.target.value);
    }
    else if(fieldName == "explain"){
      setExplain(e.target.value);
    }
  }

  const upload = async()=>{
    const fileData = new FormData();
    // fileData.append("upload",imgurl);
    fileData.append("name",name);
    fileData.append("explain",explain);
    fileData.append("hash",hash);
    const data = await axios.post("http://localhost:8080",fileData,{
      headers :{
        "Content-Type" : "multipart/form-data",
      },
      withCredentials : true,
    })
    console.log(data.data);
    setJsonhash(data.data);
   
  }
  

  return (
    <>
      {/* <label>IPFS에 파일 업로드</label>
      <input type="file" onChange={(e)=>(setFile(e.target.files[0]))}/> 
      <br></br> */}

      <label>피나타 이미지파일 업로드</label>
      <input type="file" onChange={(e)=>(setFile(e.target.files[0]))}/> 
      <br></br>
      <button onClick={imgupload}>이미지 업로드</button>
      <br></br>
      <br></br>
      <label>NFT 이름 :</label>
      <input name="name" onChange={inputValue}/>
      <br></br>
      <label>NFT 설명 :</label>
      <input name="explain" onChange={inputValue}/>
      <br></br>
      <label>NFT hash :</label>
      <input value={hash}/>
      <br></br>
      {/* <form action="/" method="post" encType='multipart/form-data'>
        <label>NFT 이미지 경로 :</label>
        <input type="file" name="upload" onChange={(e)=>(setImgurl(e.target.files[0]))}/>
      </form> */}
      <br></br>
      <button onClick={upload}>파일 업로드</button>

      <br></br>
      <br></br>
      <div>{jsonhash}</div>
      <div>{tokenId}</div>
      <br></br>
      <label>토큰ID</label>
      <input onChange={(e)=>(setTokenId(e.target.value))}></input>
      <button onClick={mintingBtn}>민팅하기</button>
      <br></br>
    </>
  );
};

export default App;

// ERC 배포할 때 하나의 json
// 같은 내용으로 NFT를 발행하고 있는데
// react에서 파일을 생성해서 IPFS 에 업로드하고
// 객체 만들기전에 이미지 먼저 올리고 해시주소 가지고

// NFT이름 입력
// NFT설명 입력
// NFT 이미지 경로
// 새로운 nft 민팅


// 리액트 페이지에 본인의 NFT 내용도 같이 보여주기
// .본인이 가지고 있는 tokenID를 조회해서
// tokenURL 함수를 실행 시키면 ipfs json의 경로가 뜨고
// json 의 값을 요청보내서 가져오면 그안에 nft의 내용이 포함되어있으니까
// 화면에 뿌려주면 됨.

