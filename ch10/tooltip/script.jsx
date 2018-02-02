class Tooltip extends React.Component {
  constructor(props) {
    super(props)
    this.state = {opacity: false}
    this.toggle = this.toggle.bind(this);
    this.createTriggerProps = this.createTriggerProps.bind(this);
  }

  toggle() {
    const tooltipNode = ReactDOM.findDOMNode(this)
    this.setState({
      opacity: !this.state.opacity,
      top: tooltipNode.offsetTop,
      left: tooltipNode.offsetLeft
    })
  }

  render() {
    let style = {
      zIndex: (this.state.opacity) ? 1000 : -1000,
      opacity: +this.state.opacity,
      top: (this.state.top || 0) + (this.props.position === 'below' ? 20 : -30),
      left: (this.state.left || 0) - 30
    }

    if(this.props.position === 'above') {
        style['white-space'] = 'nowrap';
        style['overflow'] = 'hidden';
        style['text-overflow'] = 'ellipsis';
    }

    let props = this.createTriggerProps();

    return (
      <div style={{display: 'inline'}}>
        <span style={{color: 'blue'}} {...props}>
          {this.props.children}
        </span>
        <div className={`tooltip ${this.props.position === 'below' ? 'bottom' : 'top'}`} style={style} role="tooltip">
          <div className="tooltip-arrow"></div>
          <div className="tooltip-inner">
            {this.props.text}
          </div>
        </div>
      </div>
    )
  }

  createTriggerProps() {
    let props = {};
    if(this.props.trigger === 'click') {
      props.onClick = this.toggle;
    } else if(this.props.trigger === 'move') {
      props.onMouseEnter = this.toggle;
      props.onMouseOut = this.toggle;
    }
    return props;
  }
}

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  trigger: PropTypes.oneOf(['click', 'move']),
  position: PropTypes.oneOf(['below', 'above'])
}

Tooltip.defaultProps = {
  trigger: 'move',
  position: 'below'
}

ReactDOM.render(<div>
  <Tooltip text="Master Express.js-The Node.js Framework For Your Web Development" trigger="click" position="above">Pro Express.js</Tooltip> was published in 2014. It was one of the first books on v4.x. And it was my second book published with Apress
    after <Tooltip text="Practical Node.js: Building Real-World Scalable Web Apps" trigger="move">Practical Node.js</Tooltip>.
    ...
    The main focus of this post is to compare the four Node.js/Io.js frameworks: <Tooltip text="HTTP API server">Hapi</Tooltip>, <Tooltip text="Release the Kraken!">Kraken</Tooltip>, <Tooltip text="Sail away">Sails.js</Tooltip> and <Tooltip text="IBM of frameworks">Loopback</Tooltip>. There are many other frameworks to consider, but I had to draw the line somewhere.
  </div>,
  document.getElementById('tooltip'))
