/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-09 18:44:12
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-09 21:24:25
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\21_redux_tool_kit\page\Home.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'
// import axios from 'axios'
import { connect } from 'react-redux'
import { addFuncNumber } from '../store/features/counter'
import { fetchHomeMultidataDataAction } from '../store/features/home'

// import store from '../store'
// import { changeBanners, changeRecommends } from '../store/features/home'

export class Home extends PureComponent {

  componentDidMount () {
    this.props.getFetchDataFunc()

    // axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
    //   const banners = res.data.data.banner.list
    //   const recommends = res.data.data.recommend.list

    //   store.dispatch(changeBanners(banners))
    //   store.dispatch(changeRecommends(recommends))
    // })
  }

  addNumber (num) {
    this.props.addCalcNumber(num)
  }

  render() {
    const { counter } = this.props

    return (
      <div>
        <h2>Home counter: {counter}</h2>
        <button onClick={e => this.addNumber(5)}>+5</button>
        <button onClick={e => this.addNumber(88)}>+88</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter
})

const mapDispatchToProps = (dispatch) => ({
  addCalcNumber (num) {
    dispatch(addFuncNumber(num))
  },
  getFetchDataFunc () {
    dispatch(fetchHomeMultidataDataAction({ name: 'leo', level: 18 }))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)
