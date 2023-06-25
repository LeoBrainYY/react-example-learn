import React, { Component } from 'react'
import TabControl from './TabControl'

export class App extends Component {
  constructor () {
    super ()

    this.state = {
      title: ['流行', '新款', '精选'],
      message: ''
    }
  }

  getInfoFunc (msg) {
    console.log(msg)
    this.setState({
      message: msg
    })
  }

  render() {
    const { title, message } = this.state

    return (
      <div className='app'>
        <TabControl tabData={title}
                    getInfoFunc={(msg) => this.getInfoFunc(msg)}></TabControl>
                            {message}
      </div>
    )
  }
}

export default App
