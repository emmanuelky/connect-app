import React, { Component } from "react";
import api from "../../api";

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
        <h2>profile</h2>
        <div>{this.state.profile.username}</div>
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
