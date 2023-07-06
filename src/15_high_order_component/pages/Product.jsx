/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-04 19:34:03
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-04 20:31:40
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\15_high_order_component\pages\Product.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'
// import ThemeContext from '../context/theme_context'
import WithTheme from '../hoc/with_theme'

export class Product extends PureComponent {
  render() {
    return (
      <div>
        Product:
        {/* 导出之前通过withTheme函数 把参数已经传递到了this.props里面 */}
        <h2>{this.props.color}</h2>
        <h2>{this.props.size}</h2>
      </div>
    )
  }
}


// export class Product extends PureComponent {
//   render() {
//     return (
//       <div>
//         Product:
//         <ThemeContext.Consumer>
//           {
//             value => {
//               return <h2>theme: {value.color}-{value.size}</h2>
//             }
//           }
//         </ThemeContext.Consumer>
//       </div>
//     )
//   }
// }

export default WithTheme(Product)
