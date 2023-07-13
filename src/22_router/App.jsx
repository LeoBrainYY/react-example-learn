/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-12 16:01:24
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-12 21:39:48
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\22_router\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'
import { Route, Routes, Link, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import './style.css'
import Login from './pages/Login'
import Notfound from './pages/Notfound'
import HomeRecommend from './pages/HomeRecommend'
import HomeRanking from './pages/HomeRanking'
import HomeSong from './pages/HomeSong'
import Category from './pages/Category'
import Detail from './pages/Detail'
import User from './pages/User'
// import routes from './router'


/**
 * BrowserRouter使用history模式
 * HashRouter使用了hash模式
 */
export class App extends PureComponent {
  render() {
    return (
      <div className='app'>
        <div className='header'>
          Header
          <div className='nav'>
            {/* <NavLink to='/home'>首页</NavLink>
            <NavLink to='/about'>关于</NavLink> */}
            <Link to='/home'>首页</Link>
            <Link to='/about'>关于</Link>
            <Link to='/login'>登录</Link>
            <Link to='/user?name=leo&age=18'>用户</Link>
            <button>分类</button>
            <span>订单</span>
          </div>
          <hr />
        </div>
        {/* map relation(path => Component) */}
        <Routes>
          <Route path='/' element={<Navigate to='/home'></Navigate>}></Route>
          <Route path='/home' element={<Home></Home>}>
            <Route path='/home' element={<Navigate to='/home/recommend'></Navigate>}></Route>
            <Route path='/home/recommend' element={<HomeRecommend></HomeRecommend>}></Route>
            <Route path='/home/ranking' element={<HomeRanking></HomeRanking>}></Route>
            <Route path='/home/homesong' element={<HomeSong></HomeSong>}></Route>
          </Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/category' element={<Category></Category>}></Route>
          <Route path='/user' element={<User></User>}></Route>
          <Route path='/detail/:id' element={<Detail></Detail>}></Route>
          {/* 前面的都没有匹配到 就会来到此处 */}
          <Route path='*' element={<Notfound></Notfound>}></Route>
        </Routes>
        
        <div className='footer'>
          <hr />
          Footer
        </div>
      </div>
    )
  }
}

export default App
