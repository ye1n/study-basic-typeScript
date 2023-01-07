//변수 생성시 타입 지정
let v1: string[] = ['kim', 'kang'];
let v2: Type1 = 12;
let v3: { name?: string, age: number } = { age: 20 };
//특정 속성이 선택사항일때 물음표 기입
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