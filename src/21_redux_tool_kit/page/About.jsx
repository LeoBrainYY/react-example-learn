/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-09 23:51:25
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-10 23:08:10
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\21_redux_tool_kit\page\About.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'
import { connect } from '../hoc'
import { addFuncNumber } from '../store/features/counter'

export class About extends PureComponent {
  render() {
    const { counter } = this.props

    return (
      <div>
        <h2>About Counter: {counter}</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter
})

const mapDispatchToProps = (dispatch) => ({
  addNumber (num) {
    dispatch(addFuncNumber(num))
  }
})

// export default connect(mapStateToProps, mapDispatchToProps)(About)
export default connect(mapStateToProps, mapDispatchToProps)(About)
