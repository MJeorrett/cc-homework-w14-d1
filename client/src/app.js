var React = require('react');
var ReactDOM = require('react-dom');

var Shows = require('./components/Shows');

var content = (
  <div>
    <h1>Shows & Bears App</h1>
    <Shows></Shows>
  </div>
);

window.onload = function(){
  ReactDOM.render( content, document.getElementById('app') );
}
