/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-06-24 12:24:19
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-06-24 15:30:41
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\03_component_nest\c-cpn\MainBanner.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class MainBanner extends Component {

  // constructor此处的默认写法是可以省略的

  // 另一种参数传递的写法
  static defaultProps = {
    bannersWebData: ['123'],
    productData: ['123'],
    testData: '123',
    bannerData: ['456']
  }

  constructor (props) {
    super(props)

    // 内部操作
    // this.props = props

    this.state = {

    }
  }

  render() {
    return (
      <div>
        {this.props.testData}
        {this.props.bannersWebData.map(item => {
          return item.title
        })}
        <ul>
          {this.props.bannerData.map(item => {
            return <li key={item}>{item}</li>
          })}
          {this.props.productData.map(item => {
            return <li key={item}>{item}</li>
          })}
        </ul>
      </div>
    )
  }
}

// 限制传入的参数类型
// propTypes
MainBanner.propTypes = {
  // 要求传入的是数组类型
  bannersWebData: PropTypes.array,
  // 要求传入的是字符串类型 并且是必传的
  // productWebData: PropTypes.string.isRequired
  productWebData: PropTypes.array,
  testData: PropTypes.string
}

// 默认参数

// MainBanner.defaultProps = {
//   bannersWebData: ['123'],
//   productData: ['123'],
//   testData: '123',
//   bannerData: ['456']
// }

export default MainBanner
