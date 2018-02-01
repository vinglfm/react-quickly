class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: []
    }
  }

  render() {
    return (
      <div>
        {this.state.menu.map((v,i) => {
          return <div key={i}><Link label={v}/></div>
        })}
      </div>
    );
  }

  componentDidMount() {
    fetch('http://localhost:8080/menu.json')
      .then((data) => {
        console.log(data);
        let json = data.json();
        console.log(json);
        return json;
      }).then((data) => {
        this.setState({menu: data});
      });
  }
}

class Link extends React.Component {
  render() {
    const url='/'
      + this.props.label
        .toLowerCase()
        .trim()
        .replace(' ', '-')
    return <div>
      <a href={url}>
      {this.props.label}
      </a>
      <br/>
    </div>
  }
}

ReactDOM.render(<Menu />, document.getElementById('menu'))
