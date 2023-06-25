import React, { Component } from 'react'
import eventBus from './utils/event-bus'

export class HomeBanner extends Component {

  prevClick () {
    eventBus.emit('bannerPrev', 'why', 18, 1.88)
  }

  nextClick () {
    // eventBus.emit('bannerNext', 'why', 18, 1.88)
  }

  render() {
    return (
      <div>
        <h2>HomeBanner</h2>
        <button onClick={e => this.prevClick()}>last</button>
        <button onClick={e => this.nextClick()}>next</button>
      </div>
    )
  }
}

export default HomeBanner
