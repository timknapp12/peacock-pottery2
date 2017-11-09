import React from "react";
import "./Item.css";

export default function Item({
  product_id,
  product_name,
  price,
  image,
  addToCart
}) {
  return (
      <div className='shop_body'>
      <img className='shop_images' src={ `${image}` } alt="Product-image"  />{/*  in css max height and max width and height and width both auto */}
      <div>
        <span className="product_name">{ product_name }</span>
      </div>
      <div><span className="product_price">$ { price }</span></div>
      <div><button className="cart_button" onClick={ () => { addToCart( product_id ) }} >ADD TO CART</button></div>  
    </div> 
  );
}
