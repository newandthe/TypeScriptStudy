/*
* 타입 추론
*
* 타입 스크립트가 어떤 원리 및 어떤 경우에 추론을 잘 하는지?
* */
let a = 10; // number 타입으로 추론
let b = "hello";    // string 타입으로 추론
// 이와 같이 일반적으로 변수 선언 및 초기화 하는 상황에서는 알아서 자동으로 타입을 잘 추론한다.
// 이때 타입스크립트가 타입을 추론하는 기준은 변수의 초기 값
let c = {
    id: 1,
    name: "조성국",
    profile: {
        nickname: "castlectry"
    },
    url: ["https://github.com/newandthe"]
};

let { id, name, profile } = c;

let [one, two, trhee] = [1, "hello", true]; // 구조 분할 할당 또한 가능

function func(msg = "hello") {  // 기본 값으로 정의 된 매개변수도 추론 가능
    return "hello"; // 반환 값 또한 추론 가능
}

let d;  // 이와 같이 아무 값도 없다면 any 타입으로 추론 (암묵적 any 타입 추론)
d = 10; // 이후 값을 할당하면 이후 부터는 number 타입으로 추론
d.toFixed();

d = "hello";
d.toUpperCase();    // string 타입으로 변화 이와 같이 마치 변신하듯 계속 바뀌는 이런 상황을 (Any 타입의 진화 라고 부름)
// d.toFixed(); (오류 발생)

// !! 타인이 짠 코드를 보고 알아 맞춰야 하는 상황이 발생할 수도 있어 암묵적인 Any로 변수의 타입 추론을 추천하지 않는다 !!

// var와 let이 아닌 const로 선언하면, 리터럴 타입으로 fix 되어 차이점에 유의하여 사용
const num = 10;
const str = "hello";

let arr = [1, "string"];    // number | string 의 union 타입으로 추론

// 결론적으로, TS는 웬만한 변수는 모두 다 Type을 자동으로 추론하고 const를 제외한 범용적으로 변수를 사용할 수 있도록 "Type 넓히기"를 통한 추론