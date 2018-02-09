const React = require('react');
const ReactDOM = require('react-dom');
const {BrowserRouter} = require('react-router-dom');
const App = require('App');

require('bootstrap/dist/css/bootstrap.min.css');
const css = require('./app.css');
console.log(css);

ReactDOM.render(
  (<BrowserRouter>
    <App/>
  </BrowserRouter>),
  document.getElementById('timer-app')
)
