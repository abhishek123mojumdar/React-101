import React, { Component } from 'react';

class Greetchild extends Component {
  constructor(props) {
    super(props); // this is the method which call the constructor of the parent class of this dervied class
    this.state = {
      name: 'Abhishek in child component',
      class: 'Front End',
    };
    this.childInputRef = React.createRef();
    console.log('Constructor is called in child component');
  }

  // static getDerivedStateFromProps() {
  //   console.log('getDerivedStateFromProps is called child component');
  //   return null;
  // }

  // componentDidMount() {
  //   console.log('component did mount is called child component');
  //   return null;
  // }

  changeStateValue() {
    this.setState({
      class: 'React JS',
    });
  }

  focusOnchildInput = () => {
    this.childInputRef.current.focus();
  };

  render() {
    //console.log('render is called child component');
    return (
      <div>
        <h4>Child component {this.state.class}</h4>
        <input
          type="text"
          placeholder="this is child component input box"
          ref={this.childInputRef}
        />
        <button onClick={this.changeStateValue.bind(this)}> Change name</button>
      </div>
    );
  }
}

export default Greetchild;

// it is immportant to notice when does the componentDidMount method gets Called
