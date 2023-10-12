// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import "./ERC20.sol";

contract Poketmon is ERC20 {
    constructor() ERC20("Poketmon","PTK",10000){}

    // 포켓몬 객체를 만들것.
    // 이 객체 하나가 포켓몬의 데이터
    address sendperson;
    uint256 object;
    uint256 idx;

    struct Pokets{
        string url;
        string name;
    }

    // 포켓몬 빵 구매한 사람들의 주소를 담아놓을것.
    struct Users {
        address account;
    }

    // ERC20 토큰을 지불해서 포켓몬 빵을 하나 사는것.
    // 빵 하나에 얼마?
    // 단위를 이더로 지정 10 ** 18 소수점 단위
    // 가격이 1000 토큰
    uint256 private tokenPrice = 100 ether;

    // 우리가 포켓몬 빵을 사면 랜덤한 스티커가 들어있는데
    // 배열안에 나올 수 있는 포켓몬의 이름을 선언해두자.
    // 한글을 사용하려면 유니코드 작성 해야해서 영어로 작성
    string[] poketmonName = ["Pikachu","Kobuk","Charmander"];

    // 포켓몬 이쁜 이미지
    string[] poketmonUrl = ["https://w7.pngwing.com/pngs/441/722/png-transparent-pikachu-thumbnail.png",
                            "https://tistory1.daumcdn.net/tistory/2864444/attach/628442af44f545c788ffdc5035464f98",
                            "https://blog.kakaocdn.net/dn/bde9TD/btqCjRmlQ7R/It2trKSjcjFPV0KCzO3PU1/img.jpg"];

    // 구매하면 한개를 얻는데
    // 또 사면 두개
    mapping(address =>Pokets[]) public poketmons;
    // {
    //     "0x12351353151 : [Pokets{url : "", name :""},[Pokets{url : "", name :""}]
    // }

    // 한번이라도 포켓몬 빵을 구매한 사람들의 주소를 가지고 있는 Users 객체
    Users[] public users;
    
    // 지갑주소가 가지고있는 포켓몬 조회
    function getPoketmon() public view returns(Pokets[] memory){
        return poketmons[msg.sender];
    }

    function sendPoketmon(address to, uint256 obj) public {
        sendperson = to;
        idx = obj;
        // idx = findIndex();
        // emit sendPoket(to,obj);
        
        for (uint256 j = 0; j < poketmonName.length; j++) {
            
            if( keccak256(abi.encodePacked(poketmons[msg.sender][idx].name)) == keccak256(abi.encodePacked(poketmonName[j]))){

                poketmons[sendperson].push(Pokets(poketmonUrl[j],poketmonName[j]));
            }
        }   

        for (uint256 index = idx; index < poketmons[msg.sender].length-1; index++) {
            
            poketmons[msg.sender][index] = poketmons[msg.sender][index+1];
        }

        poketmons[msg.sender].pop();

        
    }
    // event sendPoket (address to, string obj);
    //⭐⭐⭐
    // function findIndex() public returns(uint256){

    //     for (uint256 index = 0; index < poketmonName.length; index++) {
            
    //         if(keccak256(abi.encodePacked(poketmonName[index])) == keccak256(abi.encodePacked(object))){
    //             idx = index;
    //             return idx;
    //         }
    //         else{
    //             idx = 100;
    //             return 100;
    //         }
    //     }
    //     return 999;
    // }

    function test() public view returns(uint256){
        return idx;
    }
    
    function getPoketmonUsers() public view returns (Users[] memory){
        return users;
    }

    function buyPoketmon() public {
        require(balances[msg.sender] >= tokenPrice);
        balances[msg.sender] -= tokenPrice;
        totalSupply -= tokenPrice;

        uint random = uint(keccak256(
            abi.encodePacked(block.timestamp, block.coinbase, block.number)
        ));

        random  = uint(random % 3) ; // 0 ~ 2 까지의 3가지 랜덤값
        // Pokets 구조체 형태로 객체르 만들어서 배열에 푸쉬
        poketmons[msg.sender].push(Pokets(poketmonUrl[random], poketmonName[random]));

        // 유저가 포켓몬빵을 한번 산적이 있는지
        bool isUser = false;
        for(uint256 i = 0; i < users.length; i++){
            if(users[i].account == msg.sender){
                isUser = true;
                break;
            }
        }

        if(!isUser){
            users.push(Users(msg.sender));
        }

    }
}