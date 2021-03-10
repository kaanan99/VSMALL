import React, { Component } from 'react'
import Catalog from './Catalog'
import PropTypes from 'prop-types'

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
      return (
        <div className="container">
          <h2 align='center'>Welcome to VSMall</h2>
          <h2 align='center'>{this.props.whichtodisplay()}</h2>
          <Catalog isSignedIn={ this.props.isSignedIn } user={ this.props.user }/>
        </div>
      )    
    }
}
export default CatalogPage