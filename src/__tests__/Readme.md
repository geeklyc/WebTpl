<!--
 * @Description: 
 * @Author: liyoucheng
 * @Date: 2020-04-30 12:40:59
 * @LastEditors: liyoucheng
 * @LastEditTime: 2020-04-30 12:59:15
 -->

expect(data).toEqual({one: 1, two: 2});
expect(2 + 2).toBe(4);

toBeNull 只匹配 null
toBeUndefined 只匹配 undefined
toBeDefined 与 toBeUndefined 相反
toBeTruthy 匹配任何 if 语句为真
toBeFalsy 匹配任何 if 语句为假

expect(value).toBeGreaterThan(3);
expect(value).toBeGreaterThanOrEqual(3.5);
expect(value).toBeLessThan(5);
expect(value).toBeLessThanOrEqual(4.5);

// toBe and toEqual are equivalent for numbers
expect(value).toBe(4);
expect(value).toEqual(4);
expect(value).toBeCloseTo(0.3); // 这句可以运行

expect('Christoph').toMatch(/stop/);

expect(shoppingList).toContain('beer');

expect(compileAndroidCode).toThrow('you are using the wrong JDK');

[https://jestjs.io/docs/zh-Hans/getting-started](https://jestjs.io/docs/zh-Hans/getting-started)
[https://www.npmjs.com/package/enzyme](https://www.npmjs.com/package/enzyme)
