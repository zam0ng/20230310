# 컨트렉트 복습

```sh
npx create-react-app test

cd test

npm i truffle
npm i web3
npm i ganache-cli

npx truffle init
```
- contracts 폴더안에 sol파일에 컨트렉트 코드 작성하고 컴파일 후 
- migrations 폴더에 배포 내용 코드 파일 추가 / 파일명 규칙 : [번호]_[내용]_[파일명].js

- truffle config 파일 내용에 지정한 네트워크로 배포 진행.

```sh
npx truffle migrate
```
- CA : 0x6977195A19798835840a14956d4065c2b735C8c1

```sh
CA를 잊어버렸다 
npx truffle console
로 콘솔 활성화 후,
Counter.address 를 입력하면 CA 주소가 나옴.
```

<!-- Available Accounts
==================
(0) 0x3CB1409E62DA7B21207cAF2E4C1c08dE62Edd5E8 (100 ETH)
(1) 0x63C7D4f60E2e91ee236cC6092fe953EcA9004dB6 (100 ETH)
(2) 0x08B8F3A4A77118C78736D89ff948C56929584627 (100 ETH)
(3) 0x3d0397B32502B62a9e1577Ca129f96349D67E79C (100 ETH)
(4) 0xFF0e3Dd77Cbc5C34a60F853E1c019E23EE4a945B (100 ETH)
(5) 0x650964A123432B6d0381E16701B6b34c021C913D (100 ETH)
(6) 0xCeF1d041bddc8ce34881dC2e5389Fa3b1eBfb34B (100 ETH)
(7) 0x171c549c0f3B56eF8aC8E43FD5E2755ce4a29D79 (100 ETH)
(8) 0xDbD1E87E1003aD983636284D7c959a3693E9cbF7 (100 ETH)
(9) 0x8B9f8B5AbC3ed9610305E2BD2FB24C6F6d553DF0 (100 ETH)

Private Keys
==================
(0) 0x89f05409ef0b0e95fb92ac4df7ac135fe7bcd0315c087fadb81ad5052d37e503
(1) 0x06685181d774820ad6a5bb9dc0ec6dec256e917fa8158c900b0e720fa1d3003d
(2) 0x09c4dea33091757c5f8d178cf486c9d3b4e0aea1d11da06a2836ee058dda4f00
(3) 0xc16ee3e94cf200bf8f56a1997aac4cf4b27de4ab72c398c2be7235a85c7fd26c
(4) 0x04d87826fffb4d4e17afd71762e55326b30f35138fc9c59173230831bb4348e2
(5) 0x09be2bc74afc1492a49a5bf99264affaaeb5f80f08d6641e147f143433e73c6d
(6) 0xba3719db519d905ab387754dc3a8f7dc62d8e3d48c92aefddece9fbd9a0d4f67
(7) 0x70a17cea1587449438596145dc60e07dbe82c86831a708482538cd4708997f9f
(8) 0xe20dcd8ef59d46544d64d959f7e8cad07b16fb5ec3576fad9844120dae7cc79c
(9) 0xd722c7e6c32c8bd89497915eed9c5bd410eb5f161247671ecd3a895a8b25c38c -->

# 계약을 작성

# 숫자 야구 게임을 하나 만들어볼건데..

- 베이스볼 CA : 0x081810CD85A62fC6384cb0C1E095984e83fb6289
