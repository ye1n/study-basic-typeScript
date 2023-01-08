//터미널-> tsc -w (js파일로 변경)
//변수 생성시 타입 지정(기본적으로 타입 자동 부여 됨)
let v1: string[] | number[] = ['kim', 'kang'];
let v2: Type1 = 12;
let v3: { name?: string, age: number } = { age: 20 };
//특정 속성이 선택사항일때 물음표 기입
let v4: [] | {} = ['kim', 'kang'];
type Type1 = string | number;
//타입 선언

function func(x: number): number {
    return x * 2
}
func(12)
//이 함수는 파라미터로 number, return 값으로 number

// type Member = [number, boolean];
// let john: Member = [123, true];

//object에 타입 지정해야 할 속성이 많으면
type Member = {
    [key: string]: string,
}
let john: Member = { name: 'kim', age: '123' }

class User {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

// Q1. 나의 이름, 나이, 출생지역을 변수로 저장
let myName: string = '우예인'
let myAge: number = 18
let myContry: string = '서울'

// Q2. 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 저장
type myType = {
    [key: string]: string,
}
let myFavorite: myType = { song: '잔나비', singer: '가을밤에 든 생각' }

// Q3. 아래 자료를 타입지정
// let project = {
//     member: ['kim', 'park'],
//     days: 30,
//     started: true,
// }
let project: {
    member: string[],
    days: number,
    started: boolean
} = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
}