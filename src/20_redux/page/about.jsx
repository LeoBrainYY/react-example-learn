/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-08 18:12:35
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-09 00:32:58
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\20_redux\page\about.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// import { addNumberAction, subNumberAction } from '../store/actionCreators'
import { addNumberAction, subNumberAction } from '../store/counter'


export class About extends PureComponent {

  calculateNumber (num, calc) {
    if (calc) {
      console.log('+')
      this.props.addNumber(num)
    } else {
      console.log('-')
      this.props.subNumber(num)
    }
  }

  render() {
    const { counter, banners, recommends } = this.props
    console.log(recommends, 're')
    return (
      <div>
        <div>
          <h2>About Page: {counter}</h2>
          <button onClick={e => this.calculateNumber(6, true)}>+6</button>
          <button onClick={e => this.calculateNumber(88, true)}>+88</button>
          <button onClick={e => this.calculateNumber(6, false)}>-6</button>
          <button onClick={e => this.calculateNumber(88, false)}>-88</button>
        </div>
        <div className='banner'>
          <h2>轮播图数据:</h2>
          <ul>
            {
              banners.map((item, index) => {
                return <li key={index}>{item.title}</li>
              })
            }
          </ul>
        </div>
        <div className='recommend'>
            <h2>推荐数据:</h2>
            <ul>
              { 
                recommends.map((item, index) => {
                  return <li key={index}>{item.title}</li>
                })
              }
            </ul>
        </div>
      </div>
    )
  }
}

// connect函数的返回值是一个高阶函数 

// function mapStateToProps (state) {
//   return {
//     counter: state.counter
//   }
// }

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  banners: state.home.banners,
  recommends: state.home.recommends
})

const mapDispatchToProps = (dispatch) => ({
  addNumber: function (num) {
    dispatch(addNumberAction(num))
  },
  subNumber (num) {
    dispatch(subNumberAction(num))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(About)
