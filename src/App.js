import React, { Component } from 'react';

import Create from './create'
import Get from './Get'
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
      <div >
        <center><h1>Manage Products</h1></center>
        <ul>
          <li><Link to={'/create'} ><h3>Add Product</h3></Link></li>
          <li><Link to={'/Get'}><h3>Product List</h3></Link></li>
        </ul>
        <hr/>
        <Switch>
          <Route exact path='/create' component={Create}/>
          <Route exact path='/Get' component={Get}/> 
        </Switch>

      </div>
      </Router>
    );
  }
}

export default App;
