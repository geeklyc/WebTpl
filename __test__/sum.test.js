/*
 * @Description: 
 * @Author: liyoucheng
 * @Date: 2020-04-10 09:05:07
 * @LastEditors: liyoucheng
 * @LastEditTime: 2020-04-10 09:07:51
 */
const sum = require('./../src/models/sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});