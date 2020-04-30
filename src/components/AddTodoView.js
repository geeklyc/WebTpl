/*
 * @Description: 
 * @Author: liyoucheng
 * @Date: 2020-04-28 19:51:35
 * @LastEditors: liyoucheng
 * @LastEditTime: 2020-04-28 19:51:35
 */
/**
 * Created by superman on 2017/3/20.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types';

class AddTodoView extends Component {

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          type="text"
          onKeyUp={this.handleClick}
          placeholder="input todo item"
          ref='input' />
      </header>
    )
  }

  handleClick = (e) => {
    if (e.keyCode === 13) {
      const node = e.target;
      const text = node.value && node.value.trim();
      text && this.props.onAddClick(text);
      node.value = '';
    }
  }
}

AddTodoView.propTypes = {
  onAddClick: PropTypes.func.isRequired
};

export default AddTodoView
