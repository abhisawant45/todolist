import './App.css'
import { Component } from 'react'
import Nav from './Nav'
import About from './About'
import Loop from './Loop'
import Counter from './Counter'
import Funcounter from './Funcounter'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='text-center'>
          <Nav />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/About' component={About} />
            <Route path='/Counter' component={Counter} />
            <Route path='/Funcounter' component={Funcounter} />
            <Route path='/Loop' component={Loop} />
          </Switch>
        </div>
      </Router>
    )
  }
}
const Home = () => (
  <div className='text-center'>
    <h2 className='Title'>Home Page</h2>
  </div>
)
export default App
