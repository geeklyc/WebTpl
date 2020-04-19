/*
 * @Description: 
 * @Author: liyoucheng
 * @Date: 2020-04-19 23:42:12
 * @LastEditors: liyoucheng
 * @LastEditTime: 2020-04-19 23:42:12
 */
import { statement } from './../src/Business/Refactor/page1/index';
import invoices from './../src/Business/Refactor/page1/invoices.json';
import plays from './../src/Business/Refactor/page1/plays.json';

test('账单信息是否正确', () => {
    const originStr = "Statement for BigCo\n Hamlet: $650.00 55 seats\n As You Like It: $580.00 35 seats\n Othello: $500.00 40 seats\nAmount owed is $1,730.00\nYou earned 47 credits";
    const ret = statement(invoices[0], plays);
    expect(ret).toMatch(originStr);
});

