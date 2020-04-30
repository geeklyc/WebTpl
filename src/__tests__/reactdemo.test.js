/*
 * @Description:
 * @Author: liyoucheng
 * @Date: 2020-04-30 10:07:55
 * @LastEditors: liyoucheng
 * @LastEditTime: 2020-04-30 12:30:43
 */
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDemo from './reactdemo';

configure({ adapter: new Adapter() });

describe('测试一个react组件', () => {
  it('测试reactdemo', () => {
    const app = shallow(<ReactDemo />);
    expect(app.find('a').text()).toBe('title');
  });
});
