let birth = '2020/01/01';

const Person = {
  name: '张三',
  birth,
  hello() {
    console.log('hello ', this.name)
  }
};

Person.hello();

let user = {
  name: 'test1'
};
let foo = {
  bar: 'test2'
};

console.log({user, foo});


console.log(Person.hello.name);
console.log('/*****************************/');
for (let item in Person) {
  console.log(item)
}
console.log('/************Object.keys*****************/');
console.log(Object.keys(Person));
console.log('/************Object.getOwnPropertyNames*****************/');
console.log(Object.getOwnPropertyNames(Person));
console.log('/**************Reflect.ownKeys***************/');
console.log(Reflect.ownKeys(Person));

console.log('/**************Object.assign()***************/');

const target = {
  target: 1,
};

const test = {
  h: {
    a: 1,
    b: {
      a: 2
    }
  },
  a:1,
};

Object.assign(target, test);

test.h.a = 111;
test.a = 333;
console.log(target);

