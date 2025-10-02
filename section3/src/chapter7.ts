/*
* 타입 좁히기
* 조건문 등을 이용해 넓은타입에서 좁은타입으로
* 타입을 상황에 따라 좁히는 방법을 이야기
* */

type Person = {
    name: string;
    age: number;
}

/*
* 만약 value의 타입이
* number 인경우 toFixed 함수를
* string 타입인 경우 toUpperCase를 적용한 값을 출력
* Date 타입인 경우 getTime
* Person 타입인 경우 name은 age살 입니다. 출력
* */
function func(value: number | string | Date | Person) {

    // 조건문 밖에서 toFixed와 toUpperCase 를 사용 시 오류 발생.
    // 하단과 같이 조건문을 사용한 중괄호 내에서의 value는 타입이 보장되어 변수의 타입이 더 좁은 타입으로 보장 됨
    // 이를 "타입 좁히기" 라는 기능
    if(typeof value === 'number') {
        console.log(value.toFixed());
    } else if (typeof value === 'string') {
        console.log(value.toUpperCase());
        // } else if (typeof value === 'object') {     // 주의 !!! 자바스크립트 내 typeof null => object 반환 하기 때문에
    } else if (value instanceof Date) {     // instanceof 객체 check true/false 로 판단 하는 것이 옳다 (타입 객체가 아닌 클래스만 가능)
        console.log(value.getTime().toString());
    } else if (value && 'age' in value) {               // 객체 타입은 instance of 를 사용 불가능 (class의 instance 인지 확인하는 연산자이기 때문) 따라서 다음과 같이 in 을 사용한 특정 property가 value라는 값 에 있는지 체크 하는 방식
        console.log(`%{value.name}은 ${value.age}살 입니다.`);
    }

}