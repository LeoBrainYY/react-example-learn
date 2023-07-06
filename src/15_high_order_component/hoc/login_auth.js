/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-04 21:01:18
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-04 21:10:23
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\15_high_order_component\hoc\login_auth.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function loginAuth (OriginComponent) {
  return props => {
    // 从localStorage中获取token
    const token = localStorage.getItem('token')

    if (token) {
      return <OriginComponent {...props}></OriginComponent>
    } else {
      return <h2>请先登录</h2>
    }
  }
}

export default loginAuth