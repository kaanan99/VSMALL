import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

class DeleteButton extends Component{

    render () {
        return (<button name="Delete" onClick = {() => this.props.onClick()}>Delete From WishList</button>)
    }
}
export default DeleteButton