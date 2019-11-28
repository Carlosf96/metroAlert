import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import MyMapComponent from "../dashboard/map";
import Search from "./search";

class MapDash extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div>
        <div style={{ height: "80vh" }} className="container ">
          <div className="row">
            <div className="col s12 center-align">
              <h4>
                <b>Hey there,</b> {user.name.split(" ")[0]} 🙋‍♂️
                <p>Please type in your destination</p>
                <Search />
                <MyMapComponent />
              </h4>
              <Link
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                className='btn-large waves-effect waves-light hoverable orange accent-3'
                to='/dashboard'
              >
                Dashboard
              </Link>
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                onClick={this.onLogoutClick}
                className="btn-large waves-effect waves-light hoverable orange accent-3"
              >
              Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MapDash.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logoutUser })(MapDash);
