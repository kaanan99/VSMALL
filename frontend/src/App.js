import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Login from './Login'
import Logout from './Logout'
import WishListPage from './WishListPage'
import HomePage from './HomePage'
import CatalogPage from './CatalogPage'

class App extends Component {
  state = {
    isSignedIn: false,
    currentUser: null,
  }

  loginStateHandler = (status, cu) => {
    const { isSignedIn } = this.state
    if (status !== isSignedIn){
      this.setState({
        isSignedIn: status,
        currentUser: cu,
      })
    }
  }

  whichtodisplay = () => {
    const { isSignedIn } = this.state
    if (isSignedIn){
      return <Logout loginStateHandler={this.loginStateHandler}/>
    }
    else{
      return <Login loginStateHandler={this.loginStateHandler}/>
    }
  }

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
              <CatalogPage loginStateHandler={this.loginStateHandler} whichtodisplay={this.whichtodisplay} isSignedIn={ this.state.isSignedIn } user={ this.state.currentUser }/>
            </Route>
            <Route path="/wishlist">
              <WishListPage isSignedIn= {this.state.isSignedIn} user={this.state.currentUser} whichtodisplay={this.whichtodisplay}/>
            </Route>
            <Route path="/">
              <HomePage whichtodisplay={this.whichtodisplay}/>
            </Route>
          </Switch>
        </div>
      </Router>
    );    
  }
}
export default App