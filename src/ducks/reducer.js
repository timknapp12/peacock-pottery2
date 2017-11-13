import axios from 'axios';

const initialState = {
    products: [],
    cart: []
}

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
// const READ_CART = 'READ_CART';
const SHOW_CART = 'SHOW_CART';
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
const CHECK_FOR_CART = 'CHECK_FOR_CART';

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_PRODUCTS +'_FULFILLED':
            return Object.assign({}, state, {products: action.payload});
        case ADD_TO_CART + '_FULFILLED':
        return {...state,
            // not sure if I did this part correctly- the example from the mini project also had 'swag' listed as things to be returned- although I don't have swag in my app, but maybe products????    Will this only let me order ONE QTY per item???
            cart: [...state.cart, action.payload]
        }
        
        case REMOVE_FROM_CART + '_FULFILLED':
        console.log(action.payload)
            alert('Item removed from cart');
            return Object.assign({}, state, {deleted: ''});

        case SHOW_CART + '_FULFILLED':
            return  Object.assign({}, state, {cart: action.payload});

        // case CHECK_FOR_CART + '_FULFILLED':
        //         console.log(action.payload);
        //         return state;
    
        default:
        return state;
    }   
}


//action creators

export function getAllProducts() {
    return {
        type: GET_ALL_PRODUCTS,
        payload: axios.get('/api/products').then(res => res.data)
    }
}

export function addToCart(product_id) {
    alert('Item added to cart');    
    return {
        type: ADD_TO_CART,
        payload: axios.put(`/api/cart/${product_id}`).then(res => res.data)
    }
}

export function removeFromCart(product_id) {
    return {
        type: REMOVE_FROM_CART,
        payload: axios.delete(`/api/cart/${product_id}`).then(res => res.data)
    }
}               


export function showItems() {
    return {
        type: SHOW_CART,
        payload: axios.get('/api/cart').then(res => res.data)
    }
}

// export function checkForCart() {
//     return {
//         type: CHECK_FOR_CART,
//         payload: axios.get('/api/cart/check').then(res => res)
//     }
// }