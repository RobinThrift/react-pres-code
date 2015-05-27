// src/scripts/components/total.jsx 

import React from 'react';

class Total extends React.Component {
    render() {
        let prices = this.props.products.map((item) => {
            return Math.round(item.price * (1+item.tax/100)* 100 * item.qty) / 100;
        });
        return (
            <div className={this.props.className}>
                <span>Total:</span>  
                {prices.reduce((acc, val) => {
                    return acc + val;
                })} 
                {this.props.suffix}
            </div>
        );
    }
}
Total.propTypes = {
    products: React.PropTypes.array
};

export default Total;
