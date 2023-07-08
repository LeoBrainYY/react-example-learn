/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-06 23:27:24
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-07 17:41:39
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\19_css\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'
import { AppWrapper } from './style'

export class App extends PureComponent {
  constructor () {
    super()

    this.state = {
      size: 60,
      color: 'yellow'
    }
  }

  render() {
    const { size, color } = this.state

    return (
      <div className='app'>
        <AppWrapper size={size} color={color}>
          <div className='section'>
            <h2 className='title'>我是标题</h2>
            <p className='content'>我是content</p>
            <button onClick={e => this.setState({color: 'red'})}>修改颜色</button>
          </div>

          <div className='footer'>
            <p>免责声明</p>
          </div>
        </AppWrapper>
      </div>
    )
  }
}

export default App
