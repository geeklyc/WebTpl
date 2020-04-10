/*
 * @Description: 
 * @Author: liyoucheng
 * @Date: 2020-04-10 09:05:35
 * @LastEditors: liyoucheng
 * @LastEditTime: 2020-04-10 10:09:13
 */
function sum(a, b) {
  return a + b;
}

function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(callback, ms) {
  await timeout(ms);
  // console.log(value);
  callback('peanut butter')
  // return 'peanut butter';
}

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve('peanut butter'), 1000);
  });
}

function fetchData1() {
  return new Promise((resolve, reject) => {
    setTimeout(reject('error'), 1000);
  });
}



module.exports = {
  sum,
  asyncPrint,
  fetchData,
  fetchData1
};
