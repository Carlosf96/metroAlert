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
        <div className='input-field'>
          <i className='prefix material-icons'>add_location</i>
          <input type='text' id='origin_input'/>
          <label for='origin_input'>Origin</label>
        </div>
        <div className='input-field'>
          <i className='prefix material-icons'>add_location</i>
          <input type='text' id='destination_input'/>
          <label for='destination_input'>Destination</label>
        </div>
      </div>
    )
  }
}
