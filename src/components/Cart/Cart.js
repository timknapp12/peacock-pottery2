import React, { Component } from "react";
import "./Cart.css";
import Navbar from "../Navbar/Navbar";
import { Link } from 'react-router-dom';
import { removeFromCart, showItems } from '../../ducks/reducer';
import { connect } from 'react-redux';
import Cart_Item from './Cart_Item/Cart_Item';

class Cart extends Component {

  componentDidMount() {
    this.props.showItems();
  }
  componentWillReceiveProps(nextProps){
    this.props.showItems();
  }

  render() {
   

    const displayCart = this.props.cart.map((product,i) => {
     
    return (
        <Cart_Item
        key={i}
        product_id={ product.cart_id }
        product_name={ product.product_name }
        price={ product.price }
        image={ product.image }
        removeFromCart={ this.props.removeFromCart }
        />
    )})
    return (
      <div className='cart_body'>
        <Navbar />
        <div>
          <Link to='/checkout'><button type="" className="checkout_button">
            Checkout
          </button></Link>
        </div>

        <div className='display_cart'>{displayCart}</div>
      </div>
    );  
  }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, { showItems, removeFromCart })(Cart);