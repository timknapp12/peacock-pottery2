import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

export default (
    <Switch>
        <Route component={Login} path='/' exact/>
        <Route component={Home} path='/home'/>
        <Route component={About} path='/about'/>
        <Route component={Shop} path='/shop'/>
        <Route component={Cart} path='/cart'/>
        <Route component={Checkout} path='/checkout'/>
    </Switch>
)