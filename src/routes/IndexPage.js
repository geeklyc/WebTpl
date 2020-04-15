/*
 * @Description: 
 * @Author: liyoucheng
 * @Date: 2020-04-09 18:27:15
 * @LastEditors: liyoucheng
 * @LastEditTime: 2020-04-15 12:33:31
 */
import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { testPage1 } from './../Business/Refactor/page1/index';
import test from './../Business/TypeScript/greeter';
import Example from './../Business/Hook/index';

function IndexPage() {

  console.log(testPage1());
  // test();

  return (
    <Example />
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
