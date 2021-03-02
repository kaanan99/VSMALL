import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login'
import PropTypes from 'prop-types'
// refresh token
import { refreshTokenSetup } from './refreshToken'

const clientId =
  '520029899680-bvjdfsre1gm3jg1b5qdfiii11a1bp5il.apps.googleusercontent.com'
class Login extends Component {
  static get propTypes () {
    return {
      loginStateHandler: PropTypes.any
    }
  }
  onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj)
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍.`
    )
    refreshTokenSetup(res)
    //this.props.loginStateHandler(true)
  }

  onFailure = (res) => {
    console.log('Login failed: res:', res)
    alert(
      'Failed to login. 😢'
    )
    //this.props.loginStateHandler(false)
  }

  render () {
    return (
      <div>
        <GoogleLogin
          clientId={clientId}
          buttonText="Login with Google"
          onSuccess={this.onSuccess}
          onFailure={this.onFailure}
          cookiePolicy={'single_host_origin'}
          style={{ marginTop: '100px' }}
          isSignedIn={true}
        />
      </div>
    )
  }
}
export default Login