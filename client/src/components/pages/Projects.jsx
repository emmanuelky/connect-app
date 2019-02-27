import React, { Component } from "react";
import {Link} from 'react-router-dom'
import api from "../../api";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  render() {
    return (
      <div className="Projects">
        <h2>List of projects</h2>
        <ul>
          {this.state.projects.map(name => (
            <li>
              {name} <Link to={"/projects/"}>Detail</Link>{" "}
            </li>
          ))}
        </ul>
        {this.state.message && <div className="info">
        {this.state.message}
        </div>}
      </div>
    );
  }
  componentDidMount() {
    api.getProjects()
      .then(projects => {
        console.log(projects);
        this.setState({
          projects: projects
        });
      })
      .catch(err => console.log(err));
  }
}

export default Projects;
