import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';


class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className='navbar-fixed'>
          <div className='nav-wrapper white'>
            <Link 
              to='/'
              style={{
                fontFamily: 'monospace'
              }}
              className='col s5 brand-logo center orange-text'>
              <i className='material-icons black-text'>alarm</i>{/*airbnb style guide says always self close tags that dont have children*/}
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
