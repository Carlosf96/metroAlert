import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
  constructor(props) {
    super(props)
    this.state={
      name: '',
      email: '',
      pasword: '',
      password2: '',
      errors: {},
    };

    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  
  }
  onChange(e){
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  
  onSubmit(e){
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }

    console.log(newUser)

  }

  render() {
    const { errors } = this.state//destruct state for easier access to our errors
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s8 offset-s2'>
           <Link to='/' className='btn-flat waves-effect'>
           <i className='material-icons left'>
            keyboard_backspace
           </i> Back to Home
           </Link>
           <div className='col s12' style={{ paddingLeft: '11.250px' }}>
            <h4>
              <b>Register</b> below
            </h4>
            <p className='grey-text darken-1'>
              Already have an account? <Link to='/Login'>Login</Link>
            </p>
           </div>
           <form noValidate onSubmit={this.onSubmit}>
            <div className='input-field col s12'>
              <input
                onChange={this.onChange}
                value={this.state.name}
                error={errors.name}
                id='name'
                type='text'
                />
                <label htmlFor='name'>Name</label>
            </div>
            <div className='input-field col s12'>
              <input
                onChange={this.onChange}
                value={this.state.email}
                error={errors.email}
                id='email'
                type='email'
                />
                <label htmlFor='email'>Email</label>
            </div> 
            <div className='input-field col s12'>
              <input
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                id='password'
                type='password'
                />
                <label htmlFor='password'>Password</label>
            </div> 
            <div className='input-field col s12'>
              <input
                onChange={this.onChange}
                value={this.state.password2}
                error={errors.password2}
                id='password2'
                type='password2'
                />
                <label htmlFor='password2'>Confirm Password</label>
            </div> 
            <div className='col s12'>

            </div>
           </form>
          </div>
        </div>
      </div>
    )
  }
}

componentName.propTypes = {

}

export default Register;