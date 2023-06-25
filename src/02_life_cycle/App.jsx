import React from 'react'
import HelloWorld from './HelloWorld'

class App extends React.Component {
  constructor () {
    super ()

    this.state = {
      message: 'Hello',
      isShow: true
    }

    console.log(123)
  }

  isShowHello () {
    this.setState({
      isShow: !this.state.isShow
    })
  }

  render () {
    const { isShow } = this.state

    return (
      <div>
        <button onClick={() => this.isShowHello()}>切换</button>
        {/* <HelloWorld/> */}
        {/* {isShow ? <HelloWorld/> : ''} */}
        {isShow && <HelloWorld></HelloWorld>}
      </div>
    )
  }

  componentDidMount () {
    console.log('componentDidMountApp')
  }

  componentDidUpdate () {
    console.log('componentDidUpdateApp')
  }
}

export default App