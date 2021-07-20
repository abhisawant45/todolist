import React, { useState } from 'react'

export const NewCounter = (val) => {
  const [count, setCount] = useState(val)

  const SetIncCount = (val) => {
    setCount(val + 1)
  }
  const SetDecCount = (val) => {
    setCount(val - 1)
  }
  return [count, SetIncCount, SetDecCount]
}
