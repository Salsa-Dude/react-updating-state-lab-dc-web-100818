// Code YouTubeDebugger Component Here

import React, { Component } from 'react';

class YouTubeDebugger extends Component {
  constructor() {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleSetting = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  

  render() {
    return (
      <div>
      <button onClick={this.handleClick} className="bitrate"></button>
      <button className="resolution" onClick={this.handleSetting}></button>
      </div>
    )
  }
}

export default YouTubeDebugger
