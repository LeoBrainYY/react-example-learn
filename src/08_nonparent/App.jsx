/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-06-25 13:35:41
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-06-25 14:27:07
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\08_nonparent\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import Home from './Home'

import ThemeContext from './context/theme-context'
import UserContext from './context/user-context'

export class App extends Component {
  constructor () {
    super ()

    this.state = {
      info: { name: 'leo', age: 18 }
    }
  }

  render() {
    const { info } =  this.state

    return (
      <div>
        123
        {/* 给Home传递数据 */}
        {/* <Home name={info.name} age={info.age}></Home> */}
        {/* 直接传入一个对象的写法 上下两种写法是等价的 */}
        {/* <Home {...info}></Home> */}

        {/* 通过ThemeContext中的Provider中的value属性为后代提供数据 */}
        <UserContext.Provider value={{ nickname: 'leo', age: 18 }}>
          <ThemeContext.Provider value={{ color: 'red', size: '30'}}>
            <Home></Home>
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    )
  }
}

export default App
