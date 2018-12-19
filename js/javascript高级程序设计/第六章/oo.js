var person = new Object();
person.name = 'zhangsan';
person.age = 29;
person.job = 'software engineer';
person.sayName = function () {
    console.log(this.name)
}
// person.sayName();
delete person.name;
// console.log(person.name)

var person2 = {};
Object.defineProperty(person2, 'name', {
    writable: false, // 能否修改属性的值
    value: 'lisi'
});
// console.log(person2.name)
person2.name = 'hahaha';
Object.defineProperty(person2, 'job', {
    confingurable: false,
    value: 'techer'
})

// console.log(person2.job)
delete person2.job
delete person2.name
// console.log(person2.job)
// console.log(person2.name)

var book = {
    _year: 2004, // 下划线表示只能通过对象方法访问的属性
    edit:1
};

Object.defineProperty(book, 'year', {
    get:function () {
        return this._year;
    },
    set:function (v) {
        if (v > 2004) {
            this._year = v;
            this.edit += v - 2003
        }
    }
})

console.log(book.year)
book.year = 2006;
console.log(book.edit)