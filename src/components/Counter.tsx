import { useState } from 'react'
import classNames from './Counter.module.scss'

export const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }
  return (
    <div className={classNames.btn}>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
    </div>
  )
}
