import React, { PureComponent } from 'react'

// 定义高阶组件
// 给需要特殊数据的组件，注入props属性
function enhancedUserInfo (OriginComponent) {
  class NewComponent extends PureComponent {
    constructor (props) {
      super(props)

      this.state = {
        userInfo: {
          name: 'leo',
          level: 80
        }
      }
    }

    render () {
      // 第一个参数是被传入的组件本身传递的数据 再传给OriginComponent
      return <OriginComponent {...this.props} {...this.state.userInfo}></OriginComponent>
    }
  }

  return NewComponent
}

const Home = enhancedUserInfo(function Home (props) {
  return <h2>Home {props.name}-{props.level}-{props.banners}</h2>
})

const Profile = enhancedUserInfo(function Profile (props) {
  return <h2>Profile {props.name}-{props.level}</h2>
})

const HelloFriend = enhancedUserInfo(function HelloFriend (props) {
  return <h2>Hello Friend {props.name}-{props.level}</h2>
})

export class App extends PureComponent {
  render() {
    return (
      <div>
        <Home banners={['123', '456']}></Home>
        <Profile></Profile>
        <HelloFriend></HelloFriend>
      </div>
    )
  }
}



export default App
