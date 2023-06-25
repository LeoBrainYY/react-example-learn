import React, { Component } from 'react'
import NavBar from './nav-bar'
import NavBar1 from './02-nav-bar'

export class App extends Component {
  render() {
    return (
      <div>
        {/* 使用Children实现插槽 */}
        <NavBar>
          {/* 这里的内部children元素会被传入NavBar组件实例的this.props.children里面 */}
          {/* 如果这里传入的只有一个子元素 而不是多个 那么传入的不会再是一个数组 */}
          {/* children直接就是传入的子元素 */}
          <button>按钮</button>
          <h2>我是标题</h2>
          <i>斜体文字</i>
        </NavBar>

        {/* 使用props实现插槽 */}
        <NavBar1
          leftSlot={<button>测试</button>}
          centerSlot={<h2>呵呵呵</h2>}
          rightSlot={<i>123</i>}></NavBar1>
          
      </div>
    )
  }
}

export default App
