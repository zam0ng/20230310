// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

// 스마트 계약을 정의하는 부분
contract Counter{
  // value 라는 상태변수 선언
    uint value;
// 생성자 함수, 스마트 계약이 배포될 때 한번 실행되는 특별한 함수, 이 코드는 빈상태.
    constructor(){}
// setValue 라는 함수 정의 하는데 public :공개적으로 접근 가능하게 만들고,
//_value 매개변수를 받고, unit256은 양의 정수의 데이터 타입을 정의
    function setValue(uint256 _value) public{
        // 상태 변수 변경
        value = _value;
    }
 // getValue라는 함수 정의, public : 공개적으로 접근 가능하게 만들고,
 // ⭐⭐⭐ view : 스마트 계약의 상태를 변경하지않고 읽기 전용인 함수를 만든다.
 // 트랜잭셕을 생성하지않고 호출 가능하며, 조회 관련된 함수에 주로 사용, 가스비용 발생 X
 // ⭐ returns : 반환 값의 데이터의 타입을 정의 
    function getValue()public view returns(uint256){
        return value;
    }
}