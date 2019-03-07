import React, { Component } from "react";
import api from "../../api";
import { Link } from "react-router-dom";

export default class ProfileUsername extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {}
    };
  }
  getProfile() {
    api
      .getProfileWithUsername(this.props.match.params.username)
      .then(user => {
        console.log(user);
        this.setState({
          profile: user
        });
      })
      .catch(err => console.log(err));
  }
  componentDidMount() {
    this.getProfile();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.username !== prevProps.match.params.username) {
      this.getProfile();
    }
  }
  render() {
    return (
      <div className="container justify-content-center profileUserPage text-light p-5 m-3">
        <h1 className="mt-5">You are welcome to my profile</h1>
        <h6>
          {" "}
          <i> (Greater goals are achieved when we work together)</i>
        </h6>

        <img
          className="round-images mt-5"
          src={this.state.profile.profileimage}
          width="150px"
          height="150px"
        />
        <br />
        <hr />
        <h5>
          {" "}
          My name is {this.state.profile.firstname}{" "}
          {this.state.profile.lastname} ({this.state.profile.gender},{" "}
          {this.state.profile.age})
          <h5>({this.state.profile.specialization})</h5>
          <i>
            {" "}
            <h5>Username: {this.state.profile.username}</h5>
          </i>
        </h5>
        <hr />
        <hr />
        <h3>Contact Me On</h3>
        <h5>Email: {this.state.profile.email}</h5>
        <h5>
          {this.state.profile.social &&
            this.state.profile.social.includes("http") && (
              <a target="_blank" href={this.state.profile.social}>
                Social Network
              </a>
            )}
        </h5>
        <hr />
        <hr />
        <h3>Little About Me</h3>
        <h5>University: {this.state.profile.university}</h5>
        <h5>Institute: {this.state.profile.institute}</h5>
        <h5>Status: {this.state.profile.status}</h5>
        <h5 className="mb-5">
          Location: {this.state.profile.city}, {this.state.profile.country}
        </h5>
      </div>
    );
  }
}
