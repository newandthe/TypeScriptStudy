// 객체(object)
/*

let user: object = {    // 객체기는 하나 그 이상은 모르기 때문에 하단 user.id; 에서 오류 발생
    id: 1,
    name: "조성국"
};

*/
let user = {
    id: 1,
    name: "조성국"
};
let dog = {
    name: "돌돌이",
    color: "brown"
};
/*
* 객체의 구조를 기준으로 타입을 정의
* 이를 구조적 타입 시스템 이라고 부름 (Property Based Type System)
*
* Java와 Python 과 같이 객체는 명목적 타입 시스템을 사용
* */
user.id;
user = {
    name: "홍길동"
};
let config = {
    apiKey: "KEY"
};
export {};
// config.apiKey = "hacked"; (에러 발생)
