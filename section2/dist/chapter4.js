// 타입 별칭
let user = {
    id: 1,
    name: "홍길동",
    nickname: "castlectry",
    birthday: "1998.05.12",
    bio: "bio",
    location: "성남시"
};
/* Alias 지정하여 인덱스 시그니처 사용 */
let countryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk"
};
let countryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826
};
/* (오류 발생 x) */
let test = {};
export {};
/*
* 인덱스 시그니처의 오류 주의
* 규칙을 위반하지만 않으면 모두 허용되기 때문에 공백도 허용 됨.
* property의 타입과 인덱스 시그니처의 타입이 일치하지 않는 경우 오류 발생. (chapter5에 서술 예정)
* */
