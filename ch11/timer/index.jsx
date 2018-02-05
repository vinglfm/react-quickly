let React = require('react');
let ReactDOM = require('react-dom');
let PropTypes = require('prop-types');

let TimerWrapper = require('TimerWrapper');

require('bootstrap/dist/css/bootstrap.min.css');

ReactDOM.render(
  <TimerWrapper/>,
  document.getElementById('timer-app')
)
