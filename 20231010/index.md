# 토큰 
- 다른 블록체인 위에서 발행되거나 스마트 계약과 상호작용하기 위한 가상 자산.

# ERC20 토큰 

- ERC는 Ethereum Request for Comments의 약자
- 개발자가 이더리움 기반 애플리케이션이나 프로토콜에 적합한 대체 가능 토큰을 만들 수 있도록 하는 토큰 표준 (유니스왑, 체인링크)
- ERC20 에서 20은 특정 제안에 번호를 매긴 토큰의 생성이나 발행등의 규칙을 의미
- 이숫자는 식별하기 위한 숫자 큰 의미는 없다.

```sh
# 토큰과 코인의 차이
# 코인은 메인넷이 있고 토큰은 메인넷이 없다.
# 토큰을 만들면 네트워크 안에 포함되어있지만 토큰자체의 메인넷이 구현되어 있지 않기 때문에 코인은 아니다.

# 메인넷은 기존에 다른 플랫폼을 활용해서 구현된 토큰이 자체 독립된 플랫폼을 구축하고 새롭게 생태계를 구성하는 것.
# 메인넷의 론칭과정
# 1. 기존의 다른 플랫폼의 코인을 기반으로 토큰을 제작하고 암호화폐공개(ICO)를 진행
# 2. 테스트넷은 운영하면서 독자 플랫폼으로 자리 잡을수 있는지 테스트 -> 자리 잡을수 있는지 판단은 사용자, 개발자 , 전문가 등 기타 이해관계자들에 의해서 판단됨.
# 위 사람들에 의해서 자리 잡을 수 없다고 판단해도 해당 프로젝트의 팀이 론칭한다고 하면 할 순 있긴 함.
# 3. 독립적인 플랫폼으로써 거래소, 개인지갑 거래간 트랜잭션(처리)을 비롯해 생태계 구성 및 코인 지갑 생성을 포함하게 되면, 토큰은 메인넷을 보유한 코인이 된다.

# ERC20
# ERC20은 이더리움 네트워크에서 가장 표준이 되는 토큰, 대체가능토큰 가장 기본적인 상호 교환 가능한 토큰의 기능을 정의하고있다.
# 토큰 전송 및 잔액조회 토큰의 소유자 등을 관리하기위한 메서드와 이벤트가 정의되어있는 토큰. 탈중앙화된 금융(Defi)등 사용한다.

# soontoken {0x12321412 : 100}
# ERC721
# ERC721 대체 불가 토큰을 나타내고 
# ERC721 토큰은 각각의 고유한 특성을 가지고 있고 그 토큰의 소유권을 가질수 있는것, 게임 아이템, 미술품, 부동산 등의 소유권을 나타낼 수 있다.
# 토큰의 소유권 이전(판매 및 경매), 토큰의 메타데이터 조회등의 메서드와 이벤트를 정의하고있다.
# {0xsdfrewrewr : 0x12321421}
``` 

```sh
npm i truffle
npx truffle init

npx create-react-app reactERC20

# 오픈 제플린(프레임 워크)에서 제공하는 ERC20, ERC721 등 표준 토큰을 가지고 상속을 시켜서 토큰을 사용
npm init -y
npm i @openzeppelin/contracts

# 설치가 되면
# node_modules 폴더 안에 @openzeppelin/contracts 안에 token 폴더에 토큰의 내용이 담겨있다.

# truffle로 배포해서 테스트!
# truffle-config.js 수정 부터

npx truffle compile
# 토큰의 량을 확인하려면 networkId 도 같은 식별자인데 디폴트 값이 설정될 수 있어서
# 옵션으로 추가를 해주자.
npx ganache-cli --chain.chainId 1337 --chain.networkId 1337
npx truffle migrate

# remix
# 배포 및 테스트 환경을 지원하는 웹 IDE

# remix 웹페이지에 workspace에 우리의 작업 내용 vscode를 가져와서 작업을 진행할 수 있다.
npm i -g @remix-project/remixd
remixd -s . --remix-ide https://remix.ethereum.org

# remix IDE 페이지에서 요청을 받아주길 대기중인 상태
# connect to localhost를 클릭을 하면

# pragma solidity ^0.8.19; 에 버전이 안맞다고 하는데
# remix 3번째 탭에 컴파일 버전 확인 하고,

```
/*
Available Accounts
==================
(0) 0x2c1395f8C1Aa3e46b7D4111EEAAF9413a07df7c0 (1000 ETH)
(1) 0xf5840E07348084396603D7879A2D510be4b6089B (1000 ETH)
(2) 0xa9f704445C792f934D2c3Cf6146bB7821fF04518 (1000 ETH)
(3) 0x9AF51cE0a92AF0587960A9A063Dd5Aa80914Cd8a (1000 ETH)
(4) 0x32a856c0199E1CC348746D1cAb3400257479D3D8 (1000 ETH)
(5) 0x4f823655d010C906b88Ab1c218084BC2BBCDdb07 (1000 ETH)
(6) 0x87380dCEa34D072B51db8C2BC21cF2c045D83810 (1000 ETH)
(7) 0xd248f6241383E3c4fBb2471a9c76e053F334D16A (1000 ETH)
(8) 0x4d0F9f5a8ed3339C97CF190C58c0e032CA2c6E21 (1000 ETH)
(9) 0xab9e7CE764a7C0050a46925Fd5fF32BC0cA2046c (1000 ETH)

Private Keys
==================
(0) 0xc93c9c04187d10666eb4a6743e023e91cf5dc928eb03ae3ec96e1172b4c91160
(1) 0x4d47ff96c30285374a41993e4449f0b5030d1f07d94928d0a8cc9d15fcb8ecc6
(2) 0x8d505e2b11774eb7fa7f50215f8a2051f717d3c2e67400400afc1f02be6ca767
(3) 0x087f5d3c1c3f3954e262c3fddfeec6b23518eb789d73fbf9d2b7d700cee56524
(4) 0xd21449876838c2b82f686cf4938dfede1a6164b9a96d69bd8d3b70cf6f063331
(5) 0x0ef4158f1e95d8a289e1195bb226b6aad820041ecef2655fa7e7c7667dbf225e
(6) 0xf14c00eded1128b54d38b9125aa1854b96bcd91bc28b0e57474c97ed8aada6eb
(7) 0xe51b6ed901e7835793c07aa74df272e15bf4dfe2e69974869f2b53526211a602
(8) 0x15bd181dcff3f2a1b9e7cc713c8fe8bfbc750263de2c965377db2e10886524ae
(9) 0xeaa9bb50cc212447fe9ab8c6cf079bac51650baf6ae8ffb43cd2fe517c1cab88*/