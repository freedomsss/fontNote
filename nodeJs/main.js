var fs = require("fs");
var events = require('events');
// 默认监听器最好不要超过10个

// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
// 阻塞代码
// var data = fs.readFileSync('input.txt');
//
// console.log(data.toString());
// console.log("程序执行结束!");

// 非阻塞代码
// fs.readFile('input.txt', function (err, data) {
//     if (err) return console.error(err);
//     console.log(data.toString());
// });


// 创建事件处理程序
var connectHandler = function connected() {
    console.log('连接成功。');

    // 触发 data_received 事件
    eventEmitter.emit('data_received');
};

// 绑定 connection 事件处理程序
// on(event, listener)
// 为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。
eventEmitter.on('connection', connectHandler);

// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function(){
    console.log('数据接收成功。');
});

// 触发 connection 事件
eventEmitter.emit('connection');

var sayHello = function hello(name1, name2) {
    console.log('hello', name1, name2)
};
eventEmitter.on('sayHello', sayHello);

setTimeout(() => {
    eventEmitter.emit('sayHello', '张三', '李四');
}, 0);


console.log("程序执行结束!");

const buf = Buffer.from('runoob', 'ascii');
// 输出 72756e6f6f62
console.log(buf.toString('hex'));

// 输出 cnVub29i
console.log(buf.toString('base64'));
