/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-12 22:02:39
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-15 16:01:12
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\23_hook\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { memo } from 'react'

import { connect } from 'react-redux'
import { addNumber, subNumber } from './store/features/counter'

const App = memo(function App(props) {

  const { counter, addNumFunc, subNumFunc } = props

  function addNumberHandle (num, isAdd = true) {
    if (isAdd) {
      addNumFunc(num)
    } else {
      subNumFunc(num)
    }
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={e => addNumberHandle(1)}>+1</button>
      <button onClick={e => addNumberHandle(1, false)}>-1</button>
    </div>
  )
})

const mapStateToProps = (state) => {
  return {
    counter: state.counter.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNumFunc (num) {
      dispatch(addNumber(num))
    },
    subNumFunc (num) {
      dispatch(subNumber(num))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
