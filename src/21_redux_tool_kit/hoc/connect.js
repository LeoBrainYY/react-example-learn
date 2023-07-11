/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-10 14:51:28
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-10 23:08:57
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\21_redux_tool_kit\hoc\connect.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-10 14:51:28
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-10 21:52:04
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\21_redux_tool_kit\hoc\connect.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { PureComponent } from "react";
import { StoreContext } from "./StoreContext";
// import store from "../store";

/**
 * @params
 * 参数:两个函数
 * 返回值: 函数
 */

// this.context 成为了store
export function connect (mapStateToProps, mapDispatchToProps, store) {
  // 返回的函数本身是一个高阶组件
  return function (WrapperComponent) {
    class NewComponent extends PureComponent {

      constructor (props, context) {
        super(props)

        this.state = mapDispatchToProps(context.getState())
      }

      // 监听数据的改变 重新执行render函数
      componentDidMount () {
        this.unsubscribe = this.context.subscribe(() => {
          // this.forceUpdate()
          // this.setState({
          this.setState(mapStateToProps(this.context.getState()))
          // })
        })
      }

      componentWillUnmount () {
        this.unsubscribe()
      }

      render () {
        const stateObj = mapStateToProps(this.context.getState())
        const dispatchObj = mapDispatchToProps(this.context.dispatch)

        return (
          <WrapperComponent {...this.props} {...stateObj} {...dispatchObj} ></WrapperComponent>
        )
      }
    }

    NewComponent.contextType = StoreContext

    return NewComponent
  }
}

