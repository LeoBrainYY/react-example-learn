import React, { memo, useState, useEffect } from 'react'

export default memo(function App() {

  const [counter, setCounter] = useState(200)

  /**
   * 为什么要在effect中返回一个函数?
   * 
   * 1.effect可选的清除机制，每个effect都可以返回一个清除函数
   * 2.如此可以将添加和移除订阅的逻辑放在一起
   * 3.它们都属于effect的一部分
   * （会先执行return 返回值里面的函数）
   */

  // 传入的回调函数会在组件被渲染完成后，自动执行
  useEffect(() => {

    // 1.监听事件
    // const unsubscribe = store.subscribe(() => {
    // })


    // web request/DOM action/event listener
    document.title = counter

    // 这里的返回值是一个回调函数 => 组件被重新渲染或者组件被卸载的时候执行
    return () => {
      // 执行对应的事件总线监听或者redux中的store数据监听
    }
  })

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
    </div>
  )
})
