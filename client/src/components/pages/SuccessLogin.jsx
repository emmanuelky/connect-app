import React, { Component } from "react";
import api from "../../api";

export default class SuccessLogin extends Component {
  render() {
    return (
      <div className="container successlogin">
        <h1>Login Successfully</h1>
        <br />
        <h2>Go Grap A Cup Of Coffee</h2>
        <br />
        <p>You will be redirected to your profile in 2 seconds</p>
      </div>
    );
  }
  componentDidMount() {
    api.getProfile().then(user => {
      setTimeout(() => {
        // Redirect the user the "/profile"
        this.props.history.push("/profile");
      }, 2000);
    });
  }
}
