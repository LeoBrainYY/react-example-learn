/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-15 15:42:44
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-15 15:49:21
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\23_hook\store\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter'


const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

export default store
