/*
 * @Description:
 * @Author: liyoucheng
 * @Date: 2020-04-30 12:59:34
 * @LastEditors: liyoucheng
 * @LastEditTime: 2020-04-30 13:04:15
 */

import fetchData from './ayncdemo';

test('the data is peanut butter', (done) => {
  function callback(data) {
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});
