/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-08 17:35:19
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-09 18:09:01
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\20_redux\store\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
// import reducer from './reducer'
import homeReducer from './home'
import counterReducer from './counter'
import userReducer from './user'

// 合并两个reducer
const reducer = combineReducers({
  counter: counterReducer,
  home: homeReducer,
  user: userReducer
})

// function reducer (state = {}, action) {
//   // 返回一个对象 store的state
//   return {
//     counter: counterReducer(state.counter, action),
//     home: homeReducer(state.home, action),
//     user: userReducer(state.user, action)
//   }
// }

const store = createStore(reducer, applyMiddleware(thunk))

export default store