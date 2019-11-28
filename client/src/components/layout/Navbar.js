import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className='navbar-fixed s12 m6 l3'>
          <div className='nav-wrapper white'>
            <Link 
              to='/'
              style={{
                fontFamily: 'monospace'
              }}
              className='brand-logo center orange-text s12 m6 l3'>
              <i className='material-icons black-text'>alarm</i>
              metroAlert
              </Link>
          </div>
        </nav> 
      </div>
    )
  }
}

Navbar.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
)(Navbar);
