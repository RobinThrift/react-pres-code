
var React = require('react'),
    App = require('./components/app.react.jsx'),
    Dispatcher = require('./dispatcher/dispatcher');

React.render(
    <App dispatcher={Dispatcher} />,
    document.getElementById('react-render')
);
