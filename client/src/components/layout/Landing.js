import React, { Component } from "react";
import { Link } from "react-router-dom";
class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align App-header orange-text">
            <h4 style={{ fontFamily: "Pacifico", fontSize: "42pt" }}>
              <b>metroAlert</b>
            </h4>
            <br />
            <p className="flow-text grey-text text-darken-1">
              Never Miss Your Stop Again!
            </p>
            <br />
            <Link
              to="/register"
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect waves-light hoverable orange accent-3"
            >
              Register
            </Link>
            <Link
              to="/login"
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginLeft: "150px"
              }}
              className="btn btn-large waves-effect waves-light hoverable orange accent-3"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
