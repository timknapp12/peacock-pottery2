import React, { Component } from 'react';
import "./Shop.css";
import Navbar from '../Navbar/Navbar';
import { getAllProducts, addToCart } from '../../ducks/reducer';
import { connect } from 'react-redux';
import Item from './Item/Item';




class Shop extends Component {

    componentDidMount(){
        this.props.getAllProducts();
      }


    render() {
        const displayProducts = this.props.products.map((product) => 
    (
        <Item
        key={ product.product_id }
        product_id={ product.product_id }
        product_name={ product.product_name }
        price={ product.price }
        image={ product.image }
        addToCart={ addToCart }
        />
    ))
        
        console.log(this.props.products);
        return(
            <div className='shop_body1'>
                <Navbar/>
                <div className='shop_display'>
                { displayProducts }
                </div> 
            </div> 
        )
    }
  
}

function mapStateToProps(state) {
    const { products } = state;

    return {
        products: products
    };
}

export default connect(mapStateToProps, {getAllProducts})(Shop)