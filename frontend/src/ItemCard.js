import React, { Component } from 'react';

class ItemCard extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className = 'ItemCard' onClick={this.handleClick()}>
                <img src={this.props.image} alt={this.props.name} width="100%"></img>
                <h4>{this.props.name}</h4>
                <p>{this.props.price}</p>    
            </div>
        );
    }

    handleClick(){
        window.location.assign(this.props.link)
    }
}

export default ItemCard;