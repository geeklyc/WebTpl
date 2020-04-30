/*
 * @Description: 
 * @Author: liyoucheng
 * @Date: 2020-04-28 19:49:05
 * @LastEditors: liyoucheng
 * @LastEditTime: 2020-04-28 20:03:31
 */
/**
 * Created by superman on 2017/3/20.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {createStore} from 'redux'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import todoApp from '../reducers/index'
// import Footer from '../components/Footer'

// let store = createStore(todoApp);

class App extends Component {
  render() {
    const { params } = this.props;
    return (
      <section className="todoapp">
        <div className="main">
          <AddTodo />
          {/* <VisibleTodoList filter={params.filter || 'all'} /> */}
         
        </div>
         {/* <Footer /> */}
      </section>

    )
  }
}

export default App;