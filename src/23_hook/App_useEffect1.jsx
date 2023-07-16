/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-12 22:02:39
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-14 16:44:49
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\23_hook\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { memo, useState, useEffect } from 'react'

export default memo(function App() {

  const [counter, setCounter] = useState(200)

  // 一个函数式组件中，可以存在多个useEffect
  // useEffect第二个参数: 该useEffect在哪些state发生改变时，才重新执行
  // 不希望依赖任何内容 传入一个空数组

  /**
   * useCallback优化的点:
   * 当需要将一个函数传递给子组件时，最好使用useCallback进行优化，将优化之后的函数，传递给子组件
   */
  useEffect(() => {
    console.log(123)
    return () => {
      console.log('会在组件被卸载时，才会执行一次')
    }
  }, []) // 只会执行一次
  useEffect(() => {
    console.log(456)

    return () => {

    }
  })
  useEffect(() => {

    return () => {

    }
  })

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
    </div>
  )
})
