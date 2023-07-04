/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-01 15:54:11
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-04 11:49:23
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\14_control_component\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'



export class App extends PureComponent {
  constructor () {
    super()

    this.state = {
      username: '',
      password: '',
      isAgree: false,
      hobbies: [
        {
          value: 'sing',
          text: '唱',
          isChecked: false
        },
        {
          value: 'bounce',
          text: '跳',
          isChecked: false
        },
        {
          value: 'rap',
          text: 'rap',
          isChecked: false
        }
      ]
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
    console.log(this.state.password)

    console.log('hobbies', this.state.hobbies.filter(item => item.isChecked))

    // 3.将数据传递给服务器
  }

  handlePasswordChange (e) {
    this.setState({
      password: e.target.value
    })
  }

  handleAllInputData (e) {
    // 获取元素绑定的属性 keyname 决定到底要获取哪一个
    const keyName = e.target.name
    console.log('keyName:', keyName   )

    this.setState({
      [keyName]: e.target.value
    })
  }

  handleAgreeChange (e) {
    // console.log(e.target.value) // on
    console.log(e.target.checked)
  }

  hobbiesChange (e, index) {
    // console.log(e.target.checked, index)
    const hobbiesA = [...this.state.hobbies]

    hobbiesA[index].isChecked = e.target.checked
    this.setState({
      hobbies: hobbiesA
    })
  }

  render() {
    const { username, password, isAgree, hobbies } = this.state

    return (
      <div>
        <form onSubmit={e => this.handleSubmitClick(e)}>
          <div>
            <label htmlFor="username">
              用户:
              <input type="text"
                    id='username'
                    name='username'
                    value={username}
                    onChange={(e) => this.handleAllInputData(e)} />
            </label>
            <label htmlFor="password">
              密码:
              <input type="password"
                    id='password'
                    name='password'
                    value={password}
                    onChange={(e) => this.handleAllInputData(e)} />
            </label>
          </div>

          {/* checkBox */}
          <label htmlFor="agree">
            {/* id和htmlFor一致的时候 就可以点击文字 使得复选框自动勾选中 */}
            {/* checkBox勾选与不勾选绑定的属性是checked 不是value */}
            <input id='agree'
                   type="checkbox"
                   checked={isAgree}
                   onChange={e => this.handleAgreeChange(e)} />同意协议
          </label>

          {/* checkboxMutipleChoice */}
          {/* 多选表单处理方案 */}
          {/* <div>
            您的爱好:
            <label htmlFor="sing">
              <input type="checkbox" id='sing' />唱
            </label>
            <label htmlFor="bounce">
              <input type="checkbox" id='bounce' />跳
            </label>
            <label htmlFor="rap">
              <input type="checkbox" id='rap' />rap
            </label>
          </div> */}
          <div>
            您的爱好:
            {
              hobbies.map((item, index) => {
                return (
                  <label key={item.value} htmlFor={item.value}>
                    <input
                      type="checkbox"
                      id={item.value}
                      checked={item.isChecked}
                      onChange={e => this.hobbiesChange(e, index)}
                      /> {item.text}
                  </label>
                )
              })
            }
          </div>
          <div>
            <button type='submit'>register</button>
          </div>
        </form>
      </div>
    )
  }
}

export default App
