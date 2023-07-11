/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-09 18:54:46
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-09 20:26:22
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\21_redux_tool_kit\store\features\counter.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 888
  },
  reducers: {
    addFuncNumber (state, { payload }) {
      state.counter = state.counter + payload
    },
    subFuncNumber (state, action) {
      console.log(action)
      const payload = action.payload
      state.counter = state.counter - payload
    }
  }
})

export const {
  addFuncNumber,
  subFuncNumber
} = counterSlice.actions

export default counterSlice.reducer