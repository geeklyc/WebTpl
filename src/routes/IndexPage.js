/*
 * @Description: 
 * @Author: liyoucheng
 * @Date: 2020-04-09 18:27:15
 * @LastEditors: liyoucheng
 * @LastEditTime: 2020-04-10 12:06:01
 */
import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import testPage1 from './../Business/Refactor/page1/index';

function IndexPage() {

  console.log(testPage1());

  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
