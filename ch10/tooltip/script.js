var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = { opacity: false };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    const tooltipNode = ReactDOM.findDOMNode(this);
    this.setState({
      opacity: !this.state.opacity,
      top: tooltipNode.offsetTop,
      left: tooltipNode.offsetLeft
    });
  }
  render() {
    const style = {
      zIndex: this.state.opacity ? 1000 : -1000,
      opacity: +this.state.opacity,
      top: (this.state.top || 0) + 20,
      left: (this.state.left || 0) - 30
    };

    var props = {};
    if (this.props.trigger === 'click') {
      props.onClick = this.toggle;
    } else if (this.props.trigger === 'move') {
      props.onMouseEnter = this.toggle;
      props.onMouseOut = this.toggle;
    }

    return React.createElement(
      'div',
      { style: { display: 'inline' } },
      React.createElement(
        'span',
        _extends({ style: { color: 'blue' } }, props),
        this.props.children
      ),
      React.createElement(
        'div',
        { className: 'tooltip bottom', style: style, role: 'tooltip' },
        React.createElement('div', { className: 'tooltip-arrow' }),
        React.createElement(
          'div',
          { className: 'tooltip-inner' },
          this.props.text
        )
      )
    );
  }
}

ReactDOM.render(React.createElement(
  'div',
  null,
  React.createElement(
    Tooltip,
    { text: 'Master Express.js-The Node.js Framework For Your Web Development', trigger: 'click' },
    'Pro Express.js'
  ),
  ' was published in 2014. It was one of the first books on v4.x. And it was my second book published with Apress after ',
  React.createElement(
    Tooltip,
    { text: 'Practical Node.js: Building Real-World Scalable Web Apps', trigger: 'move' },
    'Practical Node.js'
  ),
  '. ... The main focus of this post is to compare the four Node.js/Io.js frameworks: ',
  React.createElement(
    Tooltip,
    { text: 'HTTP API server' },
    'Hapi'
  ),
  ', ',
  React.createElement(
    Tooltip,
    { text: 'Release the Kraken!' },
    'Kraken'
  ),
  ', ',
  React.createElement(
    Tooltip,
    { text: 'Sail away' },
    'Sails.js'
  ),
  ' and ',
  React.createElement(
    Tooltip,
    { text: 'IBM of frameworks' },
    'Loopback'
  ),
  '. There are many other frameworks to consider, but I had to draw the line somewhere.'
), document.getElementById('tooltip'));
