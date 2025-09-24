// 배열 (요소의 타입과 대괄호)
let numArr = [1, 2, 3];
let strArr = ["text1", "text2", "text3"];
/* 다음과 같이 Generic 과 같이 선언 가능 */
let boolArr = [true, false, true];
/* 배열에 들어가는 요소들의 타입이 다양한 경우 (유니온 타입) */
let multiTypeArr = [1, "hello"];
/* 다차원 배열의 타입을 정의하는 방법 */
let doubleArr = [
    [1, 2, 3],
    [4, 5]
];
/* 튜플 (JS 에는 없고 TS에만 존재) (길이와 타입이 고정된 배열) */
let tup1 = [1, 2]; // 두개의 요소를 담고 number와 number로 구성됨
// tup1 = [1, 2, 3];    (에러 발생)
// tup1 = ["1", "2"];   (에러 발생)
let tup2 = [1, "2", true];
export {};
