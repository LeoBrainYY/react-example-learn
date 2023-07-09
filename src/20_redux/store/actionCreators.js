/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-08 17:50:54
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-09 00:23:27
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\20_redux\store\actionCreators.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import * as actionTypes from './constants'
// import axios from 'axios'

// export const addNumberAction = (num) => ({
//   type: actionTypes.ADD_NUMBER,
//   num
// })

// export const subNumberAction = (num) => ({
//   type: actionTypes.SUB_NUMBER,
//   num
// })

// export const changeBannersAction = (banners) => ({
//   type: actionTypes.CHANGE_BANNERS,
//   banners
// })

// export const changeRecommedsAction = (recommends) => ({
//   type: actionTypes.CHANGE_RECOMMENDS,
//   recommends
// })

// export const fetchHomeMultidataAction = () => {
//   // 如果和普通的action一样 返回的是一个对象 对象中是不能获取网络请求的数据的
//   // 所以这里的action需要返回一个函数 借助redux0thunk
//   // 主要目的就是为了把发送网路请求的代码抽到store中 不单独写在组件里面

//   // 这里的函数会传入两个参数 
//   return function (dispatch, getState) {
//     // console.log(123)
//     axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
//       const banners = res.data.data.banner.list
//       const recommends = res.data.data.recommend.list

//       // dispatch写到这里
//       dispatch(changeBannersAction(banners))
//       dispatch(changeRecommedsAction(recommends))
//     })
//   }
  
//   // return foo
// }