const React = require('react');
const PropTypes = require('prop-types');

const Button = (props) => {
      return <button type="button" className="btn-default btn" disabled={props.disabled} onClick={()=>{props.apply()}}>
        {props.labelText}
      </button>
  };

Button.propTypes = {
  disabled: PropTypes.bool,
  apply: PropTypes.func
}

Button.defaultProps = {
  disabled: false
}

module.exports = Button;
