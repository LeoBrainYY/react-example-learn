/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-06-24 12:22:13
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-06-24 15:25:32
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\03_component_nest\c-cpn\Main.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import axios from 'axios'

import MainBanner from './MainBanner'



export class Main extends Component {
  constructor () {
    super()

    this.state = {
      banners: ['music', 'mv', 'list'],
      productList: ['blouse', 'skirt', 'pants'],
      bannersWebData: [],
      productWebData: []
    }
  }

  componentDidMount () {
    axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
      const banners = res.data.data.banner.list
      const recommend = res.data.data.recommend.list
      this.setState({
        bannersWebData: banners,
        productWebData: recommend
      })
    })
  }

  render() {
    const { banners, productList, bannersWebData, productWebData } = this.state

    return (
      <div>
        {/* 组件通信 bannerDatat 子组件通过this.props.bannerData可以获取父组件传递过来的banners数据 */}
        <MainBanner
          bannerData={banners}
          productData={productList}
          bannersWebData={bannersWebData}
          productWebData={productWebData}
          testData="test111"></MainBanner>
          {/* 没有传入参数 就会使用子组件中定义的默认参数 */}
        <MainBanner />
      </div>
    )
  }
}

export default Main
