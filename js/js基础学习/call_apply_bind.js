// 原文出处：https://www.cnblogs.com/moqiutao/p/7371988.html
/**
 * call 和 apply 都是为了改变某个函数运行时的上下文（context）而存在的，换句话说就是为了改变函数体内部this的指向。
 * js的一大特点是，函数存在[定义时上下文]和[运行时上下文]以及[上下文是可以改变的]这样的概念。
 */

function Fruits(){}
Fruits.prototype = {
    color: "red",
    say: function() {
        console.log(`my color is ${this.color}`)
    }
};
var apple = new Fruits();
// apple.say();

// 如果我们有一个对象banana，我们不想重新定义say方法，那么可以通过call或者apply用apple的say方法：
banana = {
    color: 'yellow'
};
// apple.say.apply(banana);
// apple.say.call(banana);
// 可以看出call和apply是为了动态改变this而出现的，当一个object没有某个方法（本例子banana没有say方法），但是其他的有，
// 我们可以借助call或者apply用其他的对象方法来操作。


// call/apply的用法与区别： 作用一样，只是接受参数的方式不一样，call是把需要的参数传递进去，apply则是把参数放到数组里。

// call、apply实例：

// 数组之前追加
var array1 = [12, 'foo', {name:'joe'}, -234];
var array2 = ['doe', 333, 883];
Array.prototype.push.apply(array1, array2);
array1.push('000');
array2.push('23333');
console.log(array1);
console.log(array2);

// 获取数组中的最大值和最小值
var numbers = [5, 458, 120, -124];
var maxInNumbers = Math.max.apply(null, numbers);
console.log(maxInNumbers);
var minInNumbers = Math.min.call(null, ...numbers);
console.log(minInNumbers);

// 验证是否数组（前提toString()方法没有被重写过）
function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}
console.log(apple.toString());

// 类（伪）数组使用数组方法:js中存在一种名为伪数组的对象结构。比较特别的是arguments对象，还有像调用getElementByTagName,之类的，
// 它们返回的NodeList对象都属于伪数组。不能应用array下的push，pop方法。但是可以通过以下方法转换为真正的数组带有length属性的对象。
// var domNodes = Array.prototype.slice.call(document.getElementsByTagName('div'));

function log() {
    const arr = Array.prototype.slice.call(arguments);
    arr.unshift('(app)');
    return console.log.apply(null, arr)
}
log(1,2,3);