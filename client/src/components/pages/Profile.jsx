import React, { Component } from "react";
import api from "../../api";
import {Link} from 'react-router-dom'

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {}
    };
  }
  render() {
    return (
      <div className="profile">
        <h2>My Profile</h2>
        <div>
          <h5>Name: {this.state.profile.firstname} {this.state.profile.lastname} ({this.state.profile.gender}, {this.state.profile.age})</h5>
          <h5>Email: {this.state.profile.email}</h5>
          <h5>University: {this.state.profile.university}</h5>
          <h5>Institute: {this.state.profile.institute}</h5>
          <h5>Status: {this.state.profile.status}</h5>
          <h5>Specialization: {this.state.profile.specialization}</h5>
          <h5>Location: {this.state.profile.city} {this.state.profile.country}</h5>
          <h5>Social Network: {this.state.profile.social}</h5>
        </div>
        <Link to={"/edit-profile/"}>Edit</Link>{' '}
       <br /><br />
        <h1>My Projects</h1>
      </div>
    );
  }
  componentDidMount() {
    api
      .getProfile()
      .then(user => {
        console.log(user);
        this.setState({
          profile: user
        });
      })
      .catch(err => console.log(err));
  }
}

export default Profile;
