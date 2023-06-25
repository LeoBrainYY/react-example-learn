/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-06-25 22:24:46
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-06-25 22:31:05
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\10_setState\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'

export class App extends Component {
  constructor () {
    super()

    this.state = {
      message: 'Hello World',
      counter: 0
    }
  }

  changeText () {
    // 这种写法React18之前 这种会让setState会变成同步执行
    // React18之后 所有的处理setState处理 都会变成批处理
    // 两种情况:
    // 组件生命周期或者React合成事件中,setState是异步
    // setTimeout或者原生DOM事件中，setState是同步
    setTimeout(() => {
      this.setState({ message: 'AAA' })
      console.log(this.state.message)
    }, 0);
  }

  render() {
    const { message, counter } = this.state

    return (
      <div>
        <h2>message: {message}</h2>
        <button onClick={e => this.changeText()}>change text</button>
        <h1>counter: {counter}</h1>
        <button onClick={e => this.increment()}>+1</button>
      </div>
    )
  }
}

export default App
