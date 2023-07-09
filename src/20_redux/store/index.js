import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
// import reducer from './reducer'
import homeReducer from './home'
import counterReducer from './counter'


// 合并两个reducer
const reducer = combineReducers({
  counter: counterReducer,
  home: homeReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store