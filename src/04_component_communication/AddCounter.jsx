/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-06-24 15:35:32
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-06-24 15:44:10
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\04_component_communication\AddCounter.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddCounter extends Component {
  addCounts (count) {
    // 从父组件传递过来的函数 把子组件的参数传进去
    this.props.addFunc(count)
  }

  render() {


    return (
      <div>
        <button onClick={() => this.addCounts(1)}>+1</button>
        <button onClick={() => this.addCounts(5)}>+5</button>
        <button onClick={() => this.addCounts(10)}>+10</button>
      </div>
    )
  }
}

AddCounter.propTypes = {
  addFunc: PropTypes.func
}

export default AddCounter
