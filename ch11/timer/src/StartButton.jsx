let React = require('react');
let PropTypes = require('prop-types');

const StartButton = (props) => {
    return <button
      type="button"
      className="btn-default btn"
      onClick={()=>{props.startTimer(props.time)}}>
      {props.time} seconds
    </button>
  };

StartButton.propTypes = {
  time: PropTypes.number,
  startTimer: PropTypes.func
}

StartButton.defaultProps = {
  time: 0
}

module.exports = StartButton;
