const React = require('react');
const ReactDOM = require('react-dom');
const {BrowserRouter, Switch, Route} = require('react-router-dom');
const TimerWrapper = require('TimerWrapper');

require('bootstrap/dist/css/bootstrap.min.css');

ReactDOM.render(
  (<BrowserRouter>
    <Route exact path="/" component={TimerWrapper} />
  </BrowserRouter>),
  document.getElementById('timer-app')
)
