/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-06-24 16:00:49
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-06-24 21:54:45
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\05_component_case\TabControl.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import './TabControl.css'

export class TabControl extends Component {
  constructor () {
    super()

    this.state = {
      currentIndex: ''
    }
  }

  getTabClick (index) {
    const { tabData, getInfoFunc } = this.props

    console.log(index)
    this.setState({
      currentIndex: index
    })

    // 也可以只把索引传到父组件
    // 通过父组件的数组获取要显示的数据
    getInfoFunc(tabData[index])
  }

  render() {
    const { tabData, itemType } = this.props
    const { currentIndex } = this.state


    return (
      <div className='tab-control'>
        {
          tabData.map((item, index) => {
            return (
              <div
                   key={item}
                   onClick={() => this.getTabClick(index)}
                   className={currentIndex === index ? 'item active' : 'item'}><span className='item-border'>{itemType(item)}</span></div>
            )
          })
        }
      </div>
    )
  }
}

export default TabControl
