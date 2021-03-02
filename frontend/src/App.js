import React, { Component } from 'react'
import Catalog from './Catalog'
import Login from './Login'
import Logout from './Logout'
import axios from 'axios'

class App extends Component {
  state = {
    items: [],
    isSignedIn: false
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

  loginStateHandler(loginState){
    if (loginState !== this.state.isSignedIn){
      this.setState({isSignedIn: loginState})
    }
  }

  render () {
    console.log(this.state.isSignedIn)
    const { items, isSignedIn } = this.state
    return (
      <div className="container">
        <h2 align='center'>Welcome to VSMall</h2>
        <h2 align='center'>{isSignedIn ? <Logout loginStateHandler={this.loginStateHandler}/> : <Login loginStateHandler={this.loginStateHandler}/>}</h2>
        <Catalog items_list={items}/>
      </div>
    )    
  }
}

export default App
