// typeScript 변수의 타입 지정

// javaScript : 변수명 = 초기값

// typeScript : 변수명 : 타입명 = 초기값

// node 환경에서 실행 시켜볼수 있나?

// ts-node 사용 개발환경에서 typeScript로 작성된 코드를 실행 시켜볼수 있다.
// 기존 javaScript는 node를 통해 실행시켰었는데
// typeScript는 node가 해석을 할수가 없기 때문에 ts-node로 실행 시켜줘야한다.

// ts-nodejs typeScript 실행 환경(typeScript를 javaScript로 컴파일해서 실행 필요없이 node환경에서 실행가능)

// 1. typeScript를 컴파일 내부 컴파일러를 통해 메모리 상에 javaScript 코드로 변환
// javaScript 파일을 만들지 않는다.

// 2. 컴파일된 javaScript 코드를 nodejs 런타임 환경으로 실행 그다음 코드 실행 결과를 출력
// (타입 검사로 코드에서 발생할 오류를 미리 또 알려줌)

// 설치 명령어

//---------------------------------
// node.js는 javaScript 런타임 환경인데 내장 함수 및 모듈에 대한 타입 정보가 필요한데
// 그래서 nodejs 타입 정보를 패키지로 설치해서 사용하자
// @type/node 이부분

// npm install ts-node @types/node
//---------------------------------

// 실행 가이드

// javascript => node
// node app.js

// typescript => ts-node
// npx ts-node app.ts

