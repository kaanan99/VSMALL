import React, { Component } from 'react'
import PropTypes from 'prop-types'

class DeleteButton extends Component{
    static get propTypes () {
        return {
          onClick: PropTypes.any
        }
      }
    
    render () {
        return (<button name="Delete" onClick = {() => this.props.onClick()}>Delete From WishList</button>)
    }
}
export default DeleteButton