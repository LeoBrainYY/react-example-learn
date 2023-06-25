import React, { Component } from 'react'

export class App extends Component {
  constructor () {
    super()

    this.state = {
      message: 'Hello World',
      counter: 0
    }
  }

  changeText () {
    // 1.setState更多用法
    // 基本使用
    // 虽然这里只是更新了message 但是源码中使用了Object.assign()
    // 合并了原来this.state中的其他数据 更新了新的数据
    // this.setState({
    //   message: 'AAA'
    // })

    // 2.传入一个回调函数
    // 可以在回调函数中编写新的state的逻辑
    // 当前的回调函数会将之前的state和props传递过来
    // this.setState((state, props) => {
    //   // 数据更新之前的state和props
    //   console.log(state, 'preState')
    //   console.log(props, 'props')

    //   return {
    //     message: 'AAA'
    //   }
    // })

    // 3.setState在React中的事件处理是一个异步调用
    // 如果希望数据更新之后获取到对应的结果 执行一些逻辑代码
    // 那么可以在setState中传入第二个参数
    this.setState({
      message: 'AAA'
    }, () => {
      console.log('this.state.message+++', this.state.message) // Hello World
    })
    console.log('this.state.message---', this.state.message) // Hello World

    // setState为什么要设计成异步调用的呢?
    /**
     * 1. setState设计为异步 可以显著的提升性能
     * 2. 如果同步更新了state，但是还没有执行render函数，那么state和props不能保持同步
     */
  }

  increment () {

  }

  render() {
    const { message, counter } = this.state

    return (
      <div>
        <h2>message: {message}</h2>
        <button onClick={e => this.changeText()}>change text</button>
        <h1>counter: {counter}</h1>
        <button onClick={e => this.increment()}>+1</button>
      </div>
    )
  }
}

export default App
