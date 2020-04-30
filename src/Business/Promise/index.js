/*
 * @Description: 
 * @Author: liyoucheng
 * @Date: 2020-04-23 09:30:33
 * @LastEditors: liyoucheng
 * @LastEditTime: 2020-04-23 09:30:33
 */
// resolve 未完成->成功
// reject 未完成->失败
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  });
}

export const testPromise = () => {
  timeout(100).then((value) => {
    console.log(value);
  });
}