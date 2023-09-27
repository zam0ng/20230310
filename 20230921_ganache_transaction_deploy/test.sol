// solidity 확장 설치해야함.
// SPDX-License-Identifier : MIT

pragma solidity ^0.8.0;

contract Counter{
    uint256 value;

    constructor(){}

    //setter
    function setValue(uint256 _value) public {
        // 상태가 변경된다.
        // 수수료가 발생한다 gas fee가 발생.
        value = _value;
    }

    //getter
    function getValue() public view returns(uint256){
        // view : 조회하기 위한 코드를 작성할 때
        // returns(uint256) 함수의 반환 타입
        return value;
    }
}