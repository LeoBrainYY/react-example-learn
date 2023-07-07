import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor () {
    super()

    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        {/* 内联样式 */}
        <h2 style={{color: 'red', fontSize: '30px'}}>App 我是标题</h2>
        <p style={{color: 'blue', fontSize: '20px'}}>我是内容, 哈哈哈</p>
      </div>
    )
  }
}

export default App
