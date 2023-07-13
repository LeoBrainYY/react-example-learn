/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-12 18:49:24
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-12 19:59:09
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\22_router\pages\HomeSong.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'
import withRouter from '../hoc/withRouter'

export class HomeSong extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      soneMenus: [
        {id: 111, name: 'chinese'},
        {id: 123, name: 'english'},
        {id: 456, name: 'france'}
      ]
    }
  }

  navigateToDetail (id) {
    const { navigate } = this.props.router
    navigate('/detail/' + id)
  }


  render() {
    const { soneMenus } = this.state

    return (
      <div>
        <h1>Home SONG</h1>
        <ul>
          {
            soneMenus.map((item, index) => {
              return <li key={item.id} onClick={e => this.navigateToDetail(item.id)}>{item.name}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default withRouter(HomeSong)
