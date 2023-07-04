import React, { PureComponent, createRef } from 'react'

export class App extends PureComponent {

  constructor () {
    super()

    this.state = {

    }

    this.titleRef = createRef()
    this.titel = null
  }

  getDom () {
    // 1. 在React元素上绑定一个ref字符串
    // console.log(this.refs.why)
    // 2. 提前创建好ref对象,createRef()， 将创建出来的对象绑定到元素
    console.log(this.titleRef.current)
    // 3. 传入一个回调函数 在对应元素被渲染之后，回调函数被执行，并且将元素传入
    console.log(this.titel)
  }

  render() {
    return (
      <div>
        <h2 ref="why">Hello World</h2>
        <h2 ref={this.titleRef}>Hello Ref</h2>
        {/* render渲染的时候 函数会自动调用 */}
        <h2 ref={el => {this.titel = el}}>Hello Refffff</h2>
        <button onClick={() => this.getDom()}>get DOM</button>
      </div>
    )
  }
}

export default App
