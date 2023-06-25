import ThemeContext from "./context/theme-context"

function HomeInfo () {
  return (
    <div>
      HomeInfoFunc
      {/* 函数式组件中使用Context共享的数据 */}
      <ThemeContext.Consumer>
        {
          value => {
            return <h2>{value.color}{value.size}</h2>
          }
        }
      </ThemeContext.Consumer>
    </div>
  )
}

export default HomeInfo