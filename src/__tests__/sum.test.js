/*
 * @Description:
 * @Author: liyoucheng
 * @Date: 2020-04-28 14:56:50
 * @LastEditors: liyoucheng
 * @LastEditTime: 2020-04-28 14:57:28
 */
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
