/*
 * @Description: 
 * @Author: liyoucheng
 * @Date: 2020-04-09 18:27:15
 * @LastEditors: liyoucheng
 * @LastEditTime: 2020-05-02 19:37:37
 */
import React from 'react';
// import { Form, Input } from 'antd';
// import { connect } from 'dva';
// import styles from './IndexPage.css';
// import { statement } from './../Business/Refactor/page1/index';
// import testPage1 from './../Business/TypeScript/greeter';
// import Example from './../Business/Hook/index';
// import ByteInput from './../components/ByteInput/index';
// import FormComponent from './../components/Test/index';
// import charLength from './../utils/utils';
// import test from './../Business/TypeScript/greeter';
// import { testPromise } from './../Business/Promise';
// import App from './../components/App';

class IndexPage extends React.PureComponent {

  

  // console.log('obj', statement);
  // // console.log(testPage1());
  
  // const a = "中国a";
  // console.log('长度', charLength(a));

  // checkPrice = (rule, value, callback) => {
  //   console.log("value", value);
  //   const ret = charLength(value);
  //   if (ret <= 5) {
  //     return callback();
  //   }
  //   callback('Price must greater than zero!');
  //   // try {
  //   //   throw new Error('Something wrong!');
  //   // } catch (err) {
  //   //   callback(err);
  //   // }
  // }
  

  render() {
    // testPromise();
    // const { getFieldDecorator } = this.props.form;
    return (
      <div />
      // <React.Fragment>
      //   {/* <Form
          
      //     >
      //     <Form.Item
      //       label="限制字节数"
      //       name="age"
      //     >
      //       {
      //         getFieldDecorator('new', {
      //           rules: [{ validator: this.checkPrice}]
      //         })(<Input onChange={(e) => {
      //           console.log('接收', e);
      //         }} />)
      //       }
            
      //     </Form.Item>
      //   </Form> */}
      //   <Example />
      // </React.Fragment>
    );
  }
}

IndexPage.propTypes = {
};

// const WrappedDemo = Form.create()(IndexPage);

// export default connect()(WrappedDemo);
export default IndexPage;
