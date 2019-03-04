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
     <div></div>
    );
  }
}
