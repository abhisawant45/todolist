import React, { useState } from 'react'
import { NewCounter } from './hook'

function Funcounter() {
  // Declare a new state variable, which we'll call "count"
  const [count1, SetIncCount1, SetDecCount1] = NewCounter(2)
  const [count2, SetIncCount2, SetDecCount2] = NewCounter(0)
  // const { count2, SetIncCount2, SetDecCount2 } = NewCounter(1)

  return (
    <div>
      <p>You clicked {count1} times</p>
      <button onClick={() => SetIncCount1(count1)}>Increase</button>
      <button onClick={() => SetDecCount1(count1)}>Decrease</button>
      <br />
      <p>You clicked {count2} times</p>
      <button onClick={() => SetIncCount2(count2)}>Increase</button>
      <button onClick={() => SetDecCount2(count2)}>Decrease</button>
    </div>
  )
}
export default Funcounter
