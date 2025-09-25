// any
// 특정 변수 타입을 우리가 확실히 모르는 경우 사용

let anyVar: any = 10;
anyVar = "HELLO";
anyVar = true;
anyVar = {};
anyVar = () => {};

// anyVar.toUpperCase(); (오류 발생) 모든 검사를 통과해버리므로 function을 upperCase를 진행하여 runtimeException이 발생하여 최대한 사용을 지양
// anyVar.toFixed();

let num : number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;

/*
* any는 모든 것이 가능하지만 반대로는 불가능하다.
* unknown 보다 안전
*
* if(typeof unknownVar === "number) {   // 타입 정제 과정을 거쳐 사용
*   num = unknownVar;
* }
* */

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar;
// unknownVar.toUpperCase();