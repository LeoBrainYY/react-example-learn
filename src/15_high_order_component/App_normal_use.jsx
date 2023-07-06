/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-04 18:30:30
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-04 18:40:40
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\15_high_order_component\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * 1.接收一个组件作为他的参数
 * 2.返回一个新的组件
 */
import React, { PureComponent } from 'react'


function hoc (Cpn) {
  // 1.定义一个类组件或者函数式组件
  class newCpn extends PureComponent {
    render () {
      return <Cpn></Cpn>
    }
  }

  return newCpn

  // function NewCpn2 () {

  // }

  // return NewCpn2
}

class HelloWorld extends PureComponent {
  render () {
    return <h2>Hello World</h2>
  }
}

const HelloHoc = hoc(HelloWorld)

export class App extends PureComponent {
  render() {
    return (
      <div>
        <HelloHoc></HelloHoc>
      </div>
    )
  }
}

export default App
