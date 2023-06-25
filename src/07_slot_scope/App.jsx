/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-06-24 21:49:34
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-06-24 22:02:18
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\07_slot_scope\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import TabControl from './TabControl'

export class App extends Component {
  constructor () {
    super ()

    this.state = {
      title: ['流行', '新款', '精选'],
      message: ''
    }
  }

  getInfoFunc (msg) {
    console.log(msg)
    this.setState({
      message: msg
    })
  }

  // 根据子组件传递的参数 去判断返回一个什么样的标签
  decideReturnType (item) {
    if (item === '流行') {
      return <button>流行</button>
    } else if (item === '新款') {
      return <h2>新款</h2>
    } else {
      return <h5>{item}</h5>
    }
  }

  render() {
    
    const { title, message } = this.state

    return (
      <div className='app'>
        <TabControl tabData={title}
                    getInfoFunc={(msg) => this.getInfoFunc(msg)}
                    // itemType={(title) => { return <button>{title}</button>}}
                    itemType={(title) => this.decideReturnType(title)}></TabControl>
        {message}
      </div>
    )
  }
}

export default App
