import './App.css'
import { Component } from 'react'

// class Row extends Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     // const cells = []
//     // cells.push({this.props.value})
//     return <p>{this.props.value}</p>
//   }
// }
class Loop extends Component {
  render() {
    const rows = []
    for (let i = 1; i <= 100; i++) {
      // rows.push(<Row value={i} />)
      rows.push(<p>{i}</p>)
    }
    return (
      <div className='text-center'>
        <h2 className='Title'>Loop Example</h2>
        <p>{rows}</p>
      </div>
    )
  }
}

export default Loop
