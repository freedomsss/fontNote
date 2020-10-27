const time = ["14:00", "14:00", "14:00", "14:05", "14:05", "14:05", "14:10", "14:10", "14:10", "14:10", "14:10", "14:11"];
// const time = ["14:00"];
const frequency = [0, 0, 0, 0, 2.48, 0, 4, 1, 1, 0, 0, 1];
// const frequency = [0];

/**
 * 取出不一样的点的索引值，记录起始点跟终点的索引值
 * @param Arr
 * @returns {Array}
 */
function getIndexArr(Arr){
  const len = Arr.length;
  if (!len) return [];
  let result = [];
  if (len === 1) {
    result.push([0,0]);
    return result;
  }
  let FirstIndex = 0;
  for (let i = 0;i < len; i++) {
    if (Arr[i] !== Arr[i+1]) {
      result.push([FirstIndex, i]);
      FirstIndex = i + 1;
    }
  }
  return result;
}

/**
 *XArr取出索引值，利用其取出的索引值，对YArr合并一组并去重，去0
 * @param YArr
 * @param XArr
 * @returns {{yResult: Array, xResult: Array}}
 */
function getResultArr(YArr, XArr) {
  if (YArr.length !== XArr.length) {
    return {
      xResult: [],
      yResult: [],
    };
  }
  let yResult = [];
  let xResult = [];
  getIndexArr(XArr).forEach((item) => {
    let currentYArr = [];
    let currentXArr = [];
    if (item[0] === item[1]) {
      currentYArr.push(YArr[item[0]])
    } else {
      for (let i = item[0]; i <= item[1]; i++) {
        currentYArr.push(YArr[i]);
        currentYArr = currentYArr.filter((sItem) => { // 数组去0
          return sItem !== 0;
        });
        if (!currentYArr.length) {
          currentYArr.push(0);
        }
      }
    }
    for (let i = 0; i < currentYArr.length; i++) {
      currentXArr.push(XArr[item[0]]);
    }
    xResult.push(...currentXArr);
    yResult.push(...currentYArr);
  });
  return {
    xResult,
    yResult,
  }
}

// 数组去重
// function filterArr(arr) {
//   const len = arr.length;
//   if (Object.prototype.toString.call(arr) !== '[object Array]' || !len) {
//     return [];
//   }
//   let newArr = [];
//   for (let i = 0; i < len; i++) {
//     if (!isInArray(newArr, arr[i])) {
//       newArr.push(arr[i])
//     }
//   }
//   return newArr
// }
//
// function isInArray(arr,value){
//   for(let i = 0; i < arr.length; i++){
//     if(value === arr[i]){
//       return true;
//     }
//   }
//   return false;
// }

// console.log(getIndexArr(time));
// getResultArr(frequency, frequency);
console.log(getResultArr(frequency, time));

function unique(arr){
  for(var i=0; i<arr.length; i++){
    for(var j=i+1; j<arr.length; j++){
      if(arr[i]===arr[j]){         //第一个等同于第二个，splice方法删除第二个
        arr.splice(j,1);
        j--;
      }
    }
  }
  return arr;
}

function uniqArr10(arr){
  const s = new Set();
  arr.forEach(x => s.add(x));
  return [...s]
}
var arr = [1,1,'true','true',true,true,15,15,false,false,'true', undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr));
console.log(uniqArr10(arr));


