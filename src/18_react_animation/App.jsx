/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-05 21:29:45
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-05 21:53:25
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\18_react_animation\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group'


export class App extends PureComponent {
  constructor () {
    super()

    this.state = {
      isShowTitle: true
    }
  }

  render() {
    const { isShowTitle } = this.state

    return (
      <div>
        <button onClick={e=> this.setState({ isShowTitle: !isShowTitle })}>change</button>
        {/* { isShowTitle && <h2>1234567890</h2>} */}

        
        <CSSTransition in={isShowTitle} classNames="leo">
          <h2>TestIIIIOOOOOO</h2>
        </CSSTransition>
      </div>
    )
  }
}

export default App
