import {SHA256} from "crypto-js";
import merkle from "merkle";
import BlockHeader from "./blockHeader"
import { IBlock } from "@core/interface/block.interface";
import { Failable } from "@core/interface/failable.interface";
import CryptoModule from "@core/crypto/crypto.module";
const BLOCK_GENRATION_INTERVAL = 10 * 60;
const DIFFICULTY_ADJUSTMENT_INTERVAL = 10;
// block 형태를 클래스로 정의
class Block extends BlockHeader implements IBlock{
    hash: string;
    merkleRoot: string;
    nonce: number;
    difficulty: number;
    data: string[];
    constructor(_previousBlock : Block, _data : string[], _adjustmentBlock : Block){
        // 부모 클래스 생성자 호출 super
        super(_previousBlock);
        this.merkleRoot = Block.getMerkleRoot(_data);
        // 블록 본인의 데이터를 해시화한게 블록의 해시값
        this.hash = Block.createBlockHash(this);

        // 블록 채굴은 뒤에 추가
        // 지금은 0으로
        this.nonce = 0;
        // 지금은 난이도 3
        this.difficulty = Block.getDifficulty(this, _adjustmentBlock, _previousBlock);

        this.data = _data;
    }

    // 블록 추가
    static generateBlock(_previousBlock : Block, _data: string[], _adjustmentBlock : Block) : Block {
        const generateBlock = new Block(_previousBlock, _data, _adjustmentBlock);
        // 마이닝을 통해서 블록의 생성 권한을 받은 블록을 만들고
        const newBlock = Block.findBlock(generateBlock);
        return newBlock;
    }

    // 마이닝 작업 코드
    // 블록의 채굴
    // 연산을 통해서 난이도의 값에 따른 정답을 찾는 동작
    // findBlock = 동작의 이름은 마이닝 블록을 채굴하는 동작
    // POW : 작업 증명 블록의 난이도에 충족하는 값을 구하기위해서 연산작업을 계속 진행해서 조건에 충족하는 값을 구하면
    // 보상으로 블록의 생성 권한을 얻는다.

    static findBlock(generateBlock : Block){
        let hash : string;
        // nonce 변수는 블록의 채굴을 하는데 연산을 몇번 진행했는지 값을 여기에 담을 것임
        let nonce : number = 0;

        while(true){
            generateBlock.nonce = nonce;
            // nonce이 값을 증가시켜서 hash값을 계속 바꿔서
            nonce++;
            // 블록 해시 구하는 구문 추가
            hash = Block.createBlockHash(generateBlock);

            // 16진수 - > 2진수 변환해야하는데

            // 16진수를 2진수로 변환해서 0의 갯수가 난이도의 갯수에 충족하는지 채크를 해서 
            // 맞추면 블록 채굴의 권한을 받고
            // 블록을 생성할수 있다.

            // 충족되었는지 확인하려면 binary 2진 값이 바뀌는이유는 
            const binary : string =  CryptoModule.hashToBinary(hash);
            console.log("binary : ",binary);
            // 연산의 값이 난이도에 충족했는지 채크할 변수
            // startsWith : 문자열의 시작이 매개변수로 전달된 문자열로 시작하는지 체크
            // "000" = 이문자열로 시작하는지 결과가 true false 반환되고 
            const result : boolean = binary.startsWith("0".repeat(generateBlock.difficulty));
            console.log("result : ",result);
            // 조건 충족 했으면 블록 채굴할수 있는 권한을 얻었고 조건에 충족해서 나온 값을 반환
            if(result){
                // 연산을 통해 완성된 hash값과
                generateBlock.hash = hash;
                // 완성된 블록을 내보내주자
                return generateBlock;
            }
        }
    } 

    // 추가할 블록을 찾으면 네트워크에 브로드 케스트를 하고
    // 다른네트워크들은 내 체인과 블록을 받아요
    // 블록 검증을 하고
    // 체인검증을하는데.
    // 다른 네트워크의 체인과 내 체인을 비교해서 긴체인이 정답
    // 다른 네트워크의 체인이 더 길 경우에는 내가 채굴이 늦은것 보상(X)
    // 다른 네트워크의 체인보다 길어지면 내가 채굴을 더 빠르게 한거고 그럼 보상(O)

    // 블록의 해시를 구하는 함수
    static createBlockHash(_block : Block) : string {
        // 
        const {version, timestamp, height, merkleRoot, previousHash,difficulty,nonce} = _block;
        const value : string = `${version}${timestamp}${height}${merkleRoot}${previousHash}${difficulty}${nonce}`;
        return SHA256(value).toString();
    }

    // 머클루트 구하는 함수
    static getMerkleRoot<T>(_data : T[]) : string{
        const merkleTree = merkle("sha256").sync(_data);
        return merkleTree.root();
    }

    // 블록이 유효한지 정상적인 블록인 검사
    static isValidNewBlock(_newBlock : Block, _previousBlock : Block) : Failable<Block, string>{

        // 블록의 유효성 검사를 하는데

        // 블록의 높이가 정상적인지
        if(_previousBlock.height + 1 !== _newBlock.height)
            return {isError : true, value : "이전 높이 오류"};
        // 이전 블록의 해시 값이 새로운 블록의 이전 해시값과 동일한지
        if(_previousBlock.hash !== _newBlock.previousHash)
            return {isError : true, value : "이전 블록 해시 오류"};
        // 생성된 블록의 정보를 가지고 다시 해시해서 블록의 값이 변조되었는지 정상적인 블록인지 확인
        if(Block.createBlockHash(_newBlock) !== _newBlock.hash)
            return {isError : true, value : "블록 해시 오류"};

        // 블록이 유효성 검사를 통과 정상적인 블록이다.
        return {isError: false, value : _newBlock};
    }

    static getDifficulty(_newBlock : Block, _adjustmentBlock : Block, _previousBlock : Block) : number {
        // 네트워크에서는 2016개 이전 블록의 생성 시간을 보고 난이도 조절
        // 우리는 10개 이전
        if(_newBlock.height <= 0) throw new Error("높이가 0이 들어왔다.");
        if(_newBlock.height < 10) return 0;
        if(_newBlock.height < 21) return 1;
        // 블록의 높이가 20이하일 경우에는 체크 X
        // 블록의 높이가 10의 배수가 아닐경우에는 이전 블록 난이도 설정
        // 목표시간 1블록당 10분
        // 10개를 만드려면 100분
        // 나머지가 떨어지지 않으면
        if(_newBlock.height % DIFFICULTY_ADJUSTMENT_INTERVAL !== 0) return _previousBlock.difficulty;

        const timeToken : number = _newBlock.timestamp - _adjustmentBlock.timestamp;
        const TimeExpected : number = BLOCK_GENRATION_INTERVAL * 10 * DIFFICULTY_ADJUSTMENT_INTERVAL;

        // 난이도 증가
        // 생성시간이 빨랐다 총걸린시간 < 목표시간 / 2 = 이전블록 난이도 + 1;
        if(timeToken < TimeExpected / 2) return _previousBlock.difficulty + 1;

        // 난이도 감소
        // 생성시간이 더 걸렸다 총걸린시간 > 목표시간 * 2 = 이전 블록 난이도 - 1; 
        if(timeToken > TimeExpected * 2) return _previousBlock.difficulty - 1;

        return _previousBlock.difficulty;
    }
}

export default Block;