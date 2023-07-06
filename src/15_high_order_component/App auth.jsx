import React, { PureComponent } from 'react'
import Cart from './pages/Cart'

export class App extends PureComponent {
  constructor () {
    super()

    this.state = {
      isLogin: false
    }
  }

  loginClick () {
    localStorage.setItem('token', 'leo')
    // this.setState({
    //   isLogin: true
    // })

    this.forceUpdate()
  }

  render() {
    // const { isLogin } = this.state

    return (
      <div>
        App
        {/* {isLogin ? <h2><Cart></Cart></h2> : '请登录'} */}
        <button onClick={e => this.loginClick()}>登录</button>
        <Cart></Cart>
      </div>
    )
  }
}

export default App
