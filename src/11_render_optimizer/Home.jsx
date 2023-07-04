import React, { PureComponent } from 'react'

export class Home extends PureComponent {

  // shouldComponentUpdate (nextProps, nextState) {
  //   // 判断传递过来的数据是否改变
  //   if (this.props.message !== nextProps.message) {
  //     return true
  //   }
  //   return false
  // }

  render() {
    console.log('Home render')
    const { message } = this.props

    return (
      <div>
        <h2>Home Page-{message}</h2>
      </div>
    )
  }
}

export default Home