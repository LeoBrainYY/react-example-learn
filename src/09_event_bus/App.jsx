/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-06-25 14:41:11
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-06-25 15:51:39
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\09_event_bus\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import Home from './Home'
import eventBus from './utils/event-bus'

export class App extends Component {
  constructor () {
    super()

    this.state = {
      name: '',
      age: 0,
      height: 0
    }
  }

  componentDidMount () {
    // eventBus.on('bannerPrev', ( x, y, z) => {
    //   this.setState({ x, y, z })
    // })

    // 绑定this是因为这里把函数只是传入 并没有执行 所以本身不绑定this
    // 原本的this为undefined
    eventBus.on('bannerPrev', this.bannerPrevClick.bind(this))
    // 使用的库的传递this的方法
    // eventBus.on('bannerPrev', this.bannerPrevClick.bind, this)
  }

  bannerPrevClick (x, y, z) {
    console.log('monitor data', x, y, z)
    this.setState({ x, y, z})
  }

  componentWillUnmount () {
    // 取消监听
    eventBus.off('bannerPrev', this.bannerPrevClick.bind(this))
  }

  render() {
    return (
      <div>
        <h2>App</h2>
        <Home></Home>
      </div>
    )
  }
}

export default App
