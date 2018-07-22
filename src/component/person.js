import React, { Component } from 'react';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = {
      name: 'Jeff',
    }
  }
  handleClick = () => {
    const { name } = this.state;
    this.setState({'name': name !=='Jeff' ? 'Jeff' : 'Mark'});
  } 
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');    
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');        
  }  
  componentShouldUpdatte() {
    console.log('componentShouldUpdatte');        
  }
  componentWillUpdate() {
    console.log('componentWillUpdate');        
    setTimeout(() => console.log('-------------------------'),0);
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');        
  }  
  componentWillUnmount() {
    console.log('componentWillUnmount');        
  }    

  render() {
    const { name } = this.state;
    const { father } = this.props;
    console.log('render MyComponent');
    return (
      <div>
        <div>Hi, {name} My Father is {father}</div>
        <button onClick={this.handleClick}>change name by component</button>
      </div>
    )
  }
}

export default Person;
