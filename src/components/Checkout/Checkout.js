import React, { Component } from 'react';
import "./Checkout.css";
import Navbar from '../Navbar/Navbar';
import { connect } from 'react-redux';
import underscore from 'underscore';


class Checkout extends Component {

    constructor(props) {
        super(props);


    }

    render() {

        const prices = underscore.pluck(this.props.cart, 'price');  //returns an array of prices
        console.log(prices);
          
         const getSubtotal = (arr) => arr.reduce((a, b) => a + (+b), 0);
         const subtotal = getSubtotal(prices);
         console.log(subtotal);
         
         const getTaxes = (num) => (num * 6.85) / 100;
         const subtaxes = getTaxes(subtotal);
         const taxes = subtaxes.toFixed(2);
         console.log(taxes);
         
         const getTotal = (a, b) => (+a) + (+b);
         const total = getTotal(subtotal, taxes);
         console.log(total);


        console.log(this.props.cart);
        return(
            <div className='checkout_body'>
                <Navbar/>
                <div className='total_container'>
                <span id='checkout_text'>CHECKOUT</span>
                <span id='items_text'>Items ${ subtotal }</span>
                <span id='taxes_text'>Taxes ${ taxes }</span>
                <span id='total_text'>Order Total ${ total }</span>
                <button type='' className='order_button'>Place Your Order</button>
                </div> 
            </div> 
        )
    }
}

function mapStateToProps(state) {
    const { cart } = state;

    return state
}

export default connect(mapStateToProps)(Checkout);