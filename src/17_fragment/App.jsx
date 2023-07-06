/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-05 19:09:17
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-05 19:58:43
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\17_fragment\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent, Fragment } from 'react'

export class App extends PureComponent {
  constructor () {
    super()

    this.state = {
      sections: [
        {
          title: '123',
          content: 'i am content'
        },
        {
          title: 'dasdas',
          content: 'i am dasdas'
        },
        {
          title: '12fdsfds3',
          content: 'i am con12fdsfds3tent'
        },
        {
          title: 'vcxvcx',
          content: 'i am vcxvcx'
        }
      ]
    }
  }

  render() {
    const { sections } = this.state

    return (
      <Fragment>
        <h2>我是App的标题</h2>
        <p>我是App的内容</p>
        <hr />

        {
          sections.map(item => {
            return (
              // 如果需要key Fragment不可以省略写法
              <Fragment key={item.title}>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
              </Fragment>
            )
          })
        }
      </Fragment>
    )
  }
}

export default App
