// 타입 별칭

/*
* 유저마다 변수로 할당하면 반복되는 중복 코드가 너무 많아지게 됨
*
* 이 경우 객체를 변수 처럼 선언하여 사용 (타입 별칭)
*
* 같은 scope내에서 재선언하지 않도록 type 선언에 주의 (함수 내 에서 재 선언시 해당 타입을 사용)
*  */

// 객체 타입 정의 예시
type User = {
    id: number;
    name: string;
    nickname: string;
    birthday: string;
    bio: string;
    location: string;
}

let user: User = {
    id: 1,
    name: "홍길동",
    nickname: "castlectry",
    birthday: "1998.05.12",
    bio: "bio",
    location: "성남시"
}

// 인덱스 시그니처

type CountryCodes = {
    /* (하드 코딩 예제)
    Korea: string;
    UnitedStates: string;
    UnitedKingdom: string;
    */
    [key: string]: string;
}

/* Alias 지정하여 인덱스 시그니처 사용 */
let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk"
}

/*
* ... 만약 몇백개의 국가 코드를 여기에 다 넣어야 하는가 ???
*
* key와 value 모두 string이므로 인덱스 시그니처로 규칙을 설정
* */


/* 인덱스 시그니처 예제2 */
type CountryNumberCodes = {
    [key: string]: number;
    // Korea: number;  /* 반드시 필요한 값 (하단의 시그니처 오류 예방법) */
}

let countryNumberCodes: CountryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826
}

/* (오류 발생 x) */
let test: CountryNumberCodes = {}

/*
* 인덱스 시그니처의 오류 주의
* 규칙을 위반하지만 않으면 모두 허용되기 때문에 공백도 허용 됨.
* property의 타입과 인덱스 시그니처의 타입이 일치하지 않는 경우 오류 발생. (chapter5에 서술 예정)
* */




