/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-09 00:20:51
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-09 00:21:16
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\20_redux\store\home\reducer.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as actionTypes from './constants'

const initialState = {
  banners: [],
  recommends: []
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_BANNERS:
      return { ...state, banners: action.banners}
    case actionTypes.CHANGE_RECOMMENDS:
      return { ...state, recommends: action.recommends}
    default:
      return state
  }
}

export default reducer