/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-06-23 17:10:47
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-10 23:14:46
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import ReactDOM from 'react-dom/client'
// import App from './App'
// import App from './01_class_func/App_func'
// import App from './02_life_cycle/App'
// import App from './03_component_nest/App'
// import App from './04_component_communication/App'
// import App from './05_component_case/App'
// import App from './06_slot/App'
// import App from './07_slot_scope/App'
// import App from './08_nonparent/App'
// import App from './09_event_bus/App'
// import App from './10_setState/App'
// import App from './11_render_optimizer/App'
// import App from './12_immutable_data/App'
// import App from './13_ref/App'
// import App from './14_control_component/App'
// import App from './15_high_order_component/App'
// import App from './16_portals/App'
// import App from './17_fragment/App'
// import App from './18_react_animation/App'
// import App from './19_css/App'
// import App from './20_redux/App'
// import store from './20_redux/store'

import { StoreContext } from './21_redux_tool_kit/hoc'
import App from './21_redux_tool_kit/App'

import { Provider } from 'react-redux'
import store from './21_redux_tool_kit/store'

const root = ReactDOM.createRoot(document.querySelector('#root'))



// root.render(
//     <App name={'AAA'}/>
// )

root.render(
  <Provider store={store}>
    {/* 为了让封装的connect没有和其他代码的耦合性 使用这种方法提供store */}
    {/* store在connect函数中就变成了this.context */}
    <StoreContext.Provider value={store}>
      <App name={'AAA'}/>
    </StoreContext.Provider>
  </Provider>
)
