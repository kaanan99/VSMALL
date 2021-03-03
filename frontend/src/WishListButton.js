import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import PropTypes from 'prop-types'
class WishListButton extends Component {
  static get propTypes () {
    return {
      isSignedIn: PropTypes.any,
      user: PropTypes.any
    }
  }

  handleClick () {
    if (this.props.isSignedIn) {
      alert(this.props.user.name)
    } else {
      alert('You need to log in to add items to your wishlist')
    }
  }

  render () {
    return (<button name="WishList" onClick = {() => this.handleClick()}>Add to WishList</button>)
  }
}
export default WishListButton
