
var Flux = require('delorean').Flux,
    EventStore = require('../stores/events');


module.exports = Flux.createDispatcher({
    addEvent: function(event) {
        this.dispatch('event:add', event);
    },

    getStores: function() {
        return {
            eventStore: new EventStore()
        };
    }
});
