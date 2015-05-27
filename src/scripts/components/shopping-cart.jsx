// src/scripts/components/shopping-cart.jsx 

import React from 'react';
import ProductListItem from './product-list-item.jsx';
import Total from './total.jsx';

class ShoppingCart extends React.Component {
    render() {
        let products = this.props.products;
        return (
            <div className="shopping-cart">
                <h3>Items in your cart:</h3>
                <ul className="shopping-cart__items">
                    {products.map((item, i) => {
                        return <ProductListItem product={item} key={i} qtyChangeHandler={this._qtyChangeHandler.bind(this)} />
                    })} 
                </ul>
                <hr />
                <Total products={products} className="shopping-cart__total" suffix="€" />
            </div>
        );
    }

    _qtyChangeHandler(product) {
        let products = this.props.products, // actually clone it!
            prodIndex = -1,
            item;
        
        products.forEach((p, i) => {
            if (p.name === product.name) {
                prodIndex = i;
            } 
        });

        if (prodIndex === -1) { return; }

        products[prodIndex] = product;

        this.props.cartChange(products);
        this.forceUpdate();
    }
}
ShoppingCart.propTypes = {
    items: React.PropTypes.array
}

export default ShoppingCart;
