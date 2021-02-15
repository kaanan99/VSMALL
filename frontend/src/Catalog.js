import React, { Component } from 'react';
import ItemCard from './ItemCard'
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

class Catalog extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
          <div className="Catalog">  
            <Row gutter={40}>
              {(this.props.items_list).map(item => 
                <Col 
                  xs={{ span: 6 }} sm={{ span: 4 }} md={{ span: 3 }}
                  lg={{ span: 2 }} xl={{ span: 1 }}
                ><ItemCard image={item.image} name={item.name} price={item.price}/></Col>
              )}
            </Row>
          </div>  
        );
    }
}    
export default Catalog;