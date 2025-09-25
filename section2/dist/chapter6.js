// any
// 특정 변수 타입을 우리가 확실히 모르는 경우 사용
let anyVar = 10;
anyVar = "HELLO";
anyVar = true;
anyVar = {};
anyVar = () => { };
// anyVar.toUpperCase(); (오류 발생) 모든 검사를 통과해버리므로 function을 upperCase를 진행하여 runtimeException이 발생하여 최대한 사용을 지양
// anyVar.toFixed();
let num = 10;
num = anyVar;
// unknown
let unknownVar;
/*
*
* */
unknownVar = "";
unknownVar = 1;
unknownVar = () => { };
num = unknownVar;
export {};
