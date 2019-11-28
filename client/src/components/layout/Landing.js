import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
//import image from './metro_BG.jpg'
class Landing extends Component {
  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push('/dashboard')
    }
  }
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align App-header orange-text">
            <h4 className='flow-text' style={{ fontFamily: "Pacifico", fontSize: "42pt" }}>
              <b>metroAlert</b>
            </h4>
            <br />
            <p className="flow-text grey-text text-darken-1">
              Never Miss Your Stop Again!
            </p>
            <br />
            <div className="col s12 m6">
              <Link
                to="/register"
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable orange accent-3 z-depth-2"
              >
                Register
              </Link>
              </div>
              <div className="col s12 m6">
              <Link
                to="/login"
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                }}
                className="btn btn-large waves-effect waves-light hoverable orange accent-3 z-depth-2"
                >
                Login
              </Link>
              </div>
          </div>
        </div>
      </div>
    );
  }
}


Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);