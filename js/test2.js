// 根据当前点索引值找到数组中不一样的点的起始点跟终止点
var x = [1,1,2,2,3,3,3,5,5,8,8];
var index = 0;

function getLastTime(index) {
  var sIndex = 0;
  var eIndex = 0;
  if (index > x.length - 1) {
    return;
  }
  for (let i = index; i < x.length;i++) {
    if (x[index] !== x[i]){
      eIndex = i - 1;
      break;
    }
  }
  for (let j = index;j > 0;j--) {
    if (x[index] !== x[j]){
      sIndex = j + 1;
      break;
    }
  }
  if (eIndex < sIndex) {
    eIndex = x.length - 1;
  }
  console.log('开始坐标：--', sIndex, ':', x[sIndex]);
  console.log('结束坐标：--',eIndex, ':', x[eIndex]);
  return {
    sIndex,
    eIndex,
  };
}

console.log(getLastTime(index));
// getLastTime(index);

// console.log('MS11-B0D59DF795D2 SN:MS110CA9430019'.substring(0, 17));

// function time2Month(times2){
//   const date1 = new Date();
//   const thatDate = new Date(times2); // 目标日期
//   const currentDay = date1.getFullYear() + '/' + (Number(date1.getMonth()) + 1) + '/' + date1.getDate() + ' 00:00:00';
//   const thatDay = thatDate.getFullYear() + '/' + (Number(thatDate.getMonth()) + 1) + '/' + thatDate.getDate() + ' 00:00:00';
//   const currentDay1 = new Date(currentDay);
//   const thatDay1 = new Date(thatDay);
//   const oneDay = 1000 * 60 * 60 * 24;
//   const t1 = currentDay1.getTime(); // 今天0点时间戳
//   const t2 = thatDay1.getTime(); // 目标年0点时间戳
//   const thatYear = (new Date(times2)).getFullYear(); // 目标年份
//   let absTimes = Math.abs(t1 - t2);
//   if(thatYear % 100 !== 0 && thatYear % 4 === 0 || thatYear % 400 === 0) { // 判断闰年
//     absTimes = absTimes + oneDay; // 闰年补一天
//   }
//   const times = new Date(absTimes);
//   const y = times.getFullYear() - 1970;
//   const m = times.getMonth();
//   const textYear = y > 0 ? y + '年' : '';
//   const textMonth = m > 0 ? m + '月' : '';
//   return (textYear + textMonth).length ? textYear + textMonth : '0月';
// }
//
// const test1 = (new Date('2016-06-20')).getTime();
// const test2 = (new Date('2016-06-20 08:00:00')).getTime();
// const test3 = (new Date('2016-06-20 23:00:00')).getTime();
//
// console.log('8点：', time2Month(test1));
// console.log('0点：', time2Month(test2));
// console.log('test30点：', time2Month(test3));

// const result = [];
// function  showData(result) {
//   let showData = [];
//   // .....
//   console.log(showData);
// }
//
// showData(result);
