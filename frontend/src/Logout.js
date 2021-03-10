import React from 'react'
import { Component } from 'react'
import { GoogleLogout } from 'react-google-login'
import PropTypes from 'prop-types'

const clientId =
  '520029899680-bvjdfsre1gm3jg1b5qdfiii11a1bp5il.apps.googleusercontent.com'

class Logout extends Component {
  static get propTypes () {
    return {
      loginStateHandler: PropTypes.any
    }
  }

  onSuccess = () => {
    console.log('Logout made successfully')
    alert('Logout made successfully ✌')
    this.props.loginStateHandler(false, null)
  }

  render () {
    return (
      <div>
        <GoogleLogout
          clientId={clientId}
          buttonText="Logout of VSMall"
          onLogoutSuccess={this.onSuccess}
        ></GoogleLogout>
      </div>
    )
  }
}

export default Logout