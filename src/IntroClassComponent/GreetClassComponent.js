import React, { Component } from 'react';
import Greetchild from './GreetChildComponet';
import FwdRefComp from '../FEclassComponent/ForwardRefComponent';

class Greet extends Component {
  constructor(props) {
    super(props); // this is the method which call the constructor of the parent class of this dervied class
    this.state = {
      name: 'Abhishek',
      class: 'Front End',
    };
    this.inputRef = React.createRef();
    this.inputRefFn = React.createRef();
    this.componentRef = React.createRef();
    // We can create references of the class components also , this gives us the object of the class and hence we can use the methods and attributes defined in someother class

    console.log('Constructor is called');
  }

  // static getDerivedStateFromProps() {
  //   console.log('getDerivedStateFromProps is called');
  //   return null;
  // }

  // shouldComponentUpdate() {
  //   console.log('should component update has been called');
  //   return true;
  // }

  // getSnapshotBeforeUpdate() {
  //   console.log('getSnapshotBeforeUpdate has been called');
  //   return true;
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate has been called');
  // }

  componentDidMount() {
    console.log('component did mount is called');
    //console.log(this.inputRef); // this is called in component did mount , by this time the inputRef is already pointing to the input box . Thus the input box is returned as an object (DOM object) and we can call the focus method on the input box by using the ref object
    this.inputRef.current.focus();
    return null;
  }

  changeStateValue() {
    console.log(this.componentRef.current);
    this.componentRef.current.focusOnchildInput();
    //this.inputRefFn.current.focus();
    this.setState({
      class: 'React JS',
    });
  }

  render() {
    console.log('render is called');
    return (
      <div>
        <h2>Parent component {this.state.class}</h2>
        <input
          type="text"
          placeholder="this is parent component input box"
          ref={this.inputRef}
        />
        <button onClick={this.changeStateValue.bind(this)}> Change name</button>
        <Greetchild ref={this.componentRef} />
        <FwdRefComp ref={this.inputRefFn} />
      </div>
    );
  }
}

export default Greet;

// all these functions are getting called by default , we are not calling this functions manually . React is calling them
