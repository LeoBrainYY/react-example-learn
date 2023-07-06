/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-05 10:04:07
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-05 19:24:21
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\15_high_order_component\hoc\log_render_time.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { PureComponent } from "react";

function logRenderTime (OriginComponent) {
  // 此处的类名 NewComponent 可以不写
  return class NewComponent extends PureComponent {

    UNSAFE_componentWillMount () {
      this.startTime = new Date().getTime()
    }

    componentDidMount () {
      this.endTime = new Date().getTime()
      const interval = this.endTime - this.startTime
      console.log(`${OriginComponent.name} page` + interval + 'ms渲染')
    }

    render () {
      return <OriginComponent {...this.props}></OriginComponent>
    }
  }
}

export default logRenderTime