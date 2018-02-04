const Timer = props => {
  if (props.timeLeft == 0) {
    dispatchEvent(new CustomEvent('playSound', {}));
  }
  if (props.timeLeft == null || props.timeLeft == 0) {
    return React.createElement('div', null);
  }
  return React.createElement(
    'h1',
    null,
    'Time left: ',
    props.timeLeft
  );
};

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
  render() {
    return React.createElement('audio', { ref: 'sound', src: this.props.file, preload: 'auto' });
  }
}

const StartButton = props => {
  return React.createElement(
    'button',
    {
      type: 'button',
      className: 'btn-default btn',
      onClick: () => {
        props.startTimer(props.time);
      } },
    props.time,
    ' seconds'
  );
};

const Button = props => {
  return React.createElement(
    'button',
    { type: 'button', className: 'btn-default btn', disabled: props.disabled, onClick: () => {
        props.apply();
      } },
    props.labelText
  );
};

class TimerWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timeLeft: null, timeFrom: null, timer: null, paused: false };
    this.startTimer = this.startTimer.bind(this);
    this.pause = this.pause.bind(this);
    this.resume = this.resume.bind(this);
    this.cancel = this.cancel.bind(this);
    this.reset = this.reset.bind(this);
  }
  startTimer(timeLeft) {
    clearInterval(this.state.timer);
    let timer = setInterval(() => {
      var timeLeft = this.state.timeLeft - 1;
      if (timeLeft == 0) {
        clearInterval(timer);
      }
      this.setState({ timeLeft: timeLeft });
    }, 1000);
    return this.setState({ timeLeft: timeLeft, timeFrom: timeLeft, timer: timer });
  }
  pause() {
    if (this.state.timeLeft > 0 && !this.state.paused) {
      this.setState({ paused: true });
      clearInterval(this.state.timer);
    }
  }
  resume() {
    if (this.state.paused && this.state.timeLeft > 0) {
      this.setState({ paused: false });
      this.startTimer(this.state.timeLeft);
    }
  }
  cancel() {
    if (this.state.timeLeft > 0) {
      this.setState({
        timeLeft: null,
        paused: false
      });
      clearInterval(this.state.timer);
    }
  }
  reset() {
    if (this.state.timeLeft > 0) {
      this.setState({ timeLeft: this.state.timeFrom });
    }
  }
  render() {
    console.log('render');
    return React.createElement(
      'div',
      { className: 'row-fluid' },
      React.createElement(
        'h2',
        null,
        'Timer'
      ),
      React.createElement(
        'div',
        { className: 'btn-group', role: 'group' },
        React.createElement(StartButton, { time: '5', startTimer: this.startTimer }),
        React.createElement(StartButton, { time: '10', startTimer: this.startTimer }),
        React.createElement(StartButton, { time: '15', startTimer: this.startTimer })
      ),
      React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'btn-group', role: 'group' },
          React.createElement(Button, { labelText: 'Pause', apply: this.pause, disabled: this.state.paused }),
          React.createElement(Button, { labelText: 'Resume', apply: this.resume, disabled: !this.state.paused }),
          React.createElement(Button, { labelText: 'Cancel', apply: this.cancel }),
          React.createElement(Button, { labelText: 'Reset', apply: this.reset })
        )
      ),
      React.createElement(Timer, { timeLeft: this.state.timeLeft }),
      React.createElement(Sound, { file: 'flute_c_long_01.wav' })
    );
  }
}

ReactDOM.render(React.createElement(TimerWrapper, null), document.getElementById('timer-app'));
