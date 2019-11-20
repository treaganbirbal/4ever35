import React from 'react';
import logo from './logo.svg';
import './App.css';
import { removeTypeDuplicates } from '@babel/types';
import axios from 'axios'

import Nav from './components/Nav'

class App extends React.Component {
  constructor(){
    super()
      this.state = {
        products: []
      }
  }

  componentDidMount(){
    axios.get("http://localhost:3004/sweaters")
      .then(res => {
        this.setState({
          products: res.data
        })
      })
  }
  render(){
    return (
      <>
      <Nav />
      {this.state.products.map(product => {
        return (
          <>
          <p>{product.title}</p>
          <img src = {product.img}/>
          </>
        )
      })}
      
      </>
    )
  }
   
}

export default App;
