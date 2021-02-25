import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ItemCard extends Component {
  static get propTypes () {
    return {
      image: PropTypes.any,
      name: PropTypes.any,
      sale: PropTypes.any,
      price: PropTypes.any,
      link: PropTypes.any
    }
  }

  render () {
    return (
            <div className = 'ItemCard' onClick={() => this.handleClick()}>
                <img src={this.props.image} alt={this.props.name} width="100%"></img>
                <h4>{this.props.name}</h4>
                <p>{this.props.sale} {this.props.price}</p>
            </div>
    )
  }

  handleClick () {
    window.open(this.props.link)
  }
}

export default ItemCard
