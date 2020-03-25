let isDone: boolean = false;
// let name: string = "bob";

let list:number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let x: [string, number];
x = ['hello', 10];

enum Color {
    Red,
    Green,
    Blue,
}

let c:Color = Color.Blue;
let colorName: string = Color[2];

console.log(c);
console.log(colorName);

let notSure: any = 4;
notSure = 'hahahaha';

console.log(notSure);
