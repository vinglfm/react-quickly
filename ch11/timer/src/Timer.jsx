let React = require('react');
let PropTypes = require('prop-types');
let DotLoader = require('react-spinners').DotLoader;

const Timer = (props) => {
    if (props.timeLeft == 0) {
      dispatchEvent(new CustomEvent('playSound', {}));
    }
    if (props.timeLeft == null || props.timeLeft == 0) {
      return <div/>;
    }
    return (<div>
          <h1>Time left: {props.timeLeft}</h1>
          <DotLoader color={'#123abc'} loading={props.loading}/>
        </div>);
  };

Timer.propTypes = {
  timeLeft: PropTypes.number,
  loading: PropTypes.bool
}

Timer.defaultProps = {
  loading: true
}

module.exports = Timer;
