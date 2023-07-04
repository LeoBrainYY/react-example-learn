/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-06-30 19:09:00
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-01 15:52:20
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\13_ref\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent, createRef, forwardRef } from 'react'

// class  HelloWorld extends PureComponent {
//   test () {
//     console.log('-----')
//   }

//   render () {
//     return <h2>123</h2>
//   }
// }

const HelloWorld = forwardRef(function HelloWorld (props, ref) {
  return (
    // 先通过父组件 传到子组件 再通过子组件ref参数 传递给子组件某一个具体的标签元素
    // 需要用到forwardRef
    <h2 ref={ref}>Hello World</h2>
  )
})


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
