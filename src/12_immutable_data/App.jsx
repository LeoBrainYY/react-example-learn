/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-06-26 11:37:37
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-06-30 18:55:22
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\12_immutable_data\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor () {
    super()

    this.state = {
      books: [
        { name: 'JS', price: 99 , count: 1},
        { name: 'Python', price: 89 , count: 3},
        { name: 'React', price: 99979 , count: 2},
        { name: 'Vue', price: 919 , count: 1},
      ]
    }

    // const copy = JSON.parse(JSON.stringify(this.state.books))
    // console.log(copy)

    // const arr = this.state.books.map(item => {
    //   return item.price
    // })
  }
  /**
   * 直接修改原有的state 使用setState
   * 如果使用了PureComponent组件 re-render不会重新渲染的
   */

  addNewBook () {
    const newBook = { name: 'Angular', price: 88, count: 6 }

    // 不能直接去修改state中的数据
    // this.state.books.push(newBook)

    const bookA = [...this.state.books]
    bookA.push(newBook)

    this.setState({
      books: bookA
    })
  }

  handleAddSubCount (index, params) {
    const gotAddBook = [...this.state.books]
    let calc = 1
    if (params === '+') {
      calc = 1
    } else if (params === '-') {
      calc = -1
    } else {
    }
    const handleGet = gotAddBook[index]
    handleGet.count += calc
    // handleGet.price = handleGet.count * this.state.books[index].price
    this.setState({
      books: gotAddBook
    })
  }

  addCount (index) {
    // console.log(index)
    // console.log(this.state.books[1])
    this.handleAddSubCount(index, '+')
  }

  subCount (index) {
    this.handleAddSubCount(index, '-')
  }

  render() {
    return (
      <div>
        <h2>数据列表</h2>
        <ul>
          {
            this.state.books.map((item, index) => {
              return (
                <span key={item.name}>
                  <li>name: {item.name}-price: {item.price}-count: {item.count}</li>
                  <button onClick={() => this.addCount(index)}>+1</button>
                  <button onClick={() => this.subCount(index)}>-1</button>
                </span>
              )
            })
          }
        </ul>
        <button onClick={e => this.addNewBook()}>+book</button>
      </div>
    )
  }
}

export default App
