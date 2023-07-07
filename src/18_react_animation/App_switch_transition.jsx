/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-05 21:29:45
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-06 15:42:03
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\18_react_animation\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import './style1.css'

export class App extends PureComponent {
  constructor () {
    super()

    this.state = {
      isLogin: true
    }
  }

  render() {
    const { isLogin } = this.state

    return (
      <div>
        {/* SwitchTransition两个组件之间动画的切换 */}
        <SwitchTransition mode='out-in'>
          {/* 这里的key需要切换不同的value 才会执行动画 */}
          <CSSTransition
            key={isLogin ? 'exit' : 'login'}
            classNames={'login'}
            timeout={1000}
          >
            <button onClick={e => this.setState({ isLogin: !isLogin })}>
              { isLogin ? 'logout' : 'login' }
            </button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    )
  }
}

export default App
