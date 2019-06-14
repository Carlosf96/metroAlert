import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import MyMapComponent from './map';
//import Search from './Search';
import MyTrips from './MyTrips';

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div>
        
      <div style={{ height: "150vh" }} className="container ">
        
        <div className="row">
        <div>
            
           </div>
          <div className="col s12 center-align">
            <h4>
                <b>Hey there,</b> {user.name.split(" ")[0]}
                <MyTrips/>
              <p className="flow-text grey-text text-darken-4">
                You are now logged into a FullStack{" "}
                <span style={{ fontFamily: "monospace" }}>MERN</span> apperino
                👻
              </p>
            </h4>
            <Link style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
                to="./map.js"
                className="btn btn-large waves-effect waves-light hoverable orange accent-3"
                >Go to Map</Link>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable orange accent-3"
            >
              Logout
            </button>
            
          </div>
          
        </div>
        <MyMapComponent />
        
        {/* <Search/> */}
        </div>
        </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
