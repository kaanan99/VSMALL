import React, { Component } from 'react'
import Catalog from './Catalog'
import Login from './Login'
import Logout from './Logout'
import axios from 'axios'

class App extends Component {
  state = {
    items: []
  }

  componentDidMount () {
    axios.get('http://localhost:5000/catalog')
      .then(res => {
        const items = res.data.items_list
        this.setState({ items })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render () {
    const { items } = this.state
    return (
      <div className="container">
        <Login />
        <br />
        <Logout />
        <Catalog items_list={items}/>
      </div>
    )
  }
}

export default App
