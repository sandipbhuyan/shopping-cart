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
  // TODO: Add cart as a drop down
  // TODO: Add size chart
  render() {
    return (
        <section className="App">
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#">
                    <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
                        Bootstrap
                </a>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Cart />
                    </div>
                    <div className="col-md-9">
                        <Items />
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default App;
