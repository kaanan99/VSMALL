import React, { Component } from 'react'
import ItemCard from './ItemCard'
import DeleteButton from './DeleteButton'
import { Row, Col } from 'react-simple-flex-grid'
import 'react-simple-flex-grid/lib/main.css'
import PropTypes from 'prop-types'

import axios from 'axios'

class WishList extends Component {
  static get propTypes () {
    return {
      isSignedIn: PropTypes.any,
      user: PropTypes.any,
      wishList: PropTypes.any
    }
  }
  state = {wishList: this.props.wishList, change:0}

  handleClick (item) {
    const { wishList } = this.state;
    axios.delete('http://localhost:5000/wishlist?name=' + this.props.user.email+'&id=' + item._id)
      .then(res => {
        // 204 status code means the action was successfully enacted
        if (res.status === 204) {
          console.log("entered")
          this.setState({
            wishList: wishList.filter(function(value){ 
              return value._id != item._id
            })
          })
          console.log(this.state.wishList)
        }
      });
  }

  render () {
    const { wishList } = this.props
      return (
          <div className="WishList">
            <Row gutter={40}>
              {
              wishList.map(item =>
                <Col
                  key = {item._id}
                  xs={{ span: 6 }} sm={{ span: 4 }}
                  md={{ span: 3 }} lg={{ span: 2 }}
                ><ItemCard image={item.image} name={item.name} price={item.price} link={item.link} sale={item.sale}/>
                <DeleteButton onClick={() => this.handleClick(item)}></DeleteButton></Col>
              )}
            </Row>
          </div>
      )
  }
  
}
export default WishList