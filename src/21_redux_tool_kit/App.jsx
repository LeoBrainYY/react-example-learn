/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-09 18:26:58
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-10 23:07:26
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\21_redux_tool_kit\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Home from './page/Home'
import Profile from './page/Profile'
import './style.css'
import About from './page/About'

export class App extends PureComponent {
  render() {
    const { counter } = this.props

    return (
      <div>
        <h2>App counter: {counter}</h2>
        <div className='pages'>
          <Home></Home>
          <Profile></Profile>
          <About></About>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // counter模块下的counter
    counter: state.counter.counter
  }
}

export default connect(mapStateToProps, null)(App)