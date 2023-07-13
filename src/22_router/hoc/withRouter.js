// 封装一个高阶组件

import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom"

// 因为在类组件中手动路由 hook函数useNavigate不能在类组件中使用
function withRouter (WrapperComponent) {
  return function (props) {
    // 定向导航
    const navigate = useNavigate()
    // 获取动态路由参数
    const params = useParams()
    // 查询字符串参数 /user?name=leo&age=18
    const location = useLocation()
    // 返回的数组第一个value就是所需要的参数
    const [searchParams] = useSearchParams()
    // 转成一个普通的对象
    const query = Object.fromEntries(searchParams)
    // console.log(query)

    // navigate是一个对象函数
    const router = {
      navigate,
      params,
      location,
      query
    }

    return <WrapperComponent {...props} router={router}></WrapperComponent>
  }
}

export default withRouter