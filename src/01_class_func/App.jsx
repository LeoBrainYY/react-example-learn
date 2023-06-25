/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-06-23 17:16:38
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-06-23 23:21:43
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'

export class App extends Component {
  constructor () {
    super()

    this.state = {
      message: 'msg'
    }
  }

  render() {
    const { message } = this.state

    return (
      <div>
        {message}
      </div>
    )
  }
}

export default App