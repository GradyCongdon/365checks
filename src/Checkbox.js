import React, { Component } from 'react';
import './Checkbox.css';

class Checkbox extends Component {
  render() {
    return (
      <input type='checkbox'
        className={this.props.today}
        onChange={this.props.onMark} 
        checked={this.props.checked}
        data-key={this.props.i}
      />);
  }
}

export default Checkbox;


