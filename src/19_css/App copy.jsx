/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-06 23:27:24
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-07 14:55:15
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\19_css\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor () {
    super()

    this.state = {
      titleSize: 20
    }
  }

  render() {
    const { titleSize } = this.state 

    return (
      <div>
        {/* 内联样式 */}
        <h2 style={{color: 'red', fontSize: titleSize + 'px'}}>App 我是标题</h2>
        <p style={{color: 'blue', fontSize: '20px'}}>我是内容, 哈哈哈</p>
      </div>
    )
  }
}

export default App
