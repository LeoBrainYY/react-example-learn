/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-11 23:40:54
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-11 23:46:28
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\20_redux\store\middleware\applyMiddleware.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function applyMiddlewareJS (store, ...fns) {
  fns.forEach(fn => {
    fn(store)
  })
}

export default applyMiddlewareJS