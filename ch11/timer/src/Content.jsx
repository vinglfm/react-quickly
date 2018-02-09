const React = require('react');
const {Switch, Route} = require('react-router-dom');
const TimerWrapper = require('TimerWrapper');
const About = require('About');

module.exports = () => {
  return (
    <Switch>
      <Route exact path="/timer" component={TimerWrapper} />
      <Route exact path="/about" component={About} />
    </Switch>);
}
