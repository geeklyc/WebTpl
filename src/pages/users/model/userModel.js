/*
 * @Description: 
 * @Author: liyoucheng
 * @Date: 2020-05-02 18:30:04
 * @LastEditors: liyoucheng
 * @LastEditTime: 2020-05-03 00:19:11
 */
import request from './../../../utils/request';
import { initPagination }  from './../../../constants/constatns';
// /Users/xiaofan/D/sources/newGit/Web/webTpl/src/constants
export function fetch({ page = 1 }) {
  return request(`/api/users?_page=${page}&_limit=${initPagination.pageSize}`);
}

// export default {
//   namespace: 'userModel',
//   state: {
//     name: '李游城'
//   },
//   reducers: {
//     // 'delete'(state, { payload: id }) {
//     //   return state.filter(item => item.id !== id);
//     // },
//   },
// };

export default {
  namespace: 'users',
  state: {
    list: [],
    pagination: {
      ...initPagination,
    },

  },
  reducers: {
    // save(state, { payload: { data: list, total } }) {
    //   return { ...state, list, total };
    // },
  },
  effects: {
    fetchList({ payload: { page } }, { call, pub, select }) {
      const nameSpaceState = select(state => state.users.list);
      console.log('nameSpace', nameSpaceState);
      // fetch({})
    }
    // *fetch({ payload: { page } }, { call, put }) {
    //   const { data, headers } = yield call(usersService.fetch, { page });
    //   yield put({ type: 'save', payload: { data, total: headers['x-total-count'] } });
    // },
  },
  subscriptions: {
    // setup({ dispatch, history }) {
    //   return history.listen(({ pathname, query }) => {
    //     if (pathname === '/users') {
    //       dispatch({ type: 'fetch', payload: query });
    //     }
    //   });
    // },
  },
};