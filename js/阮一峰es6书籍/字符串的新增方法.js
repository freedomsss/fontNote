let { log } = console;
// ES5 提供String.fromCharCode()方法，用于从 Unicode 码点返回对应字符，但是这个方法不能识别码点大于0xFFFF的字符。
log(String.fromCharCode(0x20BB7));
// ES6 提供了String.fromCodePoint()方法，可以识别大于0xFFFF的字符，弥补了String.fromCharCode()方法的不足。在作用上，正好与下面的codePointAt()方法相反。
log(String.fromCodePoint(0x20BB7));
// String.raw()方法可以作为处理模板字符串的基本方法，它会将所有变量替换，而且对斜杠进行转义，方便下一步作为字符串来使用。
const s = "𠮷a"; // 普通汉字占两个字节，但是有些汉字占4四个字节比如 𠮷 导致判断其长度为2

const arr = [...s];
log(s.length);
log(arr);
log(arr.length);

function is32Bit(c) {
  return c.codePointAt(0) > 0xFFFF;
}

is32Bit("𠮷"); // true
is32Bit("a"); // false

// includes()：返回布尔值，表示是否找到了参数字符串。
// startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
// endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
// 这三个方法都支持第二个参数，表示开始搜索的位置。
let s1 = 'Hello world!';

s1.startsWith('Hello'); // true
s1.endsWith('!'); // true
s1.includes('o'); // true

// repeat方法返回一个新字符串，表示将原字符串重复n次。参数需是大于0的整数，如果是小数会取整，小于0会报错，参数如果是字符串会先转成数字
'x'.repeat(3); // "xxx"
'hello'.repeat(2); // "hellohello"
'na'.repeat(0); // ""

// 如果某个字符串不够指定长度，会在头部或尾部补全。如果第二参数省略，则默认用空格补全长度。
'x'.padStart(5, 'ab'); // 'ababx'
'x'.padStart(4, 'ab'); // 'abax'

'x'.padEnd(5, 'ab'); // 'xabab'
'x'.padEnd(4, 'ab'); // 'xaba'

// 对字符串新增了两个方法trimStart()和trimEnd()，分别是去除字符串的首位空格。
const s2 = '  abc  ';

s2.trim(); // "abc"
s2.trimStart(); // "abc  "
s2.trimEnd(); // "  abc"
