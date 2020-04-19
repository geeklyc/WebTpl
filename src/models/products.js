/*
 * @Description: 
 * @Author: liyoucheng
 * @Date: 2020-04-09 18:37:32
 * @LastEditors: liyoucheng
 * @LastEditTime: 2020-04-09 18:37:32
 */
export default {
  namespace: 'products',
  state: [],
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },

    'save'(state, { payload }) {
      return
    }

    
  },
};