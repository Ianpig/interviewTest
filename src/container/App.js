import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import Person from '../component/person';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      father: 'Paul Jeff',
      show: true
    }
  }
  changeFather = () => {
    const { father } = this.state;
    this.setState({
      father: father === 'Paul Jeff' ? 'Mr.Wang' : 'Paul Jeff'
    });
  }
  removeItem = () => {
    const { show } = this.state;
    this.setState({
      show: !show
    },() => console.log('-------------------------'));
  }
  render() {
    const { father, show } = this.state;
    console.log('render App');
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="person-container">
          { show && <Person {...{father}}/> }
          <hr />
          {show &&
          <button onClick={this.changeFather}>change pass state to component</button>
          }
          <button onClick={this.removeItem}>
            {show ? `remove` : `add`} component
          </button>
        </div>
        <ul className="life-cycle">
          <li>componentWillMount</li>
          <li>componentDidMount</li>
          <li>componentWillReceiveProps</li>
          <li>componentShouldUpdatte</li>
          <li>componentWillUpdate</li>
          <li>componentDidUpdate</li>
          <li>componentWillUnmount</li>
        </ul>
      </div>
    );
  }
}

export default App;
