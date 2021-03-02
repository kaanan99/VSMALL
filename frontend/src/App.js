import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Catalog from './Catalog'
import Login from './Login'
import Logout from './Logout'
import axios from 'axios'
import WishList from './WishList'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/catalog">VSMall Catalog</Link>
              </li>
              <li>
                <Link to="/wishlist">Your WishList</Link>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/catalog">
              <CatalogPage />
            </Route>
            <Route path="/wishlist">
              <WishListPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    );    
  }
}
export default App
class HomePage extends Component {
  render () {
    return (
      <h2>VSMall</h2>
    )    
  }
}

class CatalogPage extends Component  {
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
class WishListPage extends Component  {
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
    const {items} = this.state
    return (
      <div className="container">
        <WishList items_list={items}/>
      </div>
    )    
  }
}