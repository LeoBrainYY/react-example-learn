/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-05 18:46:13
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-05 18:57:08
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\16_portals\Modal.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import  { PureComponent } from 'react'
import { createPortal } from 'react-dom'

export class Modal extends PureComponent {
  render() {
    // this.props.children就是内部传递的元素
    return createPortal(this.props.children, document.querySelector('#modal'))
  }
}

export default Modal
