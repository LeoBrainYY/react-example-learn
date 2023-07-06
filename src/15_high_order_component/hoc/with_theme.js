/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-04 19:45:49
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-04 20:28:06
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\15_high_order_component\hoc\with_theme.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import ThemeContext from "../context/theme_context"

function withTheme (OriginComponent) {
  return (props) => {
    return (
      <ThemeContext.Consumer>
        {
          value => {
            return <OriginComponent {...value} {...props}></OriginComponent>
          }
        }
      </ThemeContext.Consumer>
    )
  }
}

export default withTheme