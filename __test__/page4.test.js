/*
 * @Description: 
 * @Author: liyoucheng
 * @Date: 2020-04-10 13:08:09
 * @LastEditors: liyoucheng
 * @LastEditTime: 2020-04-10 14:00:21
 */
import Province from './../src/Business/Refactor/page4/Province.js';

function sampleProvinceData() {
  return {
    name: 'Asia',
    producers: [
      {name: 'Byzantium', cos: 10, production: 9},
      {name: 'Attalia', cos: 12, production: 10},
      {name: 'Sinope', cos: 10, production: 6},
    ],
    demand: 30,
    price: 20
  };
}

test('shortfall', () => {
  const asia = new Province(sampleProvinceData());
  expect(asia.shortfall).toBe(5);
})


