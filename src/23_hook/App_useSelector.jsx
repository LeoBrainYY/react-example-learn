/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-12 22:02:39
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-17 00:18:04
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\23_hook\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { memo } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { addNumber, subNumber } from './store/features/counter'

const Home = memo((props) => {

  // memo是只有在组件的props发生变化时 才会重新渲染
  // 这里使用了useSelector 传入的回调函数的参数state监听的是整个的state
  // 父组件中改变了counter 所以state发生了改变 导致了子组件也重新render
  // shallowEqual 会进行浅层比较 如果改变的不是组件本身引用的值 那么就不会进行再次render
  const { message } = useSelector((state) => {
    return {
      message: state.counter.message
    }
  }, shallowEqual)

  console.log('Home render')

  return (
    <div>
      <h2>Home: {message}</h2>
    </div>
  )
})

const App = memo(function App() {

  // 使用useSelector将redux中的store数据映射到组件内
  const { counter } = useSelector((state) => {
    return {
      counter: state.counter.count
    }
  }, shallowEqual)

  // 
  const dispatch = useDispatch()
  function addNumberHandle (num, isAdd = true) {
    if (isAdd) {
      dispatch(addNumber(num))
    } else {
      dispatch(subNumber(num))
    }
  }

  console.log('App render')

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={e => addNumberHandle(1)}>+1</button>
      <button onClick={e => addNumberHandle(1, false)}>-1</button>
      <Home></Home>
    </div>
  )
})

export default App
