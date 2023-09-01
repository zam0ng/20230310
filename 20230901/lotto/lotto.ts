// 타입스크립트 로또 번호 추첨기 만드는데 전략패턴으로 제작
// 4개,6개,8개의 번호를 뽑는 로직
// 추가작업이 들어오면 로또 번호를 12개 떠 뽑을 수 있는데 전략 패턴으로 / 확장성, 유지보수성
// 클래스 사용 이유 -> 유지보수 편하게

// 하나의 클래스에 동작을 한개 정의
// 4 6 8

// 4를 뽑는 로직 클래스 하나
// 6개를 뽑는 로직 클래스 하나
// 8개를 뽑는 로직 클래스 하나 
// 12를 뽑는 로직 클래스    
// 로또 키값


class four{

    getlogic():void{
        let randomNum: number;
        let randomNumArr: Array<number> = [];
        
        while(randomNumArr.length <4){

            randomNum = Math.floor(Math.random() * 45 + 1)

            if (randomNumArr.indexOf(randomNum) == -1) {

                randomNumArr.push(randomNum);
            }
        }
        console.log(randomNumArr);

    }
}
class six{

    getlogic():void{
        let randomNum: number;
        let randomNumArr: Array<number> = [];
        while(randomNumArr.length <6){

            randomNum = Math.floor(Math.random() * 45 + 1)

            if (randomNumArr.indexOf(randomNum) == -1) {

                randomNumArr.push(randomNum);
            }
        }
        console.log(randomNumArr);
    }
}
class eight{

    getlogic():void{
        let randomNum: number;
        let randomNumArr: Array<number> = [];
        while(randomNumArr.length <8){

            randomNum = Math.floor(Math.random() * 45 + 1)

            if (randomNumArr.indexOf(randomNum) == -1) {

                randomNumArr.push(randomNum);
            }
        }
        console.log(randomNumArr);

    }
}

interface Strategy{
    four :four
    six : six
    eight : eight
}

const fourNumCnt = new four();
const sixNumCnt = new six();
const eightNumCnt = new eight();

const strategy : Strategy ={

    four : fourNumCnt,
    six : sixNumCnt,
    eight : eightNumCnt

}

interface lottoservice {
    
    draw(type : string): void
}
class lotto implements lottoservice{
    constructor(readonly strategy : Strategy){}

    draw(type: "four" | "six" | "eight"): void {
        // console.log(type)
        // console.log(this.strategy[type])
        // console.log(this.strategy);
        this.strategy[type].getlogic()
       
    }
}

class realDraw {
    constructor
        (
            readonly lottoservice: lottoservice

        ) { }

    public fourdraw() {
        this.lottoservice.draw("four")
    }
    public sixdraw() {
        this.lottoservice.draw("six");
    }
    public eightdraw() {
        this.lottoservice.draw("eight");
    }
}
const _strategy = new lotto(strategy);
const ta = new realDraw(_strategy);
ta.fourdraw();
ta.sixdraw();
ta.eightdraw();
