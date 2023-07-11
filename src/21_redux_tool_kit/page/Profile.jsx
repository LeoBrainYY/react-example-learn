import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { subFuncNumber } from '../store/features/counter'

export class Profile extends PureComponent {

  subNumber (num) {
    this.props.subCalcNumber(num)
  }

  render() {
    const { counter, banners, recommends } = this.props

    return (
      <div>
        <h2>Profile counter: {counter}</h2>
        <button onClick={e => this.subNumber(5)}>-5</button>
        <button onClick={e => this.subNumber(8)}>-8</button>

        <div className='banner'>
          <h2>轮播图</h2>
          <ul>
            {
              banners.map((item, index) => {
                return <li key={index}>{item.title}</li>
              })
            }
          </ul>
        </div>

        <div className='recommends'>
          <h2>推荐的展示</h2>
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

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  banners: state.home.banners,
  recommends: state.home.recommends
})


const mapDispatchToProps = (dispatch) => ({
  subCalcNumber (num) {
    dispatch(subFuncNumber(num))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)