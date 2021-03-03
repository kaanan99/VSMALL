import React, { Component } from 'react'
import ItemCard from './ItemCard'
import { Row, Col } from 'react-simple-flex-grid'
import 'react-simple-flex-grid/lib/main.css'
import PropTypes from 'prop-types'

class WishList extends Component {
  static get propTypes () {
    return {
      items_list: PropTypes.any
    }
  }
  state = {items_list: this.props.items_list}

  render () {
    const { items_list } = this.state
    return (
        <div className="WishList">
          <h2 align='center'>Names WishList</h2>
          <Row gutter={40}>
            {
            (items_list).map(item =>
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
  }
}
export default WishList
