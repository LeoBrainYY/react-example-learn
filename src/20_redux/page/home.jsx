/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-07 23:41:07
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-09 00:33:59
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\20_redux\page\home.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'
import store from '../store/index'
// import { addNumberAction } from '../store/actionCreators'
import { addNumberAction } from '../store/counter'

export class Home extends PureComponent {
  constructor () {
    super()

    this.state = {
      counter: store.getState().counter.counter
    }
  }

  // 订阅数据更新
  // 数据更新会自动执行订阅函数
  componentDidMount () {
    store.subscribe(() => {
      const state = store.getState().counter
      this.setState({ counter: state.counter })
    })
  }

  addNumber (num) {
    store.dispatch(addNumberAction(num))
  }

  render() {
    const { counter } = this.state

    return (
      <div>
        <h2>Home Counter: {counter}</h2>
        <div>
          <button onClick={e => this.addNumber(1)}>+1</button>
          <button onClick={e => this.addNumber(5)}>+5</button>
          <button onClick={e => this.addNumber(8)}>+8</button>
        </div>
      </div>
    )
  }
}

export default Home
