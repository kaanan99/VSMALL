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
import PropTypes from 'prop-types'

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
              <WishListPage isSignedIn= {this.state.isSignedIn} user={this.state.currentUser}/>
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
      <h2 align='center'>Welcome To VSMall</h2>
    )    
  }
}

class CatalogPage extends Component  {
  static get propTypes () {
    return {
      loginStateHandler: PropTypes.any,
      whichtodisplay: PropTypes.any,
      isSignedIn: PropTypes.any,
      user: PropTypes.any
    }
  }

  render () {
    // alert('Catalog page')
    // alert(this.props.user)
    return (
      <div className="container">
        <h2 align='center'>Welcome to VSMall</h2>
        <h2 align='center'>{this.props.whichtodisplay()}</h2>
        <Catalog isSignedIn={ this.props.isSignedIn } user={ this.props.user }/>
      </div>
    )    
  }
}
class WishListPage extends Component  {
  static get propTypes () {
    return {
      isSignedIn: PropTypes.any,
      user: PropTypes.any
    }
  }
  
  state = {
    wishList: []
  }

  
  componentDidMount () {
    if(this.props.isSignedIn){

      axios.get('http://localhost:5000/wishlist/' + this.props.user.email)
        .then(res => {
          const items = res.data.wishlist
          this.setState({ wishList : items})
          // console.log("Middle")
          // console.log(this.state.wishList)
        })
        .catch(function (error) {
          console.log(error)
        })
      // console.log("After")
      // console.log(this.state.wishList)
    } else {
      alert('Sign in to use this feature')
    }
  }

  render () {
    //const {items} = this.state
    if (this.props.isSignedIn) {
      // axios.get('http://localhost:5000/wishlist/' + this.props.user.email)
      //   .then(res => {
      //     const items = res.data.wishlist
      //     this.setState({ wishList: []})
      //     this.setState({ wishList : items})
      //     console.log(this.state.wishList)
      //   })
      //   .catch(function (error) {
      //     console.log(error)
      //   })
        // console.log("Render")
        // console.log(this.state.wishList)
        return (
          <div className="container">
            <WishList wishList={this.state.wishList} isSignedIn={this.props.isSignedIn} user={this.props.user}/>
          </div>
        )
    }
    else {
      return (
        <h2 align='center'>You must sign in to use this feature</h2>
      )
    }
  }
}
