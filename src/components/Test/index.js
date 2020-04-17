/* 开源-组件 */
import React from 'react';
import { Input } from 'antd';
/* 相对路径-样式 */
// import styles from './index.less';

class FormComponent extends React.Component {

  constructor(props) {
    super(props);
    // 异步数据模型
    this.initvalue = this.handleInitValue(this.props.value);
    this.state = {
      // 初始化的值
      initValue: this.initvalue,
    };
  }


  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      this.initValue = this.handleInitValue(nextProps.value);
      this.setState({ initValue: this.initValue });
    }
  }

  // 更新表单值
  triggerChange = (changedValue) => {
    this.props.onChange && this.props.onChange(changedValue);
  }
  /**
    * 电话号码输入框
    */
  handleInputChange = e => {
    const { value } = e.target;
    this.triggerChange(value);
  }
  /**
   * 处理显示值
   */
  handleInitValue = (value) => {
    if (value === undefined) {
      return;
    }
    // 计算字符个数
    return this.calculateSize(value);
  }
  // 计算字节数，返回截取后的字符
  calculateSize = (str) => {
    let byteLen = 0, len = str.length, currentIndex = -1;
    let limitCharCount = this.props.limitCharCount || 5;
    if (!str) {
      return "";
    };
    for (let i = 0; i < len; i++) {
      byteLen += str.charCodeAt(i) > 255 ? 2 : 1;
      // 全英文的情况
      if (byteLen === limitCharCount) {
        currentIndex = i+1;
        break;
      }
      // 这里表示中文，需要+1位，3个中文的话表示6位，此时i要等于3
      if (byteLen > limitCharCount) {
        currentIndex = i + 1;
        break;
      }
      
    }
    if (currentIndex >= 0) {
      str = str.substring(0, currentIndex);
    }
    return str;
  }

  render() {
    const { initValue } = this.state;
    return (
      <Input value={initValue} onChange={this.handleInputChange} size="small" placeholder="请输入内容" autoComplete="off" />
    );
  }
}
export default FormComponent;
