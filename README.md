<!--
 * @Description: 
 * @Author: liyoucheng
 * @Date: 2020-04-09 18:01:45
 * @LastEditors: liyoucheng
 * @LastEditTime: 2020-04-10 08:44:34
 -->
# WebTpl
前端


### Dva
安装
```
npm install dva-cli -g
```

查看版本
```
dva -v
```

新建项目
```
dva new WebTpl
```

进入项目并启动服务
```
cd dva-quickstart
npm start
```

### antd
按需加载 antd babel-plugin-import
安装
```
npm install antd babel-plugin-import --save
```

### dva使用
1.定义路由
```
router.js问下引入
<Route path="/products" exact component={Products} />
```
2.编写组件
```
import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

const ProductList = ({ onDelete, products }) => {
  const columns = [{
    title: 'Name',
    dataIndex: 'name',
  }, {
    title: 'Actions',
    render: (text, record) => {
      return (
        <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
          <Button>Delete</Button>
        </Popconfirm>
      );
    },
  }];
  return (
    <Table
      dataSource={products}
      columns={columns}
    />
  );
};

ProductList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default ProductList;
```

3.定义model
```
export default {
  namespace: 'products',
  state: [],
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
};
```

4.连接
```
import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

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
```

5.构建应用
```
npm run build
```