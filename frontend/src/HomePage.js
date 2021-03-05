import React, { Component } from 'react'
import PropTypes from 'prop-types'

class HomePage extends Component {
    static get propTypes () {
        return {
          whichtodisplay: PropTypes.any
        }
    }

    render () {
      return (
        <div className="container">
            <h2 align='center'>Welcome To VSMall</h2>
            <h2 align='center'>{this.props.whichtodisplay()}</h2>
        </div>
      )    
    }
}
export default HomePage