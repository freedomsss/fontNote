const data = {
  goods: {
    list: [{
      price: 10
    }]
  }
}

// console.log(data.goods.list[0].price)
function get (obj, props, def) {
  if ((obj == null) || obj == null || typeof props !== 'string') return def
  const temp = props.split('.')
  const fieldArr = [].concat(temp)
  temp.forEach((e, i) => {
    if (/^(\w+)\[(\w+)\]$/.test(e)) {
      const matchs = e.match(/^(\w+)\[(\w+)\]$/);
      const field1 = matchs[1]
      const field2 = matchs[2]
      const index = fieldArr.indexOf(e)
      fieldArr.splice(index, 1, field1, field2)
    }
  })
  return fieldArr.reduce((pre, cur) => {
    const target = pre[cur] || def

    if (target instanceof Array) {
      return [].concat(target)
    }
    if (target instanceof Object) {
      return Object.assign({}, target)
    }
    return target
  }, obj)
}

// console.log(get(data, data.goods.list[0].price, 0))
function pointer (obj, path = []) {
  return new Proxy({}, {
    get (target, property) {
      return pointer(obj, path.concat(property))
    },
    apply (target, self, args) {
      let val = obj
      let parent
      for (let i = 0; i < path.length; i++) {
        if (val === null || val === undefined) break
        parent = val
        val = val[path[i]]
      }
      if (val === null || val === undefined) {
        val = args[0]
      }
      return val
    }
  })
}

// console.log(pointer(data).goods())


function processAarray(items, process, callback) {
  var todo = items.concat(); // 克隆原来的数组
  setTimeout(function () {
    process(todo.shift());
    if (todo.length > 0){
      setTimeout(arguments.callee, 25)
    } else {
      callback(items)
    }
  }, 25)
}
var arr = []
console.log(arr.join('，'))

