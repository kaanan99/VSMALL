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

  render () {
    return (
        <div className="WishList">
          <h2 align='center'>Name's WishList</h2>
          <Row gutter={40}>
            {
            (this.props.items_list).map(item =>
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
