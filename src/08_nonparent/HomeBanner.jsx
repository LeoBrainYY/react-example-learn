/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-06-25 14:06:50
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-06-25 14:29:24
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\08_nonparent\HomeBanner.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'

import ThemeContext from './context/theme-context'
import UserContext from './context/user-context'

export class HomeBanner extends Component {
  render() {
    // 此处获取传递过来的数据
    console.log(this.context) // 可以打印出传递过来的信息
    return (
      <div>
        HomeBanner
        <h2>ThemeContext: {this.context.color}</h2>
        <h2>ThemeContext: {this.context.size}</h2>
        <UserContext.Consumer>
          {
            value => {
              return <h2>UserContext: {value.nickname}</h2>
            }
          }
        </UserContext.Consumer>
      </div>
    )
  }
}

// 这里需要说明获取的是哪个组件传递过来的数据
HomeBanner.contextType = ThemeContext

export default HomeBanner
