import './App.css'
import { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    const navStyle = {
      color: 'white',
    }
    return (
      <nav>
        <Link style={navStyle} to='/About'>
          <span>About</span>
        </Link>
        <Link style={navStyle} to='/Counter'>
          <span>Counter</span>
        </Link>
        <Link style={navStyle} to='/Funcounter'>
          <span>Funcounter</span>
        </Link>
        <Link style={navStyle} to='/Loop'>
          <span>Loop</span>
        </Link>
      </nav>
    )
  }
}
export default Nav
