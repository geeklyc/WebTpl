/*
 * @Description: 
 * @Author: liyoucheng
 * @Date: 2020-04-09 18:40:27
 * @LastEditors: liyoucheng
 * @LastEditTime: 2020-05-02 19:33:51
 */
import dva from 'dva';
import './index.css';
// import

// 1. Initialize
// const app = dva();
const app = dva({
  //  initialState: {
  //   products: [
  //      { name: 'dva', id: 1 },
  //      { name: 'antd', id: 2 },
  //    ],
  //  },
 });

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./pages/users/model/userModel').default);

// 4. Router
// app.router(require('./router').default);
app.router(require('./router/index').default);

// 5. Start
app.start('#root');
