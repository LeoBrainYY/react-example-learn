/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-07 20:27:16
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-09 00:36:56
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\20_redux\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'
import Home from './page/home'
import Profile from './page/profile'
import './style.css'
import store from './store'
import About from './page/about'
import Category from './page/category'

/**
 * Redux要求通过dispatch -> action去更新Store中的数据
 * action是一个普通的javaScript对象
 */
export class App extends PureComponent {

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

  render() {
    const { counter } = this.state

    return (
      <div>
        <h2 style={{ color: 'green' }}> App counter: {counter}</h2>

        <div className='pages'>
          <Home></Home>
          <Profile></Profile>
          <About></About>
          <Category></Category>
        </div>
      </div>
    )
  }
}

export default App
