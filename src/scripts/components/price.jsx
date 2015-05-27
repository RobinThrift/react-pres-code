// src/scripts/components/price.jsx 

import React from 'react';

class Price extends React.Component {
    render() {
        return (
            <span className={this.props.className}>
                {Math.round(
                        this.props.base * (1+this.props.tax/100)
                        * this.props.qty* 100
                    ) / 100} 
                {this.props.suffix}
            </span>
        );
    }
}
Price.propTypes = {
    base: React.PropTypes.number,
    tax: React.PropTypes.number
};

export default Price;
