/*
 * @Description: 
 * @Author: liyoucheng
 * @Date: 2020-04-09 18:35:08
 * @LastEditors: liyoucheng
 * @LastEditTime: 2020-05-02 18:36:39
 */
import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import UsersPage from './Business/users/UsersPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" exact component={Products} />
        <Route path="/users" exact component={UsersPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
