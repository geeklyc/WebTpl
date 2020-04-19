/*
 * @Description: 
 * @Author: liyoucheng
 * @Date: 2020-04-09 18:27:15
 * @LastEditors: liyoucheng
 * @LastEditTime: 2020-04-17 15:53:46
 */
import React from 'react';
import { connect } from 'dva';
import { Form } from 'antd';
import styles from './IndexPage.css';
import { testPage1 } from './../Business/Refactor/page1/index';
import test from './../Business/TypeScript/greeter';
import Example from './../Business/Hook/index';
import Demo from './../components/Forms/index';

class IndexPage extends React.PureComponent {

  // console.log(testPage1());
  // test();
  render() {
    return (
      <React.Fragment>
        <Demo />
      </React.Fragment>
      // <Example />
    );
  }
}

IndexPage.propTypes = {
};


export default connect()(IndexPage);
