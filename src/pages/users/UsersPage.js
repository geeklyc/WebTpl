/*
 * @Description: 
 * @Author: liyoucheng
 * @Date: 2020-05-02 18:29:25
 * @LastEditors: liyoucheng
 * @LastEditTime: 2020-05-02 19:56:16
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';

class UsersPage extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({
      type: 'users/fetchList', // 如果在 model 外调用，需要添加 namespace
      payload: {}, // 需要传递的信息
    });
  }
  render() {
    console.log('this.props', this.props);
    return (
    <div>用户管理界面的</div>
    );
  }
}

// export default Products;
export default connect(({ users }) => ({
  ...users,
}))(UsersPage);