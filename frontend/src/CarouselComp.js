import { React, Component } from "react"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import PropTypes from 'prop-types'

class CarouselComp extends Component {
    static get propTypes () {
        return {
          items: PropTypes.any
        }
    }

    render(){
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                {this.props.items.map(item =>
                <div>
                    <img src={item.image} width="20"/>
                </div>)}
            </Carousel>
        </div>
    )
}
}
export default CarouselComp
