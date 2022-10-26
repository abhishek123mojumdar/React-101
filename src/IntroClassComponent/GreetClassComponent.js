import React, { Component } from 'react';
import Greetchild from './GreetChildComponet';

class Greet extends Component {
  constructor(props) {
    super(props); // this is the method which call the constructor of the parent class of this dervied class
    this.state = {
      name: 'Abhishek',
      class: 'Front End',
    };

    console.log('Constructor is called');
  }

  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps is called');
    return null;
  }

  shouldComponentUpdate() {
    console.log('should component update has been called');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate has been called');
    return true;
  }

  componentDidUpdate() {
    console.log('componentDidUpdate has been called');
  }

  componentDidMount() {
    console.log('component did mount is called');
    return null;
  }

  changeStateValue() {
    this.setState({
      class: 'React JS',
    });
  }

  render() {
    console.log('render is called');
    return (
      <div>
        Hello This is a class component and you are studying in{' '}
        {this.state.name}'s {this.state.class} class
        <br />
        <button onClick={this.changeStateValue.bind(this)}> Change name</button>
        <Greetchild />
      </div>
    );
  }
}

export default Greet;

// all these functions are getting called by default , we are not calling this functions manually . React is calling them
