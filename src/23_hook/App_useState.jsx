import React, { memo, useState } from 'react'

export default memo(function App() {
  const [message, setMessage] = useState('hello world')

  function setMessageFunc () {
    setMessage('123')
  }

  return (
    <div>
      <h2>App: {message}</h2>
      <button onClick={setMessageFunc}>change_text</button>
    </div>
  )
})
