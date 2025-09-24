// 배열 (요소의 타입과 대괄호)
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["text1", "text2", "text3"];

/* 다음과 같이 Generic 과 같이 선언 가능 */
let boolArr: Array<boolean> = [true, false, true];

/* 배열에 들어가는 요소들의 타입이 다양한 경우 (유니온 타입) */
let multiTypeArr: (number | string)[] = [1, "hello"];

/* 다차원 배열의 타입을 정의하는 방법 */
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5]
]

/* 튜플 (JS 에는 없고 TS에만 존재) (길이와 타입이 고정된 배열) */
let tup1:[number, number] = [1, 2]; // 두개의 요소를 담고 number와 number로 구성됨
// tup1 = [1, 2, 3];    (에러 발생)
// tup1 = ["1", "2"];   (에러 발생)
let tup2: [number, string, boolean] = [1, "2", true];

/*
* (주의)
* 컴파일된 chapter2.js 를 참고하면 일반 배열로 변환이 됨
* 따라서 tup1.push(1); 혹은
* tu1.pop(); 과 같이 동작이 수행 가능한데
* 이때 위에서 선언한 요소와 길이를 검증이 발동하지 않음
*
* 따라서 push 혹은 pop 은 각별한 주의가 필요
*
* 그렇다면 튜플은 언제 사용하는가 ?
*  */

const users: [string, number][] = [
    ["유저1", 1],
    ["유저2", 2],
    ["유저3", 3],
    ["유저4", 4]
    // , [5, "유저5"] (오류 발생) // 순서를 지키지 않아 toUpperCase 등 오류가 발생할 우려가 있을 때 tuple 사용 (순서와 값이 중요한 경우)
]



