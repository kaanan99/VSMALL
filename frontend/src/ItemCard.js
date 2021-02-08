import React from 'react';

class ItemCard extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <button className = 'ItemCard' onClick={this.handleClick()}>
                {props.image}
                {props.name}
                {props.price}
            </button>
        );
    }
    handleClick(){
        window.location.assign(this.props.link)
    }
}

