import React, { Component } from 'react';
import ItemCard from './ItemCard'

class Catalog extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Row gutter={40}>
              {(item_list).map(item => 
                <Col 
                  xs={{ span: 6 }} sm={{ span: 4 }} md={{ span: 3 }}
                  lg={{ span: 2 }} xl={{ span: 1 }}
                ><ItemCard image={item.image} name={item.name} price={item.price}/></Col>
              )}
            </Row>
        );
    }
}    
export default Catalog;