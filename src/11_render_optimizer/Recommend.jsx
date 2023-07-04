/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-06-25 22:59:14
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-06-26 11:21:30
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\11_render_optimizer\Recommend.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-06-25 22:59:14
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-06-26 11:16:55
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\11_render_optimizer\Recommend.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'

export class Recommend extends PureComponent {

  // shouldComponentUpdate (nextProps) {
  //   // 判断传给子组件的数据是否发生改变
  //   // nextProps 新值
  //   if (this.props.counter !== nextProps.counter) {
  //     return true
  //   }
  //   return false
  // }

  render() {
    const { counter } = this.props

    console.log('Recommend render')

    return (
      <div>
        <h2>Recommend Page: {counter}</h2>
      </div>
    )
  }
}

export default Recommend