import React, { PureComponent } from 'react'
import { Link, Outlet } from 'react-router-dom'
import withRouter from '../hoc/withRouter'

export class Home extends PureComponent {

  navigateTo (path) {
    const { navigate } = this.props.router
    navigate(path)
  }

  render() {
    return (
      <div>
        <h2>
          Home
          <div className='home-nav'>
            <Link to='/home/recommend'>推荐</Link>
            <Link to='/home/ranking'>排行榜</Link>
            <button onClick={e => this.navigateTo('/home/homesong')}>歌单</button>
          </div>

          {/* 占位组件 */}
          <Outlet></Outlet>
        </h2>
      </div>
    )
  }
}


export default withRouter(Home)