/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-06-24 18:04:45
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-06-24 18:24:27
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\06_slot\NavBar.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './style.css'

export class NavBar extends Component {
  render() {
    const { children } = this.props

    return (
      <div className='nav-bar'>
        <div className="left">{children[0]}</div>
        <div className="center">{children[1]}</div>
        <div className="right">{children[2]}</div>
      </div>
    )
  }
}

// NavBar.propTypes = {
//   // 传入元素时，只能传入一个元素 因为传入多个元素
//   // 会变成一个数组类型
//   children: PropTypes.element
// }

export default NavBar
