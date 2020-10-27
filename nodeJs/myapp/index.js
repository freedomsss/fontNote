const ProgressBar = require('progress');
const chalk = require('chalk');
const car = require('./file1').car;

console.log(car);

const bar = new ProgressBar(':bar', { total: 10 });
const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
    console.log(chalk.blue('准备好啦'));
  }
}, 100);


// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// readline.question(`你叫什么名字?`, name => {
//   console.log(`你好 ${name}!`, chalk.blue('欢迎你'));
//   readline.close()
// });

//
// const inquirer = require('inquirer')
//
// var questions = [
//   {
//     type: 'input',
//     name: 'name',
//     message: "你叫什么名字?"
//   }
// ]
//
// inquirer.prompt(questions).then(answers => {
//   console.log(`你好 ${answers['name']}!`)
// })

// const foo = () => {
//   console.log('正常队列1');
//   setTimeout(() => {
//     console.log('setTimeout:消息队列1')
//   }, 0);
//   console.log('正常队列2');
//   new Promise((resolve, reject) => {
//       resolve('Promise111111111,看看我在那里')
//   }).then(resolve => console.log(resolve));
//   console.log('正常队列3');
//   setTimeout(() => {
//     console.log('setTimeout:消息队列2')
//   }, 0);
//   console.log('正常队列4');
//   new Promise((resolve, reject) => {
//     resolve('Promise22222,看看我在那里')
//   }).then(resolve => console.log(resolve));
// };
//
// foo();

// let done = true;
// const doSomething = () => {
//   return new Promise((resolve, reject) => {
//     if (done) {
//       const workDone = '这是创建的东西';
//       resolve(workDone)
//     } else {
//       const why = '还有点事';
//       reject(why)
//     }
//   })
// };
// doSomething().then(resolve => console.log(resolve)).catch(error => console.log(error));

// const first = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, '第一个')
// });
// const second = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, '第二个')
// });
//
// Promise.race([first, second]).then(result => {
//   console.log(result) // 第二个
// });
//
// Promise.all([second, first]).then(([res1, res2]) => {
//   console.log('结果', res1, res2)
// });

const doSomethingAsync = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('做些事情'), 100)
  })
};

// const doSomething = async () => {
//   console.log(await doSomethingAsync())
// };
const doSomething = async () => {
  console.log(await doSomethingAsync())
};

console.log('之前');
doSomething();
console.log('之后');

const promiseToDoSomething = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('做些事情'), 1000)
  })
};

const watchOverSomeoneDoingSomething = async () => {
  const something = await promiseToDoSomething();
  return something + ' 查看'
};

const watchOverSomeoneWatchingSomeoneDoingSomething = async () => {
  const something = await watchOverSomeoneDoingSomething();
  return something + ' 再次查看'
};

watchOverSomeoneWatchingSomeoneDoingSomething().then(res => {
  console.log(res)
});

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('start', () => {
  console.log('开始')
});
eventEmitter.emit('start');

const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('你好世界\n')
});

const options = {
  hostname: 'localhost',
  port: 443,
  path: '/todos',
  method: 'GET'
};

const req = http.request(options, res => {
  console.log(`状态码: ${res.statusCode}`);

  res.on('data', d => {
    process.stdout.write(d)
  })
});

req.on('error', error => {
  console.error(error)
});

server.listen(port, () => {
  console.log(`服务器运行端口号： ${port}`)
});
