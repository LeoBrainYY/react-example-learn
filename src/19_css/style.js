/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-07 16:38:55
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-07 18:31:14
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\19_css\style.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styled from 'styled-components'
import {
  primaryColor
} from './style/variable'

// 接收外部传入的props
export const AppWrapper = styled.div.attrs(props => ({
  textcolor: props.color || 'blue'
}))`
  .section {
    border: 1px solid red;

    .title {
      font-size: ${props => props.size}px;
      color: ${props => props.textcolor};

      &:hover {
        background-color: ${primaryColor};
      }
    }
  }

  .footer {
    border: 1px solid blue;
  }
`