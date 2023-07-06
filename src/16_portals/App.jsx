import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'
import Modal from './Modal'

// creareProtal 某个元素独立渲染
export class App extends PureComponent {
  render() {
    return (
      <div className='app'>
        <h1>App h1</h1>
        {
          // 第一个参数是任何可渲染的React子元素
          // 第二个参数是一个DOM元素
          createPortal(<h2>App h2</h2>, document.querySelector('#leo'))
        }

        {/* Modal组件 */}
        <Modal>
          <h2>我是标题</h2>
          <p>我是内容</p>
        </Modal>
      </div>
    )
  }
}

export default App
