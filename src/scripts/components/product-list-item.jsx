// src/scripts/components/product-list-item.jsx 

import React from 'react';
import Price from './price.jsx';

class ProductListItem extends React.Component {
    render() {
        let product = this.props.product;
        return (
            <li className="product-list-item">
                <img className="product-list-item__img" src="img/placeholder_50x50.gif" />
                <strong className="product-list-item__title">{product.name}</strong>
                <input className="product-list-item__qty" type="number" value={product.qty} onChange={this._changeHandler.bind(this)} />
                <Price qty={product.qty} base={product.price} tax={product.tax} className="product-list-item__price" suffix="€" />
            </li>
        );
    }

    _changeHandler(event) {
        let product = this.props.product; // actually clone it!
        product.qty = parseInt(event.target.value, 10);
        this.props.qtyChangeHandler(product);
    }
}
ProductListItem.propTypes = {
    product: React.PropTypes.object
};

export default ProductListItem;
