import React, { PureComponent } from 'react'
import Detail from './pages/Detail'

export class App extends PureComponent {
  constructor () {
    super()

    this.state = {

    }
  }


  render() {
    // const { isLogin } = this.state

    return (
      <div>
        <Detail></Detail>
      </div>
    )
  }
}

export default App
