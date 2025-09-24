/*
* 원시 타입 (하나의 값만 저장하는 타입)
* number | string | boolean | null | undefined
* */
// number
let num1 = 123;
let num2 = -123;
let num3 = 0.123;
let num4 = -0.123;
let num5 = Infinity;
let num6 = -Infinity;
let num7 = NaN;
// string
let str1 = "hello";
let str2 = 'hello';
let str3 = `hello`;
let str4 = `hello ${num1}`;
/* 타입 annotation(주석) 에 맞지 않는 값을 재 할당 및 함수 사용시 오류 발생  */
// num1 = "hello";
// str1.toFixed();
// boolean
let bool1 = true;
let bool2 = true;
// null
let null1 = null;
// undefined
let nude1 = undefined;
// "strictNullChecks": false 한 경우 null 값 할당 가능
// let numA: number = null;
/*
* 리터럴 타입 (지정된 값만 허용)
* 리터럴 이란 ? 값
*/
let numA = 10;
let boolA = true;
export {};
// numA = 12; (오류 발생) , boolA = false; (오류 발생)
