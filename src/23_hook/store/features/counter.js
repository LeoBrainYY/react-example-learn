/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-15 15:43:51
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-15 16:49:29
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\23_hook\store\features\counter.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 99,
    message: 'Hello World'
  },
  reducers: {
    addNumber (state, { payload }) {
      state.count = state.count + payload
    },
    subNumber (state, { payload }) {
      state.count = state.count - payload
    },
    changeMessageAction (state, { payload }) {
      state.message = payload
    }
  }
})

export const {
  addNumber,
  subNumber,
  changeMessageAction
} = counterSlice.actions

export default counterSlice.reducer