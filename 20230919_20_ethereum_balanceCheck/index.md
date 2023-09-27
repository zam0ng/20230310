# 이더리움
- 스마트 컨트랙트 및 Dapp 개발을 할 수 있고,
- 블록 생성 시간 15초 정도 20초 까지 스마트 컨트랙트 실행이 가능한 환경
- 공급량 제한이 없었는데 업그레이드 되면서 공급량이 감소되도록 조정되었다.

# 비트코인
- 디지털 화폐로서 전자 지불 수단으로 사용되고,
- 블록 생성 시간 10분
- 총 공급량은 21백만개

# 이더리움의 특징
- 이더리움의 특징은 스마트 컨트렉트를 구현할 수 있다.
- 비트코인은 단순히 트랜잭션을 A계정에서 B계정으로 코인을 전송
- 이더리움의 경우에는 스마트 컨트렉트를 구현해서 A계정에서 B계정을 통해 c의 상품을 구매할수 있는 내용을 작성할 수 있다.
- B가 A에게 상품의 금액을 전달받고 C에게 알려주면 C는 A에게 상품을 전달하고 A는 C의 상품을 받으면 스마트 컨트랙트가 동작해서
B의 계정에 C의 계정으로 돈을 송금한다.
- 비트코인은 단순히 자산을 전송  / 이더리움은 조건을 작성할 수 있는 계약의 거래 형태를 `스마트 컨트랙트`라고 부른다.
- 스마트 컨트랙트를 활용하면 돈을 전송하고 받는 거래가 아닌 조건에 맞는 코드를 동작시켜 기능을 추가할 수 있다.

- 스마트 컨트랙트 코드는 EVM 이더리움 가상 머신 내부에 저장된다.

# EVM

- 가상 머신은 하나의 물리적인 컴퓨터안에서 다른 운영체제나 프로그램을 실행할 수 있게 해준다.
- 이더리움 가상머신 이더리움 블록체인 네트워크에서 `스마트 컨트랙트` 코드를 작성하고 실행하는데
모든 OS 환경에서 똑같은 코드의 내용이 실행되어야 하고 동일한 결과를 출력해야하기 때문에
이더리움 네트워크는 스마트 컨트랙트 코드를 컴파일하고 EVM을 통해 실행시킨다.
EVM은 컴파일된 바이트 코드를 실행 바이트 코드로 컴파일 할 수 있는 코드라면 언어에 상관없이 없이
EVM을 통해 같은 결과물을 얻을수 있다.

### 1. 스마트 컨트랙트 코드 작성
### 2. 바이트 코드 컴파일
### 3. EVM에서 컴파일된 코드를 실행

- 이더리움이 스마트 컨트랙트를 실행할 수 있는 핵심 요소가 EVM(이더리움 가상 머신)가상의 컴퓨터가 노드에 존재하기 때문에
이더리움이 정의한 규칙에 맞게 스마트 컨트렉트 코드를 실행하고 결과를 상태에 업데이트 하는 작업을 수행한다.

- EVM은 블록체인 분산 네트워크에 참여하고 있는 모든 노드들 같은 상태의 합의를 이룰수 있도록. 내용이 같은 코드를 실행할 때
각자의 실행하는 환경이 달라서 다른 결과물을 얻으면 네트워크는 하나의 상태의 합의를 이룰수가 없다.

- 이더리움 네트워크의 모든 노드는 같은 코드를 실행해서 같은 결과를 얻기위해 EVM을 통해서 실행시킨다. 그래서 모든 노드들은
트랜잭션과 스마트 컨트렉트를 각자의 EVM에서 실행시키고 블록체인 전체 상태를 다른 노드들과 동일하게 유지시킬 수 있다.

# Account

- 이더리움 네트워크에 EOA와 CA라는 두 개념이 있고 각각의 역할은

## EOA는 : 외부 소유 계정

### 1. 개인키가 있고 지갑 계정으로 코드 저장 x

### 2. 자금 또는 스마트 컨트랙트의 접근을 제어

### 3. EOA에서 트랜잭션을 생성

### EOA 다른 EOA 또는 CA에 트랜잭션을 보낼수 있고 개인키를 사용해서 트랜잭션을 생성 및 서명. EOA에서 발생하는 트랜잭션은
### EOA에서 EOA로 전송하면 돈 전송

### EOA에서 CA로 트랜잭션을 생성하면 CA의 코드를 동작시킨다. (EOA ->CA) EOA가 전송한 트랜잭션을 시작된다. (CA -> X)

