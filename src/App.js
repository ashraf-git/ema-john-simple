import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header></Header>
        <Router>
          <Switch>
            <Route exact path="/">
              <Shop />
            </Route>
            <Route path='/shop'>
              <Shop></Shop>
            </Route>
            <Route path="/review">
              <Review />
            </Route>
            <Route path="/manage">
              <Inventory></Inventory>
            </Route>
            <Route path="/product/:productKey">
              <ProductDetail></ProductDetail>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
        
        
      </header>
    </div>
  );
}

export default App;
