import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
class WishListButton extends Component {
  static get propTypes () {
    return {
      isSignedIn: PropTypes.any,
      user: PropTypes.any,
      item: PropTypes.any
    }
  }

  handleClick () {
    if (this.props.isSignedIn) {
      axios.post('http://localhost:5000/wishlist', {'name':this.props.user.email, 'item': this.props.item})
      .then(alert('Item added to your wishlist!'))
    } else {
      alert('You need to log in to add items to your wishlist')
    }
  }

  render () {
    return (<button name="WishList" onClick = {() => this.handleClick()}>Add to WishList</button>)
  }
}
export default WishListButton
