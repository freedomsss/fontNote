function sayHello(person: string) {
    return 'Hello, ' + person;
}

let user = 'test';
console.log(sayHello(user));
// 对象
interface Person {
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom: Person = {
    name: 'tom',
    age: 20,
    sex: '1',
    height: '100'
};

tom.id = 1;

console.log(tom);
// 数组
let fib: any[] = [0,0,1,'9'];

// 函数

let mySum = function (x:number, y:number): number {
    return x + y;
};

let sumNum = mySum(1,2);

console.log(sumNum);
