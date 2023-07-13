import React, { PureComponent } from 'react'
import { Navigate } from 'react-router-dom'

export class Login extends PureComponent {
  constructor () {
    super()

    this.state = {
      isLogin: false
    }
  }

  loginFunc () {
    this.setState({
      isLogin: true
    })
  }

  render() {
    const { isLogin } = this.state

    return (
      <div>
        <h2>login</h2>
        {
          !isLogin ? <button onClick={() => this.loginFunc()}>登录</button> : <Navigate to='/home'></Navigate> 
        }
      </div>
    )
  }
}

export default Login
