import React, { Component } from 'react'

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: 0,
      lng: 0,
      travelmode: ''
    }
  }
  render() {
    return (
      <div>
        <input type='text' placeholder='Destination'></input>
      </div>
    )
  }
}
