class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: []
    };
  }

  render() {
    return React.createElement(
      'div',
      null,
      this.state.menu.map((v, i) => {
        return React.createElement(
          'div',
          { key: i },
          React.createElement(Link, { label: v })
        );
      })
    );
  }

  componentDidMount() {
    fetch('http://localhost:8080/menu.json').then(data => {
      console.log(data);
      let json = data.json();
      console.log(json);
      return json;
    }).then(data => {
      this.setState({ menu: data });
    });
  }
}

class Link extends React.Component {
  render() {
    const url = '/' + this.props.label.toLowerCase().trim().replace(' ', '-');
    return React.createElement(
      'div',
      null,
      React.createElement(
        'a',
        { href: url },
        this.props.label
      ),
      React.createElement('br', null)
    );
  }
}

ReactDOM.render(React.createElement(Menu, null), document.getElementById('menu'));
