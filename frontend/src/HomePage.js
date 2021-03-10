import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CarouselComp from './CarouselComp'
import axios from 'axios'

class HomePage extends Component {
    static get propTypes () {
        return {
          whichtodisplay: PropTypes.any
        }
    }
    state = {carousel_items : []}

    componentDidMount () {
      axios.get('http://localhost:5000/catalog')
        .then(res => {
          const items = res.data.items_list
          this.setState({ carousel_items  : items.slice(0, 11)})
        })
        .catch(function (error) {
          console.log(error)
        })
    }

    render () {
      return (
        <div role="homepage" className="container">
            <h2 align='center'>Welcome To VSMall</h2>
            <h2 align='center'>{this.props.whichtodisplay()}</h2>
            <div>
            <CarouselComp items={this.state.carousel_items}/>
            </div>
        </div>
      )    
    }
}
export default HomePage