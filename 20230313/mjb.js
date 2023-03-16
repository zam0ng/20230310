let value = prompt("묵=0, 찌=1, 빠=2 입력");
console.log("내가 낸 거: ", value);

let comValue = parseInt(Math.random() * 3);

switch (comValue) {
  case 0:
    comValue = "묵";
    break;
  case 1:
    comValue = "찌";
    break;
  case 2:
    comValue = "빠";
    break;

  default:
    break;
}

console.log("컴퓨터가 낸 거 : ", comValue);

let play = true;
while (play) {
  switch (value) {
    case "묵":
      console.log(
        comValue !== value ? (comValue == "찌" ? "이김" : "졌습니다") : "무승부");
      play = false;
      break;

    case "찌":
      console.log(
        comValue !== value ? (comValue == "빠" ? "이김" : "졌습니다") : "무승부");
      play = false;
      break;

    case "빠":
      console.log(
        comValue !== value ? (comValue == "묵" ? "이김" : "졌습니다") : "무승부");
      play = false;
      break;

    default:
      console.log("다시 입력하세요");
      value = prompt("다시 묵, 찌, 빠 입력");
      break;
  }
}
