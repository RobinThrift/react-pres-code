
var React = require('react');

class InputTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {val: 'Hello'};
    }
    render() {                                                         
        return (<input type="text" value={this.state.val} 
                onChange={this._handleChange.bind(this)} />);              
    }                                                                  
    _handleChange(event) {                                                  
        this.setState({val: event.target.value});                   
    }                                                                  
}

React.render(
    <InputTest />,
    document.getElementById('react-render')
);
