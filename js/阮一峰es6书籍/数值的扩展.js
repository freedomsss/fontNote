// Number.isFinite()用来检查一个数值是否为有限的（finite），即不是Infinity。
Number.isFinite(15); // true
Number.isFinite(0.8); // true
Number.isFinite(NaN); // false
Number.isFinite(Infinity); // false
Number.isFinite(-Infinity); // false

// Number.isNaN()用来检查一个值是否为NaN。他们与传统全局方法isFinite()和isNaN()的区别在于，传统方法先调用Number()
// 将非数值的值转为数值，再进行判断，而这两个方法只对数值有效。Number.isFinite()对于非数值一律返回false，Number.isNaN()，
// 只对于NaN才返回true,非NaN一律返回false.

isFinite(25); // true
isFinite("25"); // true
Number.isFinite(25); // true
Number.isFinite("25"); // false

isNaN(NaN);// true
isNaN("NaN"); // true
Number.isNaN(NaN); // true
Number.isNaN("NaN"); // false
Number.isNaN(1); // false

// ES6 将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。这样做的目的，是逐步减少全局性方法，
// 使语言逐步模块化。

// ES5的写法
parseInt('12.34'); // 12
parseFloat('123.45#'); // 123.45

// ES6的写法
Number.parseInt('12.34'); // 12
Number.parseFloat('123.45#'); // 123.45

// Number.isInteger() 用来判断一个数值是否为整数。

Number.isInteger(25); // true
Number.isInteger(25.0); // true
Number.isInteger('25'); // false

// 如果参数不是数值，Number.isInteger(),一律返回false

// js能够准确表示的整数范围在-2^53到2^53之间（不含两个端点）,超过这个范围，无法精确表示这个值。
// es6引入了Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER这两个常量，用来表示这个范围的上下限。

Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1;
// true
Number.MAX_SAFE_INTEGER === 9007199254740991;
// true

Number.MIN_SAFE_INTEGER === -Number.MAX_SAFE_INTEGER;
// true
Number.MIN_SAFE_INTEGER === -9007199254740991;
// true
//上面代码中，可以看到 JavaScript 能够精确表示的极限。

// Number.isSafeInteger()则是用来判断一个整数是否落在这个范围之内。

// ES6 在 Math 对象上新增了 17 个与数学相关的方法。所有这些方法都是静态方法，只能在 Math 对象上调用。

// Math.trunc方法用于去除一个数的小数部分，返回整数部分。

Math.trunc(4.1); // 4
Math.trunc(-4.1); // -4
Math.trunc(4.9); // 4
Math.trunc(-4.9); // -4

// 对于非数值，Math.trunc内部使用Number方法将其先转为数值。

Math.trunc('123.6'); // 123
Math.trunc(''); // 0
Math.trunc(false); // 0
Math.trunc(true); // 1

// 对于空值和无法截取整数的值，返回NaN。
Math.trunc(NaN);      // NaN
Math.trunc('foo123');    // NaN
Math.trunc();         // NaN
Math.trunc(undefined); // NaN


// Math.sign方法用来判断一个数到底是整数、负数、还是零。对于非数值，会先将其转换为数值。
// 它会返回五种值。

// 参数为正数，返回+1；
// 参数为负数，返回-1；
// 参数为 0，返回0；
// 参数为-0，返回-0;
// 其他值，返回NaN

Math.sign(-5); // -1
Math.sign(5); // +1
Math.sign(0); // +0
Math.sign(-0); // -0
Math.sign(NaN); // NaN

// 如果参数是非数值，会自动转为数值。对于那些无法转为数值的值，会返回NaN。

Math.sign('');  // 0
Math.sign(true);  // +1
Math.sign(false);  // 0
Math.sign(null);  // 0
Math.sign('9');  // +1
Math.sign('foo');  // NaN
Math.sign();  // NaN
Math.sign(undefined);  // NaN

// 指数运算es6新增了一个指数运算符（**）
// 2 ** 2 // 4
// 2 ** 3 // 8
// 这个运算符的一个特点是右结合，而不是常见的左结合。多个指数运算符连用时，是从最右边开始计算的。

// 2 ** 3 ** 2 // 相当于 2 ** (3 ** 2)
// // 512
