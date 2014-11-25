
var React = require('react'),
    Calendar = require('./calendar.react.jsx'),
    Actions  = require('../actions/eventActions');


var App = React.createClass({
    render: function() {
        return (
            <div className='app-wrapper'>
                <Calendar  />
            </div>
        );
    },

    _click: function() {
        Actions.addEvent({
            date: new Date(),
            text: 'test'
        });
    }
});

module.exports = App;
