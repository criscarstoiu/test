import React from 'react'
import { useCounter } from '@ftech/ftech-hooks'

export const HomeLayout = () => {
  const { count, increment, reset, decrement, set } = useCounter(0, { min: 0, max: 22 })

  return (
    <div>
      <p>This counter has a 0-1ccc0 linit</p>
      <p>{count}</p>
      <button onClick={increment}> Increment the counter </button>
      <button onClick={decrement}> Decrement the counter </button>
      <button onClick={reset}> Reset the counter </button>
      <button onClick={() => set(10)}>Set 10</button>
    </div>
  )
}
