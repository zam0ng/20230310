// 컴파일된 Counter.json 폴더의 contractName
const Baseball = artifacts.require("Baseball");

module.exports = (deployer) => {
    //deployer.deploy 메서드로 
    deployer.deploy(Baseball);
}