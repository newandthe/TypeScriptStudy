/*
다른 파일에서 같은 명의 변수 명을 사용하면 재선언 되었다고 오류 표시가 뜸
1. import 혹은 export {}; 와 같이 독립된 모듈로 사용하겠다고 선언
2. tsconfig.json 내 옵션을 추가 해결 moduleDetection : force 추가

++ 컴파일 과정에서 ESNext 모듈로 js 변환 시 export{}; 가 자동으로 추가되어 개별 모듈로 취급 됨
*/

const a = 1;