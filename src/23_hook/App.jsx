/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-12 22:02:39
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-17 00:45:45
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\23_hook\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { memo, useState, useTransition } from 'react'
import nameArray from './nameArray'

const App = memo(function App() {

  const [showNames, setShowNames] = useState(nameArray)
  const [ pending, startTransition ] = useTransition()

  function valueChangeHandle (e) {
    startTransition(() => {
      const keyWord = e.target.value
      const filterShownames = nameArray.filter(item => {
        return item.includes(keyWord)
      })
      setShowNames(filterShownames)
    })
    // console.log(e.target.value)
  }

  return (
    <div>
      {/* <input type="text" onInput={valueChangeHandle} /> */}
      <input type="text" onInput={e => valueChangeHandle(e)} />
      {/* pending表示正在加载的状态 */}
      <h2>用户列表: { pending && <span>loading</span>}</h2>
      <ul>
        {
          showNames.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    </div>
  )
})

export default App
