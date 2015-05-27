
var React = require('react');

class InputTest extends React.Component {
    render() {
        return (<input type="text" value="Hello" />);
    }
}

React.render(
    <InputTest />,
    document.getElementById('react-render')
);
