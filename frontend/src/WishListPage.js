import WishList from './WishList'
import PropTypes from 'prop-types'
import axios from 'axios'
import React, { Component } from 'react'

class WishListPage extends Component  {
    static get propTypes () {
      return {
        isSignedIn: PropTypes.any,
        user: PropTypes.any,
        whichtodisplay: PropTypes.any
      }
    }
    
    state = {
      wishList: []
    }
  
    
    updated () {
      if(this.props.isSignedIn){
        axios.get('http://localhost:5000/wishlist/' + this.props.user.email)
          .then(res => {
            const items = res.data.wishlist
            this.setState({ wishList : items})
          })
          .catch(function (error) {
            console.log(error)
          })
      } else {
        alert('Sign in to use this feature')
      }
    }

    render () {
      this.updated()
      const {wishList} = this.state
      if (this.props.isSignedIn) {
          return (
            <div className="container">
                <h2 align='center'>{this.props.user.name}s WishList</h2>
                <h2 align='center'>{this.props.whichtodisplay()}</h2>
                <WishList wishList={wishList} isSignedIn={this.props.isSignedIn} user={this.props.user}/>
            </div>
          )
      }
      else {
        return (
          <div className="container">
          <h2 align='center'>You must sign in to use this feature</h2>
          <h2 align='center'>{this.props.whichtodisplay()}</h2>
          </div>
        )
      }
    }
}
export default WishListPage