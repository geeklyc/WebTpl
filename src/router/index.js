/*
 * @Description: 
 * @Author: liyoucheng
 * @Date: 2020-05-02 19:13:22
 * @LastEditors: liyoucheng
 * @LastEditTime: 2020-05-02 19:37:55
 */
// /*
//  * @Description: 
//  * @Author: liyoucheng
//  * @Date: 2020-05-02 18:38:42
//  * @LastEditors: liyoucheng
//  * @LastEditTime: 2020-05-02 18:53:05
//  */
// import React from 'react';
// // import { Router } from 'apollo/router';
// import { Router, Route, Switch } from 'dva/router';
// import PropTypes from 'prop-types';
// // import IndexPage from './'
// import AppPage from './../components/WorkSpace/index';
// // /Users/xiaofan/D/sources/newGit/Web/webTpl/src/components/WorkSpace
// // import Home from './home';

// const cached = {};
// const createRoutes = function (app) {
//   function registerModel(...models) {
//     models.forEach((item) => {
//       if (!cached[item.namespace]) {
//         app.model(item);
//         cached[item.namespace] = 1;
//       }
//     });
//   }
//   return {
//     path: '/',
//     component: AppPage,
//     // indexRoute: { onEnter: (nextState, replace) => replace('/workspace') },
//     // childRoutes: [Home(registerModel)]
//   };
// };

// const Routers = function ({ history, app }) {
//   return <Router history={history} routes={createRoutes(app)} />;
// };

// Routers.propTypes = {
//   history: PropTypes.object,
//   app: PropTypes.object
// };

// export default Routers;
/*
 * @Description: 
 * @Author: liyoucheng
 * @Date: 2020-04-09 18:35:08
 * @LastEditors: liyoucheng
 * @LastEditTime: 2020-05-02 18:36:39
 */
import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './../routes/IndexPage';
// import Products from './routes/Products';
import UsersPage from './../pages/users/UsersPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        {/* <Route path="/products" exact component={Products} /> */}
        <Route path="/users" exact component={UsersPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
