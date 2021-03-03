import React, { Component } from 'react'
import ItemCard from './ItemCard'
import { Row, Col } from 'react-simple-flex-grid'
import 'react-simple-flex-grid/lib/main.css'
import PropTypes from 'prop-types'
// import axios from 'axios'

class WishList extends Component {
  static get propTypes () {
    return {
      isSignedIn: PropTypes.any,
      user: PropTypes.any
    }
  }
  state = {wishList: this.props.wishList}



  render () {
    const { wishList } = this.state
    console.log(wishList)
    if(this.props.isSignedIn){
      return (
          <div className="WishList">
            <h2 align='center'>{this.props.user.name}'s WishList</h2>
            <Row gutter={40}>
              {
              (wishList).map(item =>
                <Col
                  key = {item.name}
                  xs={{ span: 6 }} sm={{ span: 4 }}
                  md={{ span: 3 }} lg={{ span: 2 }}
                ><ItemCard image={item.image} name={item.name} price={item.price} link={item.link} sale={item.sale}/>
                </Col>
              )}
            </Row>
          </div>
      )
    } else{
      return(<h2 align='center'>You need to sign in to use this feature</h2>)
    }
  }
}
export default WishList
