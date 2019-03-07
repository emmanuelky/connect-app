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
        <div className="rounded border m-5 font-italic text-primary myprofile border-light shadow p-3 mb-5 bg-white rounded ">
          <hr />
          <img
            className="round-images"
            src={this.state.profile.profileimage}
            width="150px"
            height="150px"
          />
          <hr />
          <h5>
            {this.state.profile.firstname} {this.state.profile.lastname} (
            {this.state.profile.gender}, {this.state.profile.age})
          </h5>
          <h5>Specialization: {this.state.profile.specialization}</h5>

          <hr />
          <h5>Username: {this.state.profile.username}</h5>
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
          <h5>University: {this.state.profile.university}</h5>
          <h5>Institute: {this.state.profile.institute}</h5>
          <h5>Status: {this.state.profile.status}</h5>
          <h5>
            Location: {this.state.profile.city} {this.state.profile.country}
          </h5>
          <hr />
          <hr />
          <Link to={"/edit-profile/"}>
            <button type="button" class="btn btn-dark m-10">
              Edit
            </button>
          </Link>
          <br />
        </div>
        <br />
        <br />

        <div className="myproject p-3 mb-3">
          <h2 className="mt-5">My Projects</h2>
          <br />

          <div className="d-flex flex-wrap card-group shadow-lg p-2 mb-3 bg rounded">
            <div className="row justify-content-center">
              {this.state.projects.map(p => (
                <div className="col-sm-3 justify-content-center">
                  <div className="p-2 shadow-lg p-1 mb-2 bg rounded">
                    <img
                      className="projectImage grow rounded-images"
                      src={p.projectimage}
                    />{" "}
                    <br />
                    <h6>{p.name}</h6>
                    <button type="button" className="btn btn-light text-white">
                      <Link to={"/edit-project/" + p._id}>Edit</Link>
                    </button>{" "}
                    <button
                      className="btn btn-danger"
                      onClick={() => this.deleteProject(p._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
