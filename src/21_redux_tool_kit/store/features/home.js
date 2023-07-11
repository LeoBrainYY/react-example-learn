/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-09 20:32:09
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-10 14:31:43
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\21_redux_tool_kit\store\features\home.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
// import store from '..'

// 异步action
/**
 * 当createAsyncThunk创建出来的action被dispatch时，会存在三种状态
 *  pending: action状态发出,但是还没有最终的结果
 *  fulfilled: 获取到最终的结果
 *  rejected: 有错误或抛出异常
 */
export const fetchHomeMultidataDataAction = createAsyncThunk(
  'fetch/homemultidata',
  async (extraInfo, store) => {
  const res =  await axios.get('http://123.207.32.32:8000/home/multidata')
  console.log(extraInfo, store.dispatch)

  // 也可以使用这钟方法
  // store.dispatch(changeBanners(res.data.data.banner.list))

  // 返回结果 状态变为fulfilled
  return res.data
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    banners: [],
    recommends: []
  },
  reducers: {
    changeBanners (state, { payload }) {
      state.banners = payload
    },
    changeRecommends (state, { payload }) {
      state.recommends = payload
    }
  },
  extraReducers: {
    // 计算属性名
    [fetchHomeMultidataDataAction.pending] (state, action) {
      // console.log('pending')
    },
    [fetchHomeMultidataDataAction.fulfilled] (state, { payload }) {
      // console.log('fetchHomeMultidataDataAction', 'fulfilled')
      state.banners = payload.data.banner.list
      state.recommends = payload.data.recommend.list
    },
    [fetchHomeMultidataDataAction.rejected] () {
      console.log('fetchHomeMultidataDataAction', 'rejected')
    }
  }
})

export const {
  changeBanners,
  changeRecommends
} = homeSlice.actions

export default homeSlice.reducer