import React from "react";

class HelloWorld extends React.Component {
  constructor () {
    super ()

    this.state = {
      message: 'Hello'
    }

    console.log(123)
  }

  buttonClick () {
    this.setState({
      message: '你好'
    })
  }

  render () {
    const { message } = this.state

    return (
      <div>
        <h2>Hello World</h2>
        <h3>{message}</h3>
        <button onClick={e => this.buttonClick(e)}>change text</button>
      </div>
    )
  }
  
  componentDidMount () {
    console.log('componentDidMountHelloWorld')
  }

  componentDidUpdate () {
    console.log('componentDidUpdateHelloWorld')
  }

  componentWillUnmount () {
    console.log('componentWillUnmount')
  }
}

export default HelloWorld