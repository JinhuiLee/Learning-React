var App = require('./components/App.js');
var React = require('react')
var ReactDOM = require('react-dom')
var AppApi = require('./utils/appApi.js')

AppApi.getContacts();

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

