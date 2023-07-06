/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-04 22:09:57
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-05 10:08:11
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\15_high_order_component\pages\Detail.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'
import logRenderTime from '../hoc/log_render_time'

export class Detail extends PureComponent {
  // UNSAFE_componentWillMount () {
  //   this.beginTime = new Date().getTime()
  // }

  // componentDidMount () {
  //   this.endTime = new Date().getTime()
  //   const interval = this.endTime - this.beginTime
  //   console.log(`当前页面用了${interval}ms去渲染完成`)
  // }

  render() {
    return (
      <div>
        <h2>Detail</h2>
        <ul>
          <li>数据列表1</li>
          <li>数据列表2</li>
          <li>数据列表3</li>
          <li>数据列表4</li>
          <li>数据列表5</li>
          <li>数据列表6</li>
          <li>数据列表7</li>
          <li>数据列表8</li>
          <li>数据列表9</li>
          <li>数据列表10</li>
        </ul>
      </div>
    )
  }
}

export default logRenderTime(Detail)