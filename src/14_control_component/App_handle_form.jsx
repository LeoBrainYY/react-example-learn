/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-01 15:54:11
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-03 17:34:25
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\14_control_component\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'



export class App extends PureComponent {
  constructor () {
    super()

    this.state = {
      username: ''
    }
  }

  handleUsernameChange (event) {
    this.setState({ username: event.target.value })
  }

  handleSubmitClick (e) {
    // 1. 组织默认的行为
    e.preventDefault()

    // 2.获取到所有的表单数据
    console.log(this.state.username)

    // 3.将数据传递给服务器
  }

  render() {
    const { username } = this.state

    return (
      <div>
        <form onSubmit={e => this.handleSubmitClick(e)}>
          <label htmlFor="username">
            <input type="text"
                   id='username'
                   name='username'
                   value={username}
                   onChange={(e) => this.handleUsernameChange(e)} />
          </label>
          <button type='submit'>register</button>
        </form>
      </div>
    )
  }
}

export default App
