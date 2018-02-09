const React = require('react');
const {NavLink} = require('react-router-dom');

module.exports = () => {
  return (<div>
    <NavLink to="/timer">Timer </NavLink>
    <NavLink to="/about">About</NavLink>
  </div>);
}
