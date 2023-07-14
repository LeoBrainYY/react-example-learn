import React, { memo, useState, useEffect } from 'react'

export default memo(function App() {

  const [counter, setCounter] = useState(200)

  // 一个函数式组件中，可以存在多个useEffect
  // useEffect第二个参数: 该useEffect在哪些state发生改变时，才重新执行
  // 不希望依赖任何内容 传入一个空数组
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
