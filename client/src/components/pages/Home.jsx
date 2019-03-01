import React, { Component } from "react";
import api from "../../api";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      projects: []
    };
  }

  componentDidMount() {
    api
      .getProjects()
      .then(projects => {
        console.log(projects);
        this.setState({
          projects: projects
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

  render() {
    return (
      <div className="Home">
        <h2>Top 10 Recent Projects</h2>

        <ul>
          <div>
            {this.state.projects.map(p => (
              <li key={p._id}>
                <img className="projectImage" src={p.projectimage} />
                <h5>
                  Creator: {this.state.profile.firstname}{" "}
                  {this.state.profile.lastname}{" "}
                </h5>
                <h5>Date Added: {p.date}</h5>
                <br />
                <br />
                <br />
              </li>
            ))}
          </div>
        </ul>
        {/* <img className="projectImage" src={this.state.projects.projectimage} /> */}
      </div>
    );
  }
}

export default Home;
