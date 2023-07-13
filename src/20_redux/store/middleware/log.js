/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-11 23:14:28
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-11 23:21:04
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\20_redux\store\middleware\log.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function logInfo (store) {
  // 把原来的dispatch做一个记录
  const next = store.dispatch

  function logAndDispatch (action) {
    console.log('当前派发的action:', action)
    // 真正的派发代码: 使用之前的dispatch进行派发
    next(action)

    console.log('派发之后的结果:', store.getState())
  }

  // monkey patching: 猴补丁
  // 在这里修改了dispatch的指向
  // 让传入的dispatch必须经过我们自定义的函数 这样就可以执行我们需要打印的log等等
  store.dispatch = logAndDispatch
}

export default logInfo