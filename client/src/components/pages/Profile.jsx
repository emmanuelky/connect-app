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
        <div className="rounded border m-5 font-italic myprofile border-dark shadow p-3 mb-5 bg-white rounded">
        <i class="fas fa-user-circle"></i>
          <h2>My Profile</h2>
          
          <hr />
          <hr />
          <h5>
            Full Name: {this.state.profile.firstname} {this.state.profile.lastname} (
            {this.state.profile.gender}, {this.state.profile.age})
          </h5>
          Username: {this.state.profile.username}
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
            <Link to={"/edit-profile/"} ><button type="button" class="btn btn-dark m-10">Edit</button></Link>
          
          <br />
        </div>
        <br />
        <h2>My Projects</h2>
        <div className="rounded border m-10 myproject d-flex flex-wrap d-flex flex-row bd-highlight mb-3 border-dark shadow p-3 mb-5 bg-white rounded">
          <ul className="d-flex flex-wrap font-italic ">
            {this.state.projects.map(p => (
              <li key={p._id}>
                <img className="projectImage grow" src={p.projectimage} />
                <h5>{p.name}</h5>
                <h5>{p.date}</h5>
                <h5>Technology Used: {p.technologyused}</h5>

                <button type="button" className="btn btn-light mr-5 text-white"><Link to={"/edit-project/"+p._id}>Edit Project</Link></button>
               
                <button className="btn btn-danger" onClick={() => this.deleteProject(p._id)}>
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
