/*
* 서로소 유니온 타입
* (교집합이 없는 타입들로만 만든 유니온 타입)
* */

type Admin = {
    tag: "ADMIN";
    name: string;
    kickCount: number;
};

type Member = {
    tag: "MEMBER";
    name: string;
    point: number;
};

type Guest = {
    tag: "GUEST";
    name: string;
    visitCount: number;
};

type User = Admin | Member | Guest;

/*
* Admin  : {name}님 현재까지 {kickCount}명 강퇴했습니다.
* Member : {name}님 현재까지 {point}모았습니다.
* Guest  : {name}님 현재까지 {visitCount}번 방문하셨습니다.
*/

function login(user: User) {

    /*
    // admin 타입
    if('kickCount' in user) {
        console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
    }
    // member 타입
    else if ('point' in user) {
        console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
    }
    // guest 타입
    else {
        console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
    }
    */

    // 위와 같이 코드 작성시, 주석도 없고 조건문으로 작성하면 어떤 타입에 할당 된 것인지 알아보기 힘듦.
    // 리뷰하려면 결국 다시 타입을 확인하고 타입 가드를 확인해야하므로 직관적이지 않음.
    // 이 경우 서로소 유니온 타입 (리터럴 프로퍼티를 통한 확인)


    // 방법 1
    switch (user.tag) {
        case "ADMIN": {
            console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
            break;
        }
        case "MEMBER": {
            console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
            break;
        }
        case "GUEST": {
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
            break;
        }
    }

    // 방법 2
    if(user.tag === "ADMIN") {
        console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
    }
    // member 타입
    else if (user.tag === "MEMBER") {
        console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
    }
    // guest 타입
    else {
        console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
    }

}



/*
* 복습겸 한가지 추가 사례
* */

// 비동기 작업의 결과를 처리하는 객체 예제
/*
* 로딩 중: 콘솔에 로딩중 출력
* 실패: 에러 메시지 출력
* 성공: 데이터 출력
*/
type LoadingTask = {
    state: "LOADING";
};

type FailedTask = {
    state: "FAILED";
    error: {
        message: string;
    };
};

type SuccessTask = {
    state: "SUCCESS";
    response: {
        data: string;
    };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

// !! 위와 같이 서로소 유니온 타입으로 타입 좁히기를 통한 안전한 코드 작성이 중요 !!
function processResult(task: AsyncTask) {
    switch (task.state) {
        case "LOADING": {
            console.log("로딩 중");
            break;
        }
        case "FAILED": {
            console.log(`에러 발생: ${task.error.message}`);

            break;
        }
        case "SUCCESS": {
            console.log(`성공: ${task.response.data}`);

            break;
        }
    }
}

const loading : AsyncTask = {
    state: "LOADING",
}

const failed : AsyncTask= {
    state: "FAILED",
    error: {
        message: "오류 발생 {exception}~~~"
    }
}

const success : AsyncTask= {
    state: "SUCCESS",
    response: {
        data: "데이터 ~~~"
    }
}
