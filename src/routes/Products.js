/*
 * @Description: 
 * @Author: liyoucheng
 * @Date: 2020-04-09 18:33:43
 * @LastEditors: liyoucheng
 * @LastEditTime: 2020-04-10 08:35:00
 */
import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

// @connect(({ products }) => ({
//   products,
// }), (dispatch) => {
//   tDispatch
// });

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  );
};

// export default Products;
export default connect(({ products }) => ({
  products,
}))(Products);
