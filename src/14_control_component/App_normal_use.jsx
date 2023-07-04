/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-01 15:54:11
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-02 18:18:21
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



  inputChange (e) {
    console.log(e.target.value)
    this.setState({
      username: e.target.value,
    },
    () => {
      console.log('this.state.username:', this.state.username)
    })
  }

  render() {
    const { username } = this.state

    return (
      <div>
        <input type="text" onChange={e => this.inputChange(e)}/>
        {/* 如果绑定了value属性 那么这个组件就会变成一个受控组件 */}
        {/* 改变表单元素的内容(值) 需要交给react的onChange函数去处理 */}
        <input type="text" value={username} onChange={e => this.inputChange(e)}/>
      </div>
    )
  }
}

export default App
