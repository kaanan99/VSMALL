import React from 'react';

class ItemCard extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className = 'ItemCard' onClick={this.handleClick()}>
                <img src={this.props.image} alt={this.props.name}></img>
                <h4>{this.props.name}</h4>
                <p>{this.props.price}</p>    
            </div>
        );
    }

    handleClick(){
        window.location.assign(this.props.image)
    }
}

