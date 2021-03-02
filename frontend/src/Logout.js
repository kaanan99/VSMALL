import React from 'react'
import { GoogleLogout } from 'react-google-login'

const clientId =
  '520029899680-bvjdfsre1gm3jg1b5qdfiii11a1bp5il.apps.googleusercontent.com'

function Logout (props) {
  const onSuccess = () => {
    console.log('Logout made successfully')
    alert('Logout made successfully ✌')
    //props.loginState(false)
  }

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout of VSMall"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  )
}

export default Logout
