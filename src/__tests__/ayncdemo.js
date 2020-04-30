/*
 * @Description:
 * @Author: liyoucheng
 * @Date: 2020-04-30 13:00:53
 * @LastEditors: liyoucheng
 * @LastEditTime: 2020-04-30 13:11:49
 */
const fetchData = (callback) => {
  setTimeout(() => {
    callback('peanut butter');
  }, 3 * 1000);
};
// new Promise((resolve, reject) => {
//   resolve('the data
// is peanut butter');
//   // setTimeout(() => {
//   //   resolve('the data is peanut butter');
//   // }, 3 * 1000);
// })
export default fetchData;
