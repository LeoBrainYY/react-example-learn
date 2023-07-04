/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-06-25 22:56:25
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-06-26 11:22:56
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\11_render_optimizer\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'
import Home from './Home'
import Recommend from './Recommend'
import Profile from './Profile'

/**
 * PureComponent 自动对state props进行相关的判断 
 * 自动进行性能优化(浅层比较)
 */

export class App extends PureComponent {
  constructor () {
    super()

    this.state = {
      // message: 'AAA',
      message: 'Hello World',
      counter: 0
    }
  }

  changeText () {
    this.setState({
      message: 'AAA'
    })
  }

  // 控制render函数是否执行
  // shouldComponentUpdate (nextProps, nextState) {
  //   // 旧message !== 新message
  //   // App进行性能优化
  //   if (this.state.message !== nextState.message || this.state.counter !== nextState.counter) {
  //     return true
  //   }
  //   return false
  // }

  addCount () {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    const { message , counter } = this.state

    console.log('App render')

    return (
      <div>
        <button onClick={() => this.changeText()}>change text</button>
        <button onClick={() => this.addCount()}>+1</button>
        <h2>App-{message}-{counter}</h2>
        <Home message={message}></Home>
        <Recommend counter={counter}></Recommend>
        <Profile message={message}></Profile>
      </div>
    )
  }
}

export default App
