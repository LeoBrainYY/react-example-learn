import { memo } from 'react'

// memo和PureComponent可以简单理解为是同样的作用
// 函数组件没有生命周期
const Profile = memo(function Profile(props) {
  console.log('profile render')

  return (
    <div>
      <h2>Profile-{props.message}</h2>
    </div>
  )
})

export default Profile
