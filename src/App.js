import React from 'react';
import './App.css';
import { removeTypeDuplicates } from '@babel/types';
import axios from 'axios'

import Nav from './components/Nav'
import { ReactComponent as Logo } from './untitled.svg';

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
      <Logo />
      <svg src='untitled.svg' ></svg>
      {this.state.products.map(product => {
        return (
          <>
          <p>{product.title}</p>
          <a href='#'><img src = {product.img}/></a>
          </>
        )
      })}
      
      </>
    )
  }
   
}

export default App;
