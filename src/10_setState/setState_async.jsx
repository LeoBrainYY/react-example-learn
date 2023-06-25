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
     * 1.1 如果每次调用setState都进行一次更新，那么意味着renden函数会被频繁调用，界面重新渲染，这样效率是很低的
     * 1.2 最好的办法应该是获取到多个更新，之后进行批量更新
     * 2. 如果同步更新了state，但是还没有执行render函数，那么state和props不能保持同步
     */
  }

  increment () {
    // 这种写法写三次 得到的最终结果还会是1 因为获取到的this.state.counter就是0
    // 而且也说明了他就是异步执行的(在构建对象的时候，传入setSatate中的对象就获取到了this.state.counter的值是0)
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    // this.setState({
    //   counter: this.state.counter + 1
    // })

    // 这里获取到的state每次都是上一次计算过后得到的state
    this.setState((state, props) => {
      console.log(this.state.counter) // 这就说明this.state.counter中的数是最后被改掉的
      return {
        counter: state.counter + 1
      }
    })
    this.setState((state, props) => {
      console.log(this.state.counter) // 0
      return {
        counter: state.counter + 1
      }
    })
    this.setState((state, props) => {
      console.log(this.state.counter) // 0
      return {
        counter: state.counter + 1
      }
    })
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
