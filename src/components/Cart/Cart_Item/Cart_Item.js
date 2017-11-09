import React from "react";
import "./Cart_Item.css";

export default function Cart_Item({
  product_id,
  product_name,
  price,
  image,
  removeFromCart
}) {
    
  return (
    <div className='cart_container'>
      <img className='cart_images' src={ `${image}` } alt="Product-image" />
      <div>
        <span className="cart_product_name">{ product_name }</span>
      </div>
      
      <div  className="cart_product_price">$ { price }</div>
      <div ><button className="remove_button" onClick={ () => { removeFromCart( product_id ) }} >REMOVE FROM CART</button></div>
     </div> 
  );
}