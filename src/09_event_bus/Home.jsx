/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-06-25 14:41:19
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-06-25 14:52:04
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\09_event_bus\Home.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import HomeBanner from './HomeBanner'

export class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <HomeBanner></HomeBanner>
      </div>
    )
  }
}

export default Home
