import React, { Component } from "react";
import api from "../../api";
import { Link } from "react-router-dom";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }
  // deleteProject(_creator){
  //   api.deleteProject(_creator)
  //     .then(data => {
  //       this.setState({
  //         _creator: this.state._creator.filter(c => c._id !== _creator),
  //         message: data.message
  //       })
  //       // Remove the message after 3 seconds
  //       setTimeout(() => {
  //         this.setState({
  //           message: null
  //         })
  //       }, 3000)
  //     })
  // }
  render() {
    return (
      <div className="projects">
        <h2>List of Projects</h2>
        <div>
          <ul>
          <Link to={"/edit-project/"}>Edit Project
            {this.state.projects.map(p => (
              <li key={p._id}>
                {p.name}
                {p.date}
                <img className="projectImage" src={p.projectimage} />
              </li>
            ))}
            </Link>{' '}
          </ul>
        </div>
        {this.state.message && <div className="info">{this.state.message}</div>}
        <ul>
          {this.state.projects.map(p => <li key={p._id}>
            {p.name}{p.date} 
            <div >
              <img className="projectImage" src={p.projectimage} alt=""/>
            </div>
          </li>)}
        </ul>
        {this.state.message && <div className="info">
        
          {this.state.message}
        </div>}
      </div>
    );
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
  }
}
export default Projects;
