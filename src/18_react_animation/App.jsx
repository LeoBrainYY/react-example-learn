/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-05 21:29:45
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-06 23:10:40
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\18_react_animation\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { PureComponent } from 'react'
import { TransitionGroup, CSSTransition, SwitchTransition } from 'react-transition-group'
import './style2.css'

export class App extends PureComponent {
  constructor () {
    super()

    this.state = {
      books: [
        { id: 1, name: 'JAVA', price: 99 },
        { id: 2, name: 'C++', price: 88 },
        { id: 3, name: 'Python', price: 77 },
        { id: 4, name: 'C', price: 99 }
      ]
    }
  }

  addNewBook () {
    const bookA = [...this.state.books]
    bookA.push({ id: new Date().getTime(), name: 'redux', price: 99 })
    this.setState({
      books: bookA
    })
  }

  deleteBook (index) {
    const bookA = [...this.state.books]
    // 删除索引为index的元素
    bookA.splice(index, 1)
    this.setState({
      books: bookA
    })
  }

  render() {
    const { books } = this.state

    return (
      <div>
        <h2>书单:</h2>
        <TransitionGroup component={'ul'}>
          {
            books.map((item, index) => {
              return (
                <CSSTransition key={item.id} classNames={'book'} timeout={1000}>
                  <li key={index}>{item.name}-{item.price}-<button onClick={e => this.deleteBook(index)}>删除</button></li>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <button onClick={e => this.addNewBook()}>add new book</button>
      </div>
    )
  }
}

export default App
