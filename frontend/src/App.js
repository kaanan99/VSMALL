import React, { Component } from 'react';
import Catalog from './Catalog';

class App extends Component {
  items_list = {
    items: []
  };
  
  componentDidMount() {
    axios.get('http://localhost:5000/catalog')
     .then(res => {
       const items = res.data.items_list;
       this.items_list({ items });
     })
     .catch(function (error) {
       //Not handling the error. Just logging into the console.
       console.log(error);
     });
 }

  render() {
    return (
      <div className="container">
        <Catalog items_list={this.items_list}/>
      </div>
    );
  }
}

export default App