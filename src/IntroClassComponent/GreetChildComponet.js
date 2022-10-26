import React, { Component } from 'react';

class Greetchild extends Component {
  constructor(props) {
    super(props); // this is the method which call the constructor of the parent class of this dervied class
    this.state = {
      name: 'Abhishek in child component',
      class: 'Front End',
    };

    console.log('Constructor is called in child component');
  }

  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps is called child component');
  }

  componentDidMount() {
    console.log('component did mount is called child component');
    return null;
  }

  changeStateValue() {
    this.setState({
      class: 'React JS',
    });
  }

  render() {
    console.log('render is called child component');
    return (
      <div>
        Hello This is a class component and you are studying in{' '}
        {this.state.name}'s {this.state.class} class
        <br />
        <button onClick={this.changeStateValue.bind(this)}> Change name</button>
      </div>
    );
  }
}

export default Greetchild;

// it is immportant to notice when does the componentDidMount method gets Called
