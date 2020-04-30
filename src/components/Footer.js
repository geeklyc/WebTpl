/*
 * @Description: 
 * @Author: liyoucheng
 * @Date: 2020-04-28 19:52:04
 * @LastEditors: liyoucheng
 * @LastEditTime: 2020-04-28 19:52:04
 */
/**
 * Created by superman on 2017/3/20.
 */

import React, {Component} from 'react'
import {VisibilityFilters} from '../constants/filterTypes'
import PropTypes from 'prop-types';
import FilterLink from '../containers/FilterLink'

class Footer extends Component {

  render() {
    return (
        <footer className="footer">
          <ul className="filters">
            <li>
              <FilterLink filter='all'>All</FilterLink>
            </li>
            <li>
              <FilterLink filter="completed">Completed</FilterLink>
            </li>
            <li>
              <FilterLink filter="active">Active</FilterLink>
            </li>
          </ul>
        </footer>
    )
  }
}

export default Footer