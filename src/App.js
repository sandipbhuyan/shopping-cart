import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Items from './components/Items'
import Cart from './components/Cart'


class App extends Component {
  constructor(props) {
      super(props);
      this.setState({

      })
  }
  render() {
    return (
        <div className="App">
            <Items />
            <Cart />
        </div>
    );
  }
}

export default App;
