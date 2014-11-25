

var Dispatcher = require('../dispatcher/dispatcher');

module.exports = {
    addEvent: function(data) {
        Dispatcher.dispatch('event:add', data);
    },

    getEventByDate: function(date) {
        Dispatcher.dispatch('event:get:date', date);
    }
};
