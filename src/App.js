import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { link } from 'fs';
import Navbar from './components/Navbar.js'
import ProductList from './components/ProductList.js'
import Details from './components/Details.js'
import Cart from './components/Cart/Cart.js'
import Default from './components/Default.js'
import Modal from './components/Modal.js'

class App extends Component {
  render(){
  return (
    /* navbar zawsze ma byc wyswietlany na stronie  */
   
   <React.Fragment>
     <Navbar></Navbar>
     <Switch>
       <Route exact path="/" component={ProductList}></Route>
       <Route path="/details" component={Details}></Route>
       <Route path="/cart" component={Cart}></Route>
       <Route component={Default}></Route>
     </Switch>
     <Modal />

   </React.Fragment>
  );
}
}

export default App; 



  