//  src/scripts/components/date.react.jsx

var React = require('react');


module.exports = React.createClass({
    propTypes: {
        date: React.PropTypes.object // moment.js instance
    },

    render: function() {
        return (
            <span className="date">{this.props.date.format('DD.MM.YYYY')}</span>
        )
    }
});
