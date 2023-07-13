/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-12 19:45:10
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-12 20:52:30
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\22_router\pages\Detail.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'
import withRouter from '../hoc/withRouter'

export class Detail extends PureComponent {
  render() {
    const { router } = this.props
    const { params } = router
    
    return (
      <div>
        <h1>Detail page</h1>
        <h2>id: {params.id}</h2>
      </div>
    )
  }
}

export default withRouter(Detail)
