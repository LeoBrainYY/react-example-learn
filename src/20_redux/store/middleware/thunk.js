function thunkL (store) {
  const next = store.dispatch

  function dispatchThunk (action) {
    if (typeof action === 'function') {
      // action中传入的dispatch参数 需要传新的dispatch 因为旧的不能dispatch函数
      action(store.dispatch, store.getState)
    } else {
      next(action)
    }
  }

  store.dispatch = dispatchThunk
}

export default thunkL