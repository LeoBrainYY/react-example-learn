/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-06-24 15:33:23
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-06-24 15:48:54
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\04_component_communication\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import AddCounter from './AddCounter'
import SubCounter from './SubCounter'

export class App extends Component {
  constructor () {
    super()

    this.state = {
      counter: 100
    }
  }

  changeCounter (count) {
    this.setState({
      counter: this.state.counter + count
    })
  }

  render() {
    const { counter } = this.state

    return (
      <div>
        <SubCounter subFunc={(count) => this.changeCounter(count)}></SubCounter>
        <h2>{counter}</h2>
        <AddCounter addFunc={(count) => this.changeCounter(count)}></AddCounter>
      </div>
    )
  }
}

export default App
