const Timer = (props) => {
    if (props.timeLeft == 0) {
      document.getElementById('end-of-time').play();
    }
    if (props.timeLeft == null || props.timeLeft == 0) {
      return <div/>;
    }
    return <h1>Time left: {props.timeLeft}</h1>
  };

const StartButton = (props) => {
    return <button
      type="button"
      className="btn-default btn"
      onClick={()=>{props.startTimer(props.time)}}>
      {props.time} seconds
    </button>
  };

const Button = (props) => {
      return <button type="button" className="btn-default btn" disabled={props.disabled} onClick={()=>{props.apply()}}>
        {props.labelText}
      </button>
  };

class TimerWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {timeLeft: null, timeFrom: null, timer: null, paused: false};
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
      this.setState({timeLeft: timeLeft});
    }, 1000)
    return this.setState({timeLeft: timeLeft, timeFrom: timeLeft, timer: timer});
  }
  pause() {
    if(this.state.timeLeft > 0 && !this.state.paused) {
      this.setState({paused: true});
      clearInterval(this.state.timer);
    }
  }
  resume() {
    if(this.state.paused && this.state.timeLeft > 0) {
      this.setState({paused: false});
      this.startTimer(this.state.timeLeft);
    }
  }
  cancel() {
    if(this.state.timeLeft > 0) {
      this.setState({
        timeLeft: null,
        paused: false
      });
      clearInterval(this.state.timer);
    }
  }
  reset() {
    if(this.state.timeLeft > 0) {
      this.setState({timeLeft:this.state.timeFrom});
    }
  }
  render() {
    console.log('render');
    return (
      <div className="row-fluid">
        <h2>Timer</h2>
        <div className="btn-group" role="group">
          <StartButton time="5" startTimer={this.startTimer}/>
          <StartButton time="10" startTimer={this.startTimer}/>
          <StartButton time="15" startTimer={this.startTimer}/>
        </div>
        <div>
          <div className="btn-group" role="group">
            <Button labelText="Pause" apply={this.pause} disabled={this.state.paused}/>
            <Button labelText="Resume" apply={this.resume} disabled={!this.state.paused}/>
            <Button labelText="Cancel" apply={this.cancel}/>
            <Button labelText="Reset" apply={this.reset}/>
          </div>
        </div>
        <Timer timeLeft={this.state.timeLeft}/>
      <audio id="end-of-time" src="flute_c_long_01.wav" preload="auto"></audio>
      </div>
    )
  }
}

ReactDOM.render(
  <TimerWrapper/>,
  document.getElementById('timer-app')
)
