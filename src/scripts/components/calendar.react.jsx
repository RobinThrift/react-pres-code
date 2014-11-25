// src/scripts/components/calendar.react.jsx 


var React = require('react'),
    PaperButton = require('material-ui').PaperButton,
    Flux = require('delorean').Flux,
    Editor = require('./editor.react.jsx'),
    moment = require('moment'),
    {Calendar, Month, Week, Day} = require('react-calendar'),
    Actions  = require('../actions/eventActions');


module.exports = React.createClass({
    mixins: [Flux.mixins.storeListener],
    getInitialState: function() {
        return {
            date: ''
        };
    },

    storeDidChange: function (storeName) {
        console.log(storeName + " store is now updated.");
    },

    render: function() {
        return (
            <div>
                <Month date={moment('2014-11-01')}>
                    {this.getStore('eventStore').events.map(function(event) {
                        return <Day date={moment(event.date)} modifiers={{hasEvent: true}}></Day>
                    })}
                    <Day onClick={this._click}></Day>
                </Month>
                <Editor ref="editor" date={this.state.date} />
            </div>
        )
    },

    _click: function(type, date, event) {
        this.setState({date: date});
        this.refs.editor.show();
    }
});
