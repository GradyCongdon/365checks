import React, { Component } from 'react';
import _ from 'lodash';
import './App.css';

import dayOfYear from './date.js';
import Checkbox from './Checkbox.js';

class App extends Component {
  constructor(props) {
    super(props);
    const savedChecks = localStorage.getItem('checks');
    let checks = [];
    if (savedChecks) {
      checks = JSON.parse(savedChecks);
    }
    this.state = { checks: checks };
    this.onMark = this.onMark.bind(this);
  }

  onMark(event) {
    const i = parseInt(event.currentTarget.dataset.key, 10);
    let checks = this.state.checks;
    let index = checks.indexOf(i);
    if (index === -1) {
      checks = checks.concat(i)
    } else {
      checks.splice(index, 1)
    }

    this.setState({
      checks: checks,
    });
    localStorage.setItem('checks', JSON.stringify(checks));
  }

  render() {
    const doy = dayOfYear();
    const checks = _.range(366).map(i => {
      const checked = this.state.checks.includes(i) ? 'checked' : '';
      const today = doy === i ? 'today' : '';
      return (<Checkbox onMark={this.onMark} today={today} checked={checked} key={i} i={i}/>)
    });
    return (
      <div className="App">
        <h1>365 checks</h1>
        {checks}
      </div>
    );
  }
}

export default App;