## CA: 계약의 주소

### 1. 스마트 컨트랙트 로직으로 스마트 컨트랙트 코드를 해시 내용으로 저장

### 2. 개인키가 없고 스스로 트랜잭션을 발생시킬수 없다.

### 3. 외부 트랜잭션의 응답으로 트랜잭션을 실행할 수 있다.

### CA는 EOA와 다르게 개인키가 없고 스스로 트랜잭션을 생성할 수 없다.

### CA-> EOA (X)할수없고,

### EOA -> CA (o) 가능하고,

### CA는 다른 CA나 EOA에서 받은 트랜잭션의 응답으로 트랜잭션을 실행할 수 있다.

### EOA-> EOA (금액 전송)

### EOA -> CA (스마트 계약 코드를 실행)(트랜잭션 처리 -> EVM을 통해 스마트 컨트랙트 코드를 실행)


### EOA (외부 소유 계정)

### 트랜잭션의 객체의 구성은
- from : 보내는 계정
- to : 받는 계정
- nonce : 보내는 계정이 발생시킨 트랜잭션 횟수
(EOA 계정이 생성되면 0)
(트랜잭션을 발생시킬때마다 증가)
예) 트랜잭션 1 : 논스 1
예) 트랜잭션 2 : 논스 2
예) 트랜잭션 3 : 논스 3

논스가 있는 이유는 : 중복되지 않고 순차적으로 트랜잭션을 처리하기 위해서 어떤 트랜잭션을 우선적으로 처리할지 결정하기 위해 nonce를 사용, 이중 지불문제를 방지하기 위해 사용
우선순위를 결정을 할 때 nonce와 가스비를 함께 사용해서 우선순위를 결정

- value : 보내는 금액
- gasLimit : 해당 트랜잭션이 사용할 수 있는 최대치
- gasprice : 보내는 사람이 지불하는 가스당의 가격 수수료
- data : 스마트 계약의 주소와 함수를 호출하는 내용에 필요한 매개변수


1. 지갑을 생성
// 공개키와 개인키를 생성
// 지갑 1개 생성이 되어있고

2. 지갑 주소로 블록을 생성(마이닝)
3. 블록의 채굴보상을 이 지갑이 받고(코인베이스 트랜잭션을 블록 추가)
// 블록을 채굴할 때 보상 트랜잭션 내용을 만드는데
// 블록의 다음번 높이 값이 in
// {주소 : 보상}
// 블록 데이터에 추가한 뒤에
// 블록생성 연산을 통해 POW로 연산을 통해 블록 생성권한을 얻을 때
// 블록생성을 하고
// txout에 있는 {처음에 만든 지갑 주소 : 보상} UTXO

4. UTXO 채굴자 지갑의 계정과 블록 채굴 보상
5. 새로운 지갑을 하나더 만들어서 

// 하나의 지갑 또 생성
// 공개키 개인키 생성
// 처음에 만든 지갑으로 트랜잭션을 생성
// 첫번째 지갑에서 -> 두번째 지갑으로 코인 전송
// 개인키로 서명을 하고 
// 서명의 내용과 보내는사람 받는사람 전송 금액 UTXO 첫번째 지갑의 잔액을 조회해서
// 트랜잭션 풀에 담겨있고 트랜잭션 대기상태

6. 채굴 보상을 받은 지갑에서 새로운 지갑으로 돈을 송금 트랜잭션을 발생
7. 서명이 유효한지 검증을 거치고 발생한 트랜잭션을 트랜잭션 풀에 담아놓고
8. 새로운 지갑이 블록 마이닝해서 (코인베이스 트랜잭션을 추가) (트랜잭션 풀에있는 트랜잭션을 처리)

// 두번째 지갑의 주소로
// 코인 베이스 트랜잭션, 트랜잭션 풀에 있는 대기상의 트랜잭션 내용
// 블록을 마이닝
// 블록을 추가 트랜잭션 풀에 있는 처리된 트랜잭션을 제거 {첫번째 지갑 : 남은 금액}, {두번째 지갑 : 받은 금액} -> UTXO 풀에 들어감


9. UTXO에 처음만든 지갑이 전송한 잔액이 새로운 지갑에 잔액으로 미사용 객체가 추가될수 있게.

// 첫번째 지갑의 잔액 조회
// 두번째 지갑의 잔액 조회