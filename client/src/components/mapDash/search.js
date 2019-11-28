import React, { Component } from 'react'

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      origin: '',
      destination: '',
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const tripDetails = {
      origin: this.state.origin,
      destination: this.state.destination,
    };
    // commenceTrip(tripDetails);
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
