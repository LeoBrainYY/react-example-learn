/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-12 18:11:35
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-12 18:11:41
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\22_router\pages\HomeRanking.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'

export class HomeRanking extends PureComponent {
  constructor (props) {
    super()

    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <h2>Ranking New</h2>
        <h2>榜单数据</h2>
        <ul>
          <li>歌单数据1</li>
          <li>歌单数据2</li>
          <li>歌单数据3</li>
          <li>歌单数据4</li> 
          <li>歌单数据5</li>
        </ul>
      </div>
    )
  }
}

export default HomeRanking
