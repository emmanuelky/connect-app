import React, { Component } from "react";
import api from "../../api";

export default class ProfileUsername extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {}
    };
  }
  componentDidMount() {
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
  render() {
    return (
      <div className="container glow expand-md profileUserPage ">
        <div className=" expand-sm ">
          <hr />
          <hr />
          <hr />
          <h1>Welcome To My Profile</h1>
          <hr />
          <hr />
          
          <h5>  Full Name: {this.state.profile.firstname}{" "}
            {this.state.profile.lastname} ({this.state.profile.gender},{" "}
            {this.state.profile.age})
          </h5>
         <h5>Username: {this.state.profile.username}</h5> 
          <h5>Email: {this.state.profile.email}</h5>
          <hr />
          <hr />
          <h5>University: {this.state.profile.university}</h5>
          <h5>Institute: {this.state.profile.institute}</h5>
          <h5>Status: {this.state.profile.status}</h5>
          <h5>Specialization: {this.state.profile.specialization}</h5>
          <h5>
            <hr />
            <hr />
            Location: {this.state.profile.city} {this.state.profile.country}
          </h5>
          <h5>Social Network: {this.state.profile.social}</h5>
          <hr />
          <hr />
        </div>
      </div>
    );
  }
}
