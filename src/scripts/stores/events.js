
var Flux = require('delorean').Flux;

module.exports = Flux.createStore({
    events: [],

    actions: {
        'event:add': 'addEvent',
        'event:remove': 'removeEvent',
        'event:get:id': 'getEventById',
        'event:get:date': 'getEventByDate'
    },

    addEvent: function(event) {
        event._id = new Date().getTime();
        console.log(event);
        this.events.push(event);
        this.emit('change');
    },

    getEventById: function(id) {
        var event = this.events.map((e) => {
            if (e._id === id) {
                return e;
            }
        });
        return event[0];
    },

    getEventByDate: function(date) {
        console.log(date);
        var event = this.events.map((e) => {
            if (date.isSame(e.date)) {
                return e;
            }
        });
        return event[0];
    },

    removeEvent: function(event) {
        var events = this.events.map((e) => {
            if (e._id !== event._id) {
                return e;
            }
        });
        this.set('events', events);
        this.emit('change');
    },

    getState: function() {
        return {
            events: this.events
        };
    }
});
