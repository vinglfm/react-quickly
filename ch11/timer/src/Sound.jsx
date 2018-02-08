const React = require('react');
const PropTypes = require('prop-types');

class Sound extends React.Component {
  constructor(props) {
    super(props);
    this.sound = this.sound.bind(this);
  }

  sound() {
    this.refs.sound.play();
  }
  componentDidMount() {
    window.addEventListener('playSound', this.sound);
  }
  componentWillUnmount() {
    window.removeEventListener('playSound', this.onScroll, false);
  }
  render() {
    return <audio ref="sound" src={this.props.file} preload="auto"></audio>
  }
}

Sound.propTypes = {
  file: PropTypes.string.isRequired
}

module.exports = Sound;
