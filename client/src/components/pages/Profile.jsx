import React, { Component } from "react";
import api from "../../api";
import { Link } from "react-router-dom";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      projects: []
    };
  }

  deleteProject(projectId) {
    api.deleteProject(projectId).then(data => {
      this.setState({
        projects: this.state.projects.filter(p => p._id !== projectId),
        message: data.message
      });
      // Remove the message after 3 seconds
      setTimeout(() => {
        this.setState({
          message: null
        });
      }, 2000);
    });
  }

  render() {
    return (
      <div className="container col-md-18 mb-12 profile">
        <h2>My Profile</h2>
        <div>
          <h5>
            Name: {this.state.profile.firstname} {this.state.profile.lastname} (
            {this.state.profile.gender}, {this.state.profile.age})
          </h5>
          <h5>Email: {this.state.profile.email}</h5>
          <h5>University: {this.state.profile.university}</h5>
          <h5>Institute: {this.state.profile.institute}</h5>
          <h5>Status: {this.state.profile.status}</h5>
          <h5>Specialization: {this.state.profile.specialization}</h5>
          <h5>
            Location: {this.state.profile.city} {this.state.profile.country}
          </h5>
          <h5>Social Network: {this.state.profile.social}</h5>
        </div>
        <Link to={"/edit-profile/"}>Edit</Link> <br />
        <br />
          <h2>My Projects</h2>
        <div>
          <ul>
            {this.state.projects.map(p => (
              <li key={p._id} >
                <img className="projectImage" src={p.projectimage} />
                <h5>Name: {p.name}</h5>
                <h5>Date: {p.date}</h5>
                <h5>Technology Used: {p.technologyused}</h5>
                <Link to={"/edit-project/"}>Edit Project</Link> <br />
                <button onClick={() => this.deleteProject(p._id)}>
                  Delete Project
                </button>
              </li>
            ))}
          </ul>
        </div>
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

    api
      .getProjectsbyProfile()
      .then(projects => {
        console.log("Projects", projects);
        this.setState({
          projects: projects
        });
      })
      .catch(err => console.log(err));
  }
}

export default Profile;
