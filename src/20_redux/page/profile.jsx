/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-07 23:41:13
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-09 00:35:55
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\20_redux\page\profile.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'
import store from '../store/index'
// import { subNumberAction } from '../store/actionCreators'
import { subNumberAction } from '../store/counter'


export class Profile extends PureComponent {

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

  subNumber (num) {
    store.dispatch(subNumberAction(num))
  }

  render() {
    const { counter } = this.state

    return (
      <div>
        <h2>Profile Counter: {counter}</h2>
        <div>
          <button onClick={e => this.subNumber(1)}>-1</button>
          <button onClick={e => this.subNumber(5)}>-5</button>
          <button onClick={e => this.subNumber(8)}>-8</button>
        </div>
      </div>
    )
  }
}

export default Profile
