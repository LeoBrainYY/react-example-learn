/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-08 19:52:55
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-09 00:29:17
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\20_redux\page\category.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// import axios from 'axios'
// import { changeBannersAction, changeRecommedsAction } from '../store/actionCreators'
// import { fetchHomeMultidataAction } from '../store/actionCreators'
import { fetchHomeMultidataAction } from '../store/home'

export class Category extends PureComponent {

  componentDidMount () {
    // axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
    //   const banners = res.data.data.banner.list
    //   const recommends = res.data.data.recommend.list
    //   // console.log(banners, recommends)
    //   this.props.changeBanners(banners)
    //   this.props.changeRecommends(recommends)
    // })

    this.props.fetchNeedData()
  }

  render() {
    return (
      <div>
        <h2>Category Page</h2>
      </div>
    )
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   changeBanners (banners) {
//     dispatch(changeBannersAction(banners))
//   },
//   changeRecommends (recommends) {
//     dispatch(changeRecommedsAction(recommends))
//   }
// })

const mapDispatchToProps = (dispatch) => ({
  fetchNeedData () {
    dispatch(fetchHomeMultidataAction())
  }
})

export default connect(null, mapDispatchToProps)(Category)
