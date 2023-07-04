import React, { PureComponent, createRef } from 'react'

class  HelloWorld extends PureComponent {
  test () {
    console.log('-----')
  }

  render () {
    return <h2>123</h2>
  }
}

export class App extends PureComponent {

  constructor () {
    super()

    this.state = {

    }

    this.HelloWorldRef = createRef()
  }

  getComponent () {
    // 获取子组件实例
    console.log(this.HelloWorldRef.current)
  }

  render() {
    return (
      <div>
        <HelloWorld ref={this.HelloWorldRef}></HelloWorld>
        <button onClick={() => this.getComponent()}>获取组件</button>
      </div>
    )
  }
}

export default App
