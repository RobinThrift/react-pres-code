// src/scripts/components/editor.react.jsx 

var React = require('react'),
    {Input, Dialog} = require('material-ui'),
    moment = require('moment'),
    DateDisplay = require('./date.react.jsx'),
    Actions  = require('../actions/eventActions');


module.exports = React.createClass({
    propTypes: {
        date: React.PropTypes.object
    },

    getInitialState: function() {
        return {
            name: '',
            location: ''
        };
    },

    _closeDialog: function() {
        this.refs.eventEditor.dismiss();
        this.setState({name: '', date: '', location: ''});
    },

    _showDialog: function() {
        this.refs.eventEditor.show();
    },

    show: function() {
        var event = Actions.getEventByDate(this.props.date);
        console.log(this.props.date, event);
        if (event) {
            this.setState({
                name: event.name,
                location: event.location
            });
        }
        this._showDialog();
    },

    _submitDialog: function() {
        Actions.addEvent({
            name: this.state.name,
            location: this.state.location,
            date: this.props.date
        });
        this._closeDialog();
    },

    render: function() {
        var _dialogActions = [
                { text: 'Cancel', onClick: this._closeDialog },
                { text: 'Add', onClick: this._submitDialog }
            ];
        return (
            <Dialog ref="eventEditor" title="Event Editor" className="event-editor" actions={_dialogActions}>
                <h3>Event for: <DateDisplay date={this.props.date}></DateDisplay></h3>
                <Input placeholder="Name" type="text" name="eventName" id="eventName" description="The Name of the Event"  onChange={this._handleNameChange} />
                <Input placeholder="Loaction" type="text" name="eventLocation" id="eventLocation" description="The Location of the Event"  onChange={this._handleLoactionChange} />
            </Dialog>
        )
    },


    _handleNameChange: function(event, value) {
        this.setState({name: value});
    },

    _handleLoactionChange: function(e, value) {
        this.setState({location: value});
    }
});
