var isDone = false;
// let name: string = "bob";
var list = [1, 2, 3];
var list2 = [1, 2, 3];
var x;
x = ['hello', 10];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
var colorName = Color[2];
console.log(c);
console.log(colorName);
var notSure = 4;
notSure = 'hahahaha';
console.log(notSure);
