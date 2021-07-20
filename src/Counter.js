import './App.css'
import React, { useState } from 'react'

class Counter extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }
  render() {
    const reset = () => {
      this.setState({ count: 0 })
    }
    return (
      <div className='text-center'>
        <h2 className='Title'>Counter Example</h2>
        <h1 className='countNo'>{this.state.count}</h1>
        <button
          className='btn'
          onClick={() => this.setState({ count: this.state.count - 1 })}
        >
          Decrease
        </button>
        <button className='btn' onClick={reset}>
          Reset
        </button>
        <button
          className='btn'
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Increase
        </button>
      </div>
    )
  }
}
export default Counter
