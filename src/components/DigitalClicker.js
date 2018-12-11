// Code DigitalClicker Component Here

import React, { Component } from 'react';

class DigitalClicker extends Component {
  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  timesClicked = () => {
    let number = this.state.timesClicked;
    this.setState({
      timesClicked: number + 1
    })
  }
  
  render() {
    return (
      <div>
        <button onClick={this.timesClicked}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

export default DigitalClicker