// 객체(object)
/*

let user: object = {    // 객체기는 하나 그 이상은 모르기 때문에 하단 user.id; 에서 오류 발생
    id: 1,
    name: "조성국"
};

*/

let user: {
   id?: number; /* ?의 의미는 nullAble의 의미 이고 만약 데이터가 있다면 해당 자료형을 따라야 함 (선택적[optional] Property) */
   name: string;
} = {    // 이와 같이 위에 타입을 정의하고 마치 리터럴 문법과 비슷해 "객체 리터럴" 타입이라고 언급함
    id: 1,
    name: "조성국"
};

let dog: {
    name: string;
    color: string;
} = {
    name: "돌돌이",
    color: "brown"
}

/*
* 객체의 구조를 기준으로 타입을 정의
* 이를 구조적 타입 시스템 이라고 부름 (Property Based Type System)
*
* Java와 Python 과 같이 객체는 명목적 타입 시스템을 사용
* */

user.id;

user = {    // 위에서 id는 nullAble 설정
    name : "홍길동"
}



let config: {
    readonly apiKey: string;    /* readonly : 수정 불가 속성 */
} = {
    apiKey: "KEY"
}

// config.apiKey = "hacked"; (에러 발생)

