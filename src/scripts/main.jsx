// src/scripts/main.jsx 

import React from 'react';
import ShoppingCart from './components/shopping-cart.jsx';
import Store from './store';

let store = new Store();

function _cartChange(products) {
    store.set('cart', products);
}

React.render(
    <ShoppingCart products={store.get('cart')} cartChange={_cartChange} />,
    document.getElementById('react-render')
);
