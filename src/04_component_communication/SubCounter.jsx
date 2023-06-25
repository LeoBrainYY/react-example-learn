import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class SubCounter extends Component {
  subCounts (count) {
    this.props.subFunc(count)
  }

  render() {
    return (
      <div>
        <button onClick={() => this.subCounts(-1)}>-1</button>
        <button onClick={() => this.subCounts(-5)}>-5</button>
        <button onClick={() => this.subCounts(-10)}>-10</button>
      </div>
    )
  }
}

SubCounter.propTypes = {
  subFunc: PropTypes.func.isRequired
}

export default SubCounter
