/*
 * @Description: 
 * @Author: liyoucheng
 * @Date: 2020-04-15 12:30:30
 * @LastEditors: liyoucheng
 * @LastEditTime: 2020-04-15 12:37:31
 */
import invoices from './../src/Business/Refactor/page1//invoices.json';
import plays from './../src/Business/Refactor/page1//plays.json';
import { statement }  from './../src/Business/Refactor/page1/index';

test('账单信息', () => {
  const rec = 'Statement for BigCo\n Hamlet: $650.00 55 seats\n As You Like It: $580.00 35 seats\n Othello: $500.00 40 seats\nAmount owed is $1,730.00\nYou earned 47 credits';
  expect(statement(invoices[0], plays)).toMatch(rec);
})
