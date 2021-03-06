import React, { Component } from 'react'
import ItemCard from './ItemCard'
import { Row, Col } from 'react-simple-flex-grid'
import 'react-simple-flex-grid/lib/main.css'
import PropTypes from 'prop-types'
import axios from 'axios'
import WishListButton from './WishListButton'

class Catalog extends Component {
  static get propTypes () {
    return {
      isSignedIn: PropTypes.any,
      user: PropTypes.any
    }
  }
  state = {items_list: []}

  componentDidMount () {
    axios.get('http://localhost:5000/catalog')
      .then(res => {
        const items = res.data.items_list
        this.setState({ items_list : items})
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  showAll () {
    // console.log("Reverting")
    axios.get('http://localhost:5000/catalog')
      .then(res => {
        const items = res.data.items_list
        this.setState({ items_list : [] })
        this.setState({ items_list: items })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  filterBySale () {
    axios.get('http://localhost:5000/catalog?sale=Sale')
      .then(res => {
        const items = res.data.items_list
        this.setState({ items_list : [] })
        this.setState({ items_list : items })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  filterByUniqlo () {
    axios.get('http://localhost:5000/catalog?brand=Uniqlo')
      .then(res => {
        const items = res.data.items_list
        this.setState({ items_list : [] })
        this.setState({ items_list : items })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  filterByHollister () {
    axios.get('http://localhost:5000/catalog?brand=Hollister')
      .then(res => {
        const items = res.data.items_list
        this.setState({ items_list : [] })
        this.setState({ items_list : items })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render () {
    const {items_list} = this.state
    return (
        <div className="Catalog">
          <button name="ShowAll" onClick={() => this.showAll()}>Show All</button>
          <button name="FilterbySale" onClick={() => this.filterBySale()}>Sale</button>
          <button name="FilterbyUniqlo" onClick={() => this.filterByUniqlo()}>Uniqlo</button>
          <button name="FilterbyHollister" onClick={() => this.filterByHollister()}>Hollister</button>
          <Row gutter={40}>
            {
            items_list.map(item =>
              <Col
                key = {item._id}
                xs={{ span: 6 }} sm={{ span: 4 }}
                md={{ span: 3 }} lg={{ span: 2 }}
              ><ItemCard image={item.image} name={item.name} price={item.price} link={item.link} sale={item.sale} brand={item.brand}/>
              <WishListButton isSignedIn = { this.props.isSignedIn } user={ this.props.user} item={item}></WishListButton></Col>
            )}
           </Row>
        </div>
        
    )
  }
}
export default Catalog
